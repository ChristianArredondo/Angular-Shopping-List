import { Component, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipesChanged = new Subject < Recipe[] > ();

  private recipes: Recipe[] = [
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
  ];

  constructor() {

  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes () {
     return this.recipes.slice();
  }

}
