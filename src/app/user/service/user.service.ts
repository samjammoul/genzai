import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as global from './../../../globals';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserInfo(): Observable<any> {
    try {
      return this.http.post<any>(global.apiUrl, {});
    } catch (ex) {
      return ex;
    }
  }
  updateUserInfo(): Observable<any> {
    try {
      return this.http.post<any>(global.apiUrl, {});
    } catch (ex) {
      return ex;
    }
  }
}
