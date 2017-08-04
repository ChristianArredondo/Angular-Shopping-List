import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';


export class ShoppingService {
    ingredientAdded = new Subject<Ingredient>();
    ingredientsAdded = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients() {
        return this.ingredients.slice()
    }

    onIngredientAdded(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsAdded.next(this.ingredients.slice());
    }

    onIngredientsAdded(ingredients: Ingredient[]) {
      // for (let ingredient of ingredients)
      //   this.ingredients.push(ingredient);
      this.ingredients.push(...ingredients);
      this.ingredientsAdded.next(this.ingredients.slice());
    }
}
