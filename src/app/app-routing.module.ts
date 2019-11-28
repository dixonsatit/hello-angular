import { ChatComponent } from './chat/chat.component';
import { MainComponent } from './main/main.component';
import { Page2Component } from './page2/page2.component';
import { Page1Component } from './page1/page1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: 'index', component: MainComponent, pathMatch: 'full'},
  { path: 'page1', component: Page1Component, pathMatch: 'full'},
  { path: 'page2', component: Page2Component, pathMatch: 'full'},
  { path: 'chat', component: ChatComponent, pathMatch: 'full'},
  { path: 'patient', loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
