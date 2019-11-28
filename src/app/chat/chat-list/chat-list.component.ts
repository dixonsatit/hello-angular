import { Component, OnInit } from '@angular/core';
import { ChatMessage, MqttService} from '../mqtt.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  messages: Array<ChatMessage> = [];

  constructor(
    private mqtt: MqttService
  ) { }

  ngOnInit() {
    this.messages = this.mqtt.messages;
  }

}
