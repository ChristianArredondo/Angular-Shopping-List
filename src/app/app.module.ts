import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http/';
import { DataStorageService } from './shared/data-storage.service';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth';
import { ShoppingListModule } from './shopping-list';
import { CoreModule } from './core';


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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
