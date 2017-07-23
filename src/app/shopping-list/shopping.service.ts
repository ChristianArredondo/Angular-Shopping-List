import {Injectable, EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';


export class ShoppingService {
    ingredientAdded = new EventEmitter<Ingredient>();
    ingredientsAdded = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients() {
        return this.ingredients.slice()
    }

    onIngredientAdded(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }

    onIngredientsAdded(ingredients: Ingredient[]) {
      // for (let ingredient of ingredients)
      //   this.ingredients.push(ingredient);
      this.ingredients.push(...ingredients);
    }
}
