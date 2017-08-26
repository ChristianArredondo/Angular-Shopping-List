import { NgModule } from '@angular/core';
import {  } from './recipes.component';
import {
  Recipe,
  RecipeDetailComponent,
  RecipeEditComponent,
  RecipeItemComponent,
  RecipeListComponent,
  RecipesComponent,
  RecipeStartComponent,
  RecipesRoutingModule,
} from './';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuToggleDirective } from '../shared/menu-toggle.directive';
import { SharedModule } from '../shared/shared.module';

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
  ],
  providers: [

  ],
  entryComponents: [

  ]
})
export class RecipesModule {

}
