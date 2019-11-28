import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { SalaryComponent } from './salary/salary.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { MainComponent } from './main/main.component';
import { SalaryLisitComponent } from './salary-lisit/salary-lisit.component';
import { MqttModule, IMqttServiceOptions } from 'ngx-mqtt';
export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: '192.168.0.128',
  port: 8080,
  path: '/',
  username: 'q4u',
  password: '##q4u##'
}
@NgModule({
  declarations: [ProfileComponent, SalaryComponent, ProfileFormComponent, MainComponent, SalaryLisitComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
  ]
})
export class ProfileModule { }
