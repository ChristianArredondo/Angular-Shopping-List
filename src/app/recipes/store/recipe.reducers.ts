import { Recipe } from '../recipes.model';
import { Ingredient } from '../../shared/ingredient.model';
import * as RecipeActions from './recipe.actions';

export interface FeatureState {
  recipes: State;
}

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [
    new Recipe('Sandwich',
    'Classic recipe',
    'http://www.saladworks.com/sites/default/files/Sandwich-AvocadoBLT.jpg',
    [
      new Ingredient('Bread', 2),
      new Ingredient ('Meat', 1)
    ]),
    new Recipe('Whole Wheat Spaghetti',
    'Healthy and delicious spaghetti',
    'https://mobile-cuisine.com/wp-content/uploads/2013/01/spaghetti-with-meat-sauce.jpg',
  [
      new Ingredient('Pasta', 6),
      new Ingredient ('Meat', 3),
      new Ingredient ('Spaghetti Sauce', 1)
    ])
  ]
};

export function recipeReducer (state = initialState, action: RecipeActions.RecipeActions) {
  switch (action.type) {
    case RecipeActions.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload]
      }
    case RecipeActions.ADD_RECIPE:
      return {
        ...state,
        recipces: [...state.recipes, action.payload]
    }
    case RecipeActions.UPDATE_RECIPE:
      const recipe = state.recipes[action.payload.index];
      const updatedRecipe = {
        ...recipe,
        ...action.payload.updatedRecipe
      }
      const recipes = [...state.recipes]
      recipes[action.payload.index] = updatedRecipe;
      return {
        ...state,
        recipes: recipes
      }
    case RecipeActions.DELETE_RECIPE:
      const recipesForDelete = [...state.recipes];
      recipesForDelete.splice(action.payload, 1);
      return {
        ...state,
        recipes: recipesForDelete
      }
    default:
    return state
  }
}