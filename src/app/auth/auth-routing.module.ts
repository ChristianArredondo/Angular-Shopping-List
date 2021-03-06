import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin';
import { SignupComponent } from './signup';

const authRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: SigninComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
