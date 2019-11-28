import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryLisitComponent } from './salary-lisit.component';

describe('SalaryLisitComponent', () => {
  let component: SalaryLisitComponent;
  let fixture: ComponentFixture<SalaryLisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryLisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryLisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
