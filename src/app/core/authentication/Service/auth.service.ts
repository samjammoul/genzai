import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginForm, RegistrationForm } from '../Store/auth';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as global from './../../../../globals';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  registerUser(payload: RegistrationForm): Observable<any> {
    try {
      return this.http.post<any>(global.apiUrl + global.account + '/register', {
        username: payload.userName,
        password: payload.password,
        firstname: payload.firstName,
        lastname: payload.lastName,
        email: payload.email,
      });
    } catch (ex) {
      return ex;
    }
  }

  loginUser(payload: LoginForm): Observable<any> {
    try {
      return this.http.post<any>(global.apiUrl + global.authAu + '/login', {
        username: payload.userName,
        password: payload.password,
      });
    } catch (ex) {}
  }

  authenticateUser(localToken: string): Observable<any> {
    try {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        token: localToken,
      });
      const options = { headers };
      return this.http.post<any>(
        global.apiUrl + global.auth + '/authenticate',
        null,
        options
      );
    } catch (ex) {
      return ex;
    }
  }
}
