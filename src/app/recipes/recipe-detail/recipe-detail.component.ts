import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RecipeService } from '../../recipes/recipe.service';
import { Store } from '@ngrx/store/';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import { Observable } from 'rxjs/Observable';
import * as fromRecipe from '../store/recipe.reducers';
import * as RecipeActions from '../store/recipe.actions';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeState$: Observable<fromRecipe.State>;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router,
              private store: Store<fromRecipe.FeatureState>) { }

  ngOnInit () {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipeState$ = this.store.select('recipes');
        }
      )
  }

  onAddToSL () {
    this.store.select('recipes')
      .first()
      .subscribe((recipeState: fromRecipe.State) => {
        this.store.dispatch( new ShoppingListActions.AddIngredients(recipeState.recipes[this.id].ingredients));
      })
  }

  onEditRecipe () {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe () {
    this.store.dispatch(new RecipeActions.DeleteRecipe(this.id))
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['']);
  }
}
