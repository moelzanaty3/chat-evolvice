import { Component, OnInit } from '@angular/core';
import { IMessage } from '../../_model';
import { MessageService } from '../../_services';
import { Observable } from 'rxjs';
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

  getMessages() {
    this.messageService.getAll(1, '').subscribe((data: IMessage[]) => (this.messages = data));
  }
  createMessage(message) {
    const date = new Date().toString();
    const newMessage: IMessage = {
      messageText: message,
      createdDate: date,
      modifiedDate: date,
      createdByUserId: 2,
      createdByUserName: 'Mohammed Saad',
      type: 'replies',
      img: 'assets/images/face-2.jpg'
    };
    this.messageService.create(newMessage).subscribe(
      () => {
        this.getMessages();
        this.resetCurrentMessage();
      },
      err => Observable.throw(err)
    );
  }
  sendMessage(message) {
    if (!message.id) {
      this.createMessage(message);
    }
  }
  resetCurrentMessage() {
    this.currentMessage = {
      id: null,
      messageText: '',
      createdDate: '',
      modifiedDate: '',
      createdByUserId: 2,
      createdByUserName: 'Mohammed Saad',
      type: 'replies',
      img: 'assets/images/face-2.jpg'
    };
  }
}
