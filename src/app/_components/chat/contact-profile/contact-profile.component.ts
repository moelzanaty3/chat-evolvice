import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-profile',
  templateUrl: './contact-profile.component.html',
  styleUrls: ['./contact-profile.component.scss']
})
export class ContactProfileComponent implements OnInit {
  social_icons = ['fa-facebook', 'fa-twitter'];
  constructor() {}

  ngOnInit() {}
}
