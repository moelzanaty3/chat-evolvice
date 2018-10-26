import { Component, OnInit } from '@angular/core';
export interface IMessage {
  id: number;
  messageText: string;
  createdDate: Date;
  modifiedDate: Date;
  createdByUserId: number;
  createdByUserName: string;
  type: string;
  img: string;
}
@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages: IMessage[];
  constructor() {}

  ngOnInit() {}
}
