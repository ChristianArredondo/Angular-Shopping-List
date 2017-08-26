import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ingredients: Ingredient[]}>;

  constructor(
    private shoppingService: ShoppingService,
    private store: Store<{shoppingList:
    {ingredients: Ingredient[]}}>
  ) { }

  ngOnInit () {
    this.shoppingListState = this.store.select('shoppingList');
  }

  onEditItem (index: number) {
    this.shoppingService.startedEditing.next(index);
  }

}
