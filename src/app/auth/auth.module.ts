import { NgModule } from '@angular/core/';
import { FormsModule } from '@angular/forms';

import { AuthGuard } from './auth-guard.service';
import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin';
import { SignupComponent } from './signup';

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
