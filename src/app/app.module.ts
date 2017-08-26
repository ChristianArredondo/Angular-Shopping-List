import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http/';
import { DataStorageService } from './shared/data-storage.service';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth';
import { ShoppingListModule } from './shopping-list';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    SharedModule,
    ShoppingListModule,
    AuthModule
  ],
  providers: [
    DataStorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
