import { NgModule } from '@angular/core';
import { RecipeService } from './recipe.service';
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
    StoreModule.forFeature('recipes', recipeReducer)
  ],
})
export class RecipesModule {

}
