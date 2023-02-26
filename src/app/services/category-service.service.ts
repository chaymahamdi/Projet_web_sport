import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const AUTH_API = 'http://localhost:8080/';


@Injectable({
  providedIn: 'root'
})

export class CategoryServiceService {
  
 
  constructor(private http: HttpClient) { }
  getCategories(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(AUTH_API + 'categories',{headers});
  }
  addEvent(eventData: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({'Authorization':`Bearer ${token}`,'Accept': 'application/json'});
    return this.http.post<any>(AUTH_API + 'events', eventData, {headers});
  }

  
}
