import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'cart',
    template:`Number of items in cart: {{number_of_items}}`    
})
export class CartComponent{
    private number_of_items:number = 0;
    
    @Input() AddItemStream:Observable<any>;
    
    constructor(){
        this.AddItemStream=new Observable();
    }

    ngOnInit(){
        /*this.AddItemStream.subscribe((item)=>{
            console.log(item);
            this.number_of_items++;
        });*/
    }

}