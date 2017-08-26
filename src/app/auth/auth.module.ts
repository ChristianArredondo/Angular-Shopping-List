import { NgModule } from '@angular/core/';
import { FormsModule } from '@angular/forms';

import {
  AuthGuard,
  AuthRoutingModule,
  AuthService,
  SigninComponent,
  SignupComponent,
 } from './';
import { CommonModule } from '@angular/common/';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
    AuthService,
  ]
})
export class AuthModule {

}
