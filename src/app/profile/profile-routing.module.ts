import { MainComponent } from './main/main.component';
import { SalaryComponent } from './salary/salary.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// profile/profile
// profile/form
// profile/salary

const routes: Routes = [
  { path: 'profile', component: MainComponent,
  children: [
    { path: '', redirectTo: 'profile', pathMatch: 'full'},
    { path: 'profile', component: ProfileComponent, pathMatch: 'full'},
    { path: 'form', component: ProfileFormComponent, pathMatch: 'full'},
    { path: 'salary', component: SalaryComponent, pathMatch: 'full'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
