import { Component, OnInit } from '@angular/core';
import { MqttService } from '../mqtt.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {

  username: string;
  message: string;

  constructor(
    private mqtt: MqttService
  ) { }

  ngOnInit() {

  }

  send(){
    let msg = {
      username: this.username,
      message: this.message
    };
    this.mqtt.publish('chat', JSON.stringify(msg));
  }

}
