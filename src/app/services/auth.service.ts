import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/api/auth';
  token: any = 0;
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  public register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`,  user,{ headers: this.headers });
  }

  public login(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signin`, user,{ headers: this.headers });
  }

  public setToken(token: string): void {
    this.token = token;
  }

  public getToken(): string {
    return this.token;
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    return !token===null && !this.jwtHelper.isTokenExpired(token);
  }

  public logout(token:String ): void {
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}