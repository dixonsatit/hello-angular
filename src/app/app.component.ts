import { Component } from '@angular/core';

interface Person {
  id: number;
  fullname: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   title = 'hello-angular';
   fullName: string = '';

   items: Array<Person> = [
     {id: 1, fullname: 'sathit seethaphon', age: 34},
     {id: 2, fullname: 'Jhon ', age: 45},
   ];

   onClickMenu(e){
    console.log('EventOnClick',e);
   }


}
