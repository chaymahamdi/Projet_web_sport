import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })
  AddEvent(title: string, description: string, location: string,date: string, startTime: String ,endTime:String, categoryId: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      title,
      description,
      location,
      date,
      startTime,
      endTime,
      categoryId
    }, { headers: this.headers });
  }
}
