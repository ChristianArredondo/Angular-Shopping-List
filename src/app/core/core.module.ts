import { NgModule } from '@angular/core';
import {
  HeaderComponent,
  HomeComponent
} from './';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule
  ]
})
export class CoreModule {

}
