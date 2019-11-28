import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() bgColor: string = 'green';

  @Output() onClickMenu = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

  }

  click(menu){
    console.log('HeaderClick=',menu);
    this.onClickMenu.emit(menu);
  }
}
