import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Chat App Evolvice';
  navLinks = [
    { path: '/home', icon: 'home', label: 'Home' },
    { path: '/map', icon: 'map', label: 'Map' },
    { path: '/chat', icon: 'chat', label: 'Chat' }
  ];
}
