import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages = [
    {
      type: 'sent',
      img: '../../../../assets/Stefan.png',
      text: 'How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!'
    },
    {
      type: 'replies',
      img: '../../../../assets/Yannic.png',
      text: 'When you re backed against the wall, break the god damn thing down.'
    },
    {
      type: 'replies',
      img: '../../../../assets/Yannic.png',
      text: 'Excuses dont win championships.'
    },
    {
      type: 'sent',
      img: '../../../../assets/Stefan.png',
      text: 'Oh yeah, did Michael Jordan tell you that?'
    },
    {
      type: 'replies',
      img: '../../../../assets/Yannic.png',
      text: 'No, I told him that.'
    },
    {
      type: 'replies',
      img: '../../../../assets/Yannic.png',
      text: 'What are your choices when someone puts a gun to your head?'
    },
    {
      type: 'sent',
      img: '../../../../assets/Stefan.png',
      text: 'What are you talking about? You do what they say or they shoot you.'
    },
    {
      type: 'replies',
      img: '../../../../assets/Yannic.png',
      text:
        'Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of hundred and forty six other things.'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
