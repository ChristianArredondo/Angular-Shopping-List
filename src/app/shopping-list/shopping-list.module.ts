import { NgModule } from '@angular/core/';

import { ShoppingListEditComponent } from './shopping-list-edit';
import { ShoppingListComponent } from './shopping-list.component';

import { CommonModule } from '@angular/common/';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShoppingListEditComponent,
    ShoppingListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ShoppingListModule {

}
