import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';


export class ShoppingService {
    startedEditing = new Subject<number>();
    ingredientsAdded = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients() {
        return this.ingredients.slice()
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    onIngredientAdded(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsAdded.next(this.ingredients.slice());
        console.log(this.ingredients);
    }

    onIngredientsAdded(ingredients: Ingredient[]) {
      // for (let ingredient of ingredients)
      //   this.ingredients.push(ingredient);
      this.ingredients.push(...ingredients);
      this.ingredientsAdded.next(this.ingredients.slice());
    }

    updateIngredient (index: number, newIngredient: Ingredient ) {
        console.log('updateIngredient');
        console.log(index);
        console.log(newIngredient);
        this.ingredients[index] = newIngredient;
        console.log(this.ingredients);
        this.ingredientsAdded.next(this.ingredients.slice());
    }
}
