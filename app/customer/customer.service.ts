import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {
    constructor() {
    }
    
    getCustomers(){
        return[
        {id: 1, name:'Ward'},
        {id: 2, name:'Bill'},
        {id: 3, name:'Ted'},
        {id: 4, name:'Nancy'}
        ]
    };
}