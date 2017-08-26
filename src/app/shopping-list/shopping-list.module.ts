import { NgModule } from '@angular/core/';

import {
  ShoppingListEditComponent,
  ShoppingListComponent,
  ShoppingService,
  ShoppingListRoutingModule
 } from './';
import { CommonModule } from '@angular/common/';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShoppingListEditComponent,
    ShoppingListComponent
  ],
  imports: [
    CommonModule,
    ShoppingListRoutingModule,
    FormsModule
  ]
})
export class ShoppingListModule {

}
