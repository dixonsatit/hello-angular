import { MqttService, ChatMessage } from './mqtt.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages: Array<ChatMessage> = [];

  constructor(
    private mqtt: MqttService
  ) { }

  ngOnInit() {
    this.mqtt.connect();
    this.send(JSON.stringify({username: 'dixon', message: 'xxx'}));
  }

  send(msg){
    this.mqtt.publish('chat', msg);
  }

}
