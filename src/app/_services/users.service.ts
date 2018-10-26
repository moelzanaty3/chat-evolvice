import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './../_model';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private _http: HttpClient) {}
  getAll() {
    return this._http.get<IUser[]>(`${environment.BASE_URL}/users`);
  }
}
