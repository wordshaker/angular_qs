import { Component } from '@angular/core';
import { CustomersComponent, CustomerService } from './customer/index';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  directives: [CustomersComponent],
  providers: [CustomerService]
})

export class AppComponent { 
    title = 'Customer App';
    name = 'Superman';
    wardsColor ='green';
    
    changeSuitColor(){
        this.wardsColor = this.wardsColor ==='green' ? 'red' : 'green';
    }
}
