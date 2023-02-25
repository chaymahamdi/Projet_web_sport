import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthUser } from 'src/app/interfaces/auth';



const AUTH_API = 'http://localhost:8080/api/auth/';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })
  token: any = 0;
  constructor(private http: HttpClient) { }

  login(usernameOrEmail: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      usernameOrEmail,
      password
    });    //,{ headers: this.headers }
  }
  register(username: string, email: string, password: string, position: String ,address:String): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      position,
      address,
      password
    }, { headers: this.headers });
  }
}
