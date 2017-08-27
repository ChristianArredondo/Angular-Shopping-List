import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipes.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes() {
    // return this.http.put(
      // 'https://ng-recipe-book-d07b5.firebaseio.com/recipes.json?auth=' + token,
    //   this.recipeService.getRecipes()
    const req = new HttpRequest('PUT', 'https://ng-recipe-book-d07b5.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(), {reportProgress: true});
    return this.httpClient.request(req);
  }

  getRecipes() {
    // 'https://ng-recipe-book-d07b5.firebaseio.com/recipes.json?auth=' + token,
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-d07b5.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json'
    })
      .map(
        (recipes) => {
          console.log(recipes);
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
// 'https:ng-recipe-book-d07b5.firebaseio.com/recipes.json?auth=' + token)
