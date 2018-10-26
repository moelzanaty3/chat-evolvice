import { Component, OnInit } from '@angular/core';
export interface IUser {
  contact_status: string;
  contact_image: string;
  contact_name: string;
  contact_perview: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: IUser[] = [
    {
      contact_status: 'online',
      contact_image: '../../../assets/Birte.png',
      contact_name: 'Louis Litt',
      contact_perview:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias exercitationem placeat dignissimos quidem deserunt explicabo hic dicta rem nobis eos porro, fugiatreprehenderit accusamus alias nisi culpa, fuga quia velit?'
    },
    {
      contact_status: 'busy',
      contact_image: '../../../assets/avatar-7.png',
      contact_name: 'Mohammed Elzanaty',
      contact_perview: "We'll meet again, Mike. Tell Jessica I said 'Hi'."
    },
    {
      contact_status: 'away',
      contact_image: '../../../assets/avatar-1.png',
      contact_name: 'Harvey Specter',
      contact_perview:
        'Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.'
    },
    {
      contact_status: 'away',
      contact_image: '../../../assets/avatar-2.png',
      contact_name: 'Mohammed Elzanaty',
      contact_perview:
        'Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.'
    },
    {
      contact_status: 'online',
      contact_image: '../../../assets/avatar-3.png',
      contact_name: 'Rachel Zane',
      contact_perview:
        'I was thinking that we could have chicken tonight, sounds good?'
    },
    {
      contact_status: 'online',
      contact_image: '../../../assets/avatar-4.png',
      contact_name: 'Donna Paulsen',
      contact_perview: "Mike, I know everything! I'm Donna.."
    },
    {
      contact_status: 'busy',
      contact_image: '../../../assets/avatar-5.png',
      contact_name: 'Jessica Pearson',
      contact_perview: 'Have you finished the draft on the Hinsenburg deal?'
    },
    {
      contact_status: 'away',
      contact_image: '../../../assets/avatar-6.png',
      contact_name: 'Harold Gunderson',
      contact_perview: 'Thanks Zanaty'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
