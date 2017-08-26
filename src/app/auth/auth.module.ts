import { NgModule } from '@angular/core/';
import { FormsModule } from '@angular/forms';

import {
  AuthGuard,
  AuthRoutingModule,
  AuthService,
  SigninComponent,
  SignupComponent,
 } from './';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule {

}
