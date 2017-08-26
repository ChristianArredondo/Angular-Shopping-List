import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './';

const shoppingListRoutes: Routes = [
  { path: 'shopping', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(shoppingListRoutes)],
  exports: [RouterModule],
})
export class ShoppingListRoutingModule {

}
