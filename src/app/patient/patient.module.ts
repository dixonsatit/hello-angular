import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { PatientViewComponent } from './patient-view/patient-view.component';

@NgModule({
  declarations: [PatientComponent, PatientListComponent, PatientFormComponent, PatientViewComponent],
  imports: [
    CommonModule,
    ClarityModule,
    ReactiveFormsModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
