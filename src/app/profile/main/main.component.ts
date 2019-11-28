import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  profile: object = {
    fullname: 'Sathit Seethaphon',
    age: 35,
    position: 'Web Developer'
  };

  constructor() { }

  ngOnInit() {
  }

}
