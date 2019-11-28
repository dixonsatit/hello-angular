import { PatientViewComponent } from './patient-view/patient-view.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientComponent } from './patient.component';

const routes: Routes = [{ path: '', component: PatientComponent , children: [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list', component: PatientListComponent, pathMatch: 'full'},
  { path: 'form', component: PatientFormComponent, pathMatch: 'full'},
  { path: 'view', component: PatientViewComponent, pathMatch: 'full'}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
