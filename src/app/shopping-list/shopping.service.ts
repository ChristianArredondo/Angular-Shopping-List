import {
  Ingredient
} from '../shared/ingredient.model';
import {
  Subject
} from 'rxjs/Subject';


export class ShoppingService {
  startedEditing = new Subject < number > ();
  ingredientsChanged = new Subject < Ingredient[] > ();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 20)
  ];

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  onIngredientsAdded(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients)
    //   this.ingredients.push(ingredient);
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}

