import {
  Component,
  OnInit,
  EventEmitter,
  OnDestroy,
  ViewChild} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { NgForm, Form } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(
    private shoppingService: ShoppingService,
    private store: Store<{shoppingList:
      {ingredients: Ingredient[]}}>
  ) { }

  ngOnInit() {
    this.subscription = this.shoppingService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shoppingService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }
      );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
    // this.shoppingService.onIngredientAdded(newIngredient);
    this.store.dispatch( new ShoppingListActions.AddIngredient(newIngredient))
    }
    this.clearForm();
  }

  clearForm () {
    this.slForm.reset();
    this.editMode = false;
  }

  onDeleteItem (i: number) {
    this.shoppingService.deleteIngredient(this.editedItemIndex);
  }

  ngOnDestroy () {
      this.subscription.unsubscribe();
    }

}
