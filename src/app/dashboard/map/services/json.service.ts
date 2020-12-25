import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonService {
  constructor(private http: HttpClient) {}

  public getJSON(): Observable<any> {
    return this.http.get('../../../../assets/data.json');
  }
  public getJSON2(): Observable<any> {
    return this.http.get('../../../../assets/map.json');
  }
}
