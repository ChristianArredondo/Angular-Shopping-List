import { NgModule } from '@angular/core';
import { MenuToggleDirective } from './menu-toggle.directive';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../recipes/recipe.service';



@NgModule({
  declarations: [
    MenuToggleDirective
  ],
  exports: [
    MenuToggleDirective,
    CommonModule
  ]
})
export class SharedModule {

}
