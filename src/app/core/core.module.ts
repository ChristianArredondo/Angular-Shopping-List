import { NgModule } from '@angular/core';
import { HeaderComponent } from './header';
import { HomeComponent } from './home';

import { SharedModule, DataStorageService } from '../shared';
import { AppRoutingModule } from '../app-routing.module';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    DataStorageService,
    RecipeService,
    AuthService,
  ]
})
export class CoreModule {

}
