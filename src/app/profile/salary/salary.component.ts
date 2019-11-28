import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import * as mqttClient from '../../../vendor/mqtt';
import { MqttClient } from 'mqtt';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit, OnDestroy {
  topicname: 'test';
  client: MqttClient;
  private subscription: Subscription;
  salary: Array<any> = [
    { id: 1, salary: 1000000, year: 2560 },
    { id: 2, salary: 2000000, year: 2561 },
    { id: 3, salary: 3000000, year: 2562 },
  ];

  constructor(
  ) { }

  ngOnInit() {
    this.connectWebSocket();
  }

  ngOnDestroy(): void {

  }

  connectWebSocket() {
    try {
      this.client = mqttClient.connect('http://192.168.0.128:8080', {
        username: 'q4u',
        password: '##q4u##'
      });
    } catch (error) {
      console.log(error);
    }

    const topic = `test/mqtt`;

    const that = this;

    this.client.on('connect', () => {
      console.log(`Connected!`);

      that.client.subscribe(topic, { qos: 0 }, (error) => {
        console.log(`subscribe = ${topic}`);
      });

      that.client.publish(topic, 'Client Publish');
    });

    this.client.on('message', async (topic, payload) => {
      console.log(topic, payload.toString());
    });

    this.client.on('close', () => {
      console.log('MQTT Conection Close');
    });

    this.client.on('error', (error) => {
      console.log('MQTT Error',error);
    });

    this.client.on('offline', () => {
      console.log('MQTT Offline');
    });
  }



  onDelete(id) {
    let row1 = this.salary.filter(value => value.id === id);
    this.salary.splice(this.salary.indexOf(row1));
    // let row2 = this.salary.filter((value, index) => {
    //   return value.id === id;
    // });
    console.log('deleteId',row1, this.salary);
  }

}
