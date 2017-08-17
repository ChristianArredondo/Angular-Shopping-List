import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipes.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(
    private http: Http,
    private recipeService: RecipeService,
    private auth: AuthService
  ) {}

  storeRecipes () {
    const token = this.auth.getToken()

    return this.http.put(
      'https://ng-recipe-book-d07b5.firebaseio.com/recipes.json?auth=' + token,
      this.recipeService.getRecipes()
    )
  }

  fetchRecipes () {
    const token = this.auth.getToken()

    return this.http.get(
      'https://ng-recipe-book-d07b5.firebaseio.com/recipes.json?auth=' + token)
        .map(
          (response: Response) => {
            const recipes: Recipe[] = response.json();
            for (const recipe of recipes) {
              if (!recipe['ingredients']) {
                console.log(recipe);
                recipe['ingredients'] = [];
              }
            }
            return recipes;
          }
        )
        .subscribe(
          (recipes: Recipe[]) => {
            console.log(recipes);
            this.recipeService.setRecipes(recipes);
          }
        )
  }
}
