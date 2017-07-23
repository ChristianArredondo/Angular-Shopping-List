import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipes.model';
import { RecipeService } from '../../recipes/recipe.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onAddToSL() {
    console.log('Check 1');
    this.recipeService.onAddIngredientsToSL(this.recipe.ingredients);
  }
}
