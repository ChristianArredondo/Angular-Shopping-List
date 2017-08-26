import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';
import {
  Recipe,
  RecipeDetailComponent,
  RecipeEditComponent,
  RecipeItemComponent,
  RecipeListComponent,
  RecipesComponent,
  RecipeStartComponent,
} from './';

const recipesRoutes: Routes = [
  { path: '', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
