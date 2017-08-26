import { NgModule } from '@angular/core';
import {
  HeaderComponent,
  HomeComponent
} from './';
import { SharedModule, DataStorageService } from '../shared';
import { AppRoutingModule } from '../app-routing.module';
import { RecipeService } from '../recipes';
import { AuthService } from '../auth';
import { ShoppingService } from '../shopping-list';

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
    ShoppingService
  ]
})
export class CoreModule {

}
