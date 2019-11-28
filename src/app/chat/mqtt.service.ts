import { Injectable } from '@angular/core';

import * as mqttClient from '../../vendor/mqtt';
import { MqttClient } from 'mqtt';

export interface ChatMessage {
  username: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class MqttService {

  client: MqttClient;
  messages: Array<ChatMessage> = [];

  constructor() { }

  connect() {
    try {
      this.client = mqttClient.connect('http://192.168.0.128:8080', {
        username: 'q4u',
        password: '##q4u'
      });
    } catch (error) {
      console.log(error);
    }
    const that = this;
    const topicName = 'chat';

    this.client.on('connect', () => {
      console.log('is Connected');

      that.client.subscribe(topicName, { qos: 0 }, (error) => {

      });

      // that.client.publish(topicName, 'Sathit');

    });

    this.client.on('message', (topic, playload) => {
      console.log('onMessage', playload, topic, playload.toString());


      let data =  JSON.parse(playload.toString());
      this.messages.push({
        username: data.username,
        message: data.message
      });

      console.log(this.messages);
    });

    this.client.on('close', () => {
      console.log('on close');
    });

    this.client.on('error', (error) => {
      console.log('error', error);
    });

    this.client.on('offline', () => {
    });

  }

  getClient() {
    return this.client;
  }

  publish(topic, message){
    this.client.publish(topic, message);
  }

  disconnect() {

  }
}
