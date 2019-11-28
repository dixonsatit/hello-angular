import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-salary-lisit',
  templateUrl: './salary-lisit.component.html',
  styleUrls: ['./salary-lisit.component.css']
})
export class SalaryLisitComponent implements OnInit {

  @Input() salaryItems: Array<any> = [];
  @Output() onClickDelete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    //console.log(this.salaryItems);
  }

  onDelete(id){
    console.log(id);
    this.onClickDelete.emit(id);
  }

}
