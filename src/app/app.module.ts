import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule, Store } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http/';
import { DataStorageService } from './shared/data-storage.service';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth';
import { ShoppingListModule } from './shopping-list';
import { CoreModule } from './core';
import { reducers } from './store/app.reducers';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    CoreModule,
    HttpModule,
    SharedModule,
    ShoppingListModule,
    StoreModule.forRoot(reducers)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
