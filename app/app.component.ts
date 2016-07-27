import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <div [style.color] = "wardsColor">
        Hello {{name}}
    </div>
    `
})
export class AppComponent { 
    title = 'Customer App';
    name = 'Superman';
    wardsColor ='blue';
}
