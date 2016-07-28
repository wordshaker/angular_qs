import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'appcustomer',
    templateUrl: 'app/customer/customer.component.html'
})
export class CustomerComponent implements OnInit{
    customer:{is:number, name: string}
    
    constructor(){}
    
    ngOnInit(){}
}