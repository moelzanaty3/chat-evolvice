import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { IMessage } from './../_model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private _headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private _http: HttpClient) {}
  /**
   * get all users
   * @param pageNumber Page with number 0 means 5 last messages by date.
   * @param searchText Search text should be found in MessageText field.
   */

  getAll(pageNumber: number, searchText: string) {
    return this._http.get<IMessage[]>(`${environment.BASE_URL}/messages`).pipe(
      map(messages => {
        const returnedMessages = [];
        messages.reverse().map(message => {
          if (message.messageText.includes(searchText) && returnedMessages.length < pageNumber * 5 + 5) {
            returnedMessages.push(message);
          }
        });
        return returnedMessages.reverse();
      })
    );
  }
  /**
   * @description add message
   * @param message  message object
   */

  create(message: IMessage) {
    return this._http.post(`${environment.BASE_URL}/messages`, JSON.stringify(message), {
      headers: this._headers
    });
  }
}
