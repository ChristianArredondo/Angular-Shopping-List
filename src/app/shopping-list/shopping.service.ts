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

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
    console.log(this.ingredients);
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

