import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent { 
    title = 'Customer App';
    name = 'Superman';
    wardsColor ='green';
    customers=[
        {id: 1, name:'Ward'},
        {id: 2, name:'Bill'},
        {id: 3, name:'Ted'},
        {id: 4, name:'Nancy'}
    ]
    changeSuitColor(){
        this.wardsColor = this.wardsColor ==='blue' ? 'red' : 'blue';
    }
}
