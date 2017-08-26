import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT;
  payload: Ingredient
}

export type ShoppingListActions = AddIngredient;
