import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { RecipeDetailComponent } from './recipe-detail';

import { RecipeEditComponent } from './recipe-edit';
import { RecipeItemComponent, RecipeListComponent } from './recipe-list';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start';
import { RecipesRoutingModule } from './recipes-routing.module';
import { StoreModule, Store } from '@ngrx/store';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuToggleDirective } from '../shared/menu-toggle.directive';
import { SharedModule } from '../shared/shared.module';
import { recipeReducer } from './store/recipe.reducers';
import { RecipeEffects } from './store/recipe.effects';

@NgModule({
  declarations: [
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipesComponent,
    RecipeStartComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule,
    StoreModule.forFeature('recipes', recipeReducer),
    EffectsModule.forFeature([RecipeEffects])
  ],
})
export class RecipesModule {

}
