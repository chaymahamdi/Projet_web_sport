import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const AUTH_API = 'http://localhost:8080/';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})

export class CategoryServiceService {
  
  
  // token: any = localStorage.getItem("auth-token");
  /*token = window.sessionStorage.getItem("auth-token");*/
  headers = new HttpHeaders({
    'Accept': 'application/json',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Credentials':'true',
    /*'Authorization': `Bearer ${this.token}`*/
  })
  constructor(private http: HttpClient) { }
  getCategories(): Observable<any> {
    return this.http.get<any>(AUTH_API + 'api/auth/categories', { headers: this.headers });
  }
}