/// <reference path="../../node_modules/@angular/common/index.d.ts" />
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { CartComponent } from './cart.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CartComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }