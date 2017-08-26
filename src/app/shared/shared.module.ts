import { NgModule } from '@angular/core';
import { MenuToggleDirective } from './menu-toggle.directive';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../recipes';



@NgModule({
  declarations: [
    MenuToggleDirective
  ],
  exports: [
    MenuToggleDirective,
    CommonModule
  ],
  providers: [
    RecipeService
  ]
})
export class SharedModule {

}
