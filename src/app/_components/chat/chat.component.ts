import { IMessage } from './../../_model/message';
import { Component, OnInit } from '@angular/core';
import { IMessage } from '../../_model';
import { MessageService } from '../../_services';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: IMessage[];
  currentMessage: IMessage;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.getMessages();
  }
  resetCurrentMessage() {
    this.currentMessage = {
      id: null,
      messageText: '',
      createdDate: '',
      modifiedDate: '',
      createdByUserId: 2,
      createdByUserName: 'Yannic Buchwald',
      type: 'replies',
      img: 'assets/Yannic.png'
    };
  }
  getMessages() {
    this.messageService.getAll(1, '').subscribe((data: IMessage[]) => (this.messages = data));
  }
  createMessage(message) {
    let id;
    const dateISO = new Date();
    const today = dateISO.getFullYear() + '-' + (dateISO.getMonth() + 1) + '-' + dateISO.getDate();
    const newMessage: IMessage = {
      id: id,
      messageText: message,
      createdDate: today,
      modifiedDate: today,
      createdByUserId: 2,
      createdByUserName: 'Yannic Buchwald',
      type: 'replies',
      img: 'assets/Yannic.png'
    };
    this.messageService.create(newMessage).subscribe(
      response => {
        this.getMessages();
        this.resetCurrentMessage();
      },
      err => console.log(err)
    );
    id = this.messages.length + 1;
  }
  sendMessage(message) {
    if (!message.id) {
      this.createMessage(message);
    }
  }
}
