import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  shoppingListState: Observable<{ingredients: Ingredient[]}>;
  private subscription: Subscription;

  constructor(
    private shoppingService: ShoppingService,
    private store: Store<{shoppingList:
    {ingredients: Ingredient[]}}>
  ) { }

  ngOnInit () {
    this.shoppingListState = this.store.select('shoppingList');
    // this.subscription = this.shoppingService.ingredientsChanged
    // .subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // )
  }

  onEditItem (index: number) {
    this.shoppingService.startedEditing.next(index);
  }

  ngOnDestroy () {
    // this.subscription.unsubscribe();
  }

}
