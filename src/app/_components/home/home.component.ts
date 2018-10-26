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
  users: IUser[];
  constructor() {}

  ngOnInit() {}
}
