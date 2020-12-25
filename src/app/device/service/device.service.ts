import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  constructor(private http: HttpClient) {}
  loadDevices(): Observable<any> {
    try {
      return this.http.post<any>(
        'http://dagobert.blip.vip:9080/account/register',
        {}
      );
    } catch (ex) {
      return ex;
    }
  }
}
