import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import { fromPromise } from 'rxjs/observable/fromPromise';
import * as firebase from 'firebase';
import * as RecipeActions from '../store/recipe.actions';
import * as fromRecipes from '../store/recipe.reducers';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Recipe } from '../recipe-list/recipe.model';
import { Store } from '@ngrx/store';


@Injectable()
export class RecipeEffects {
  @Effect()
  recipesFetch = this.actions$
    .ofType(RecipeActions.FETCH_RECIPES)
    .switchMap((action: RecipeActions.FetchRecipes) => {
      return this.httpClient.get<Recipe[]>('https://ng-recipe-book-d07b5.firebaseio.com/recipes.json', {
        observe: 'body',
        responseType: 'json'
      })
    })
    .map(
      (recipes) => {
        console.log(recipes);
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return {
          type: RecipeActions.SET_RECIPES,
          payload: recipes
        }
      }
    );

    @Effect({dispatch: false})
    recipesStore = this.actions$
      .ofType(RecipeActions.STORE_RECIPES)
      .withLatestFrom(this.store$.select('recipes'))
      .switchMap(([action, state]) => {
        const req = new HttpRequest('PUT', 'https://ng-recipe-book-d07b5.firebaseio.com/recipes.json',
        state.recipes, {reportProgress: true});
        return this.httpClient.request(req);
      })

  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
    private store$: Store<fromRecipes.FeatureState>
  ) { }

}
