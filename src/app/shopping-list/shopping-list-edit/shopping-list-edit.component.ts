import {
  Component,
  OnInit,
  EventEmitter,
  OnDestroy,
  ViewChild} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm, Form } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromApp from '../../store/app.reducers';

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
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.subscription = this.store.select('shoppingList')
      .subscribe(
        data => {
          if (data.editedIngredientIndex > -1) {
            this.editedItem = data.editedIngredient;
            this.editMode = true;
            this.slForm.setValue({
              name: this.editedItem.name,
              amount: this.editedItem.amount
            })
          } else {
            this.editMode = false;
          }
        }
      );
    }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.store.dispatch( new ShoppingListActions.UpdateIngredient({ingredient: newIngredient}));
    } else {
    this.store.dispatch( new ShoppingListActions.AddIngredient(newIngredient))
  }
  this.clearForm();
}

clearForm () {
  this.slForm.reset();
  this.editMode = false;
}

onDeleteItem (i: number) {
    this.store.dispatch( new ShoppingListActions.DeleteIngredient());
    this.clearForm();
  }

ngOnDestroy () {
    this.subscription.unsubscribe();
    this.store.dispatch( new ShoppingListActions.StopEdit());
  }

}
