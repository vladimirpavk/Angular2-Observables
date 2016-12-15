/// <reference path="../../node_modules/@angular/common/index.d.ts" />
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
        <label>Input item: </label>
        <input id="item" #itemTlv/>
        <button (click)="onClick(itemTlv.value)">Add to cart</button>
        <cart></cart>        
  `
})
export class AppComponent{

  private items:Array<string>;

  private onClick(value):void{
    this.items.push(value);
  }

}