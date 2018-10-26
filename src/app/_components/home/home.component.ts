import { Component, OnInit } from '@angular/core';
import { IUser } from './../../_model/user';
import { UsersService } from '../../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: IUser[];
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService
      .getAll()
      .subscribe((data: IUser[]) => (this.users = data));
  }
}
