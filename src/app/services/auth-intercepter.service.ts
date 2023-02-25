import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, from,lastValueFrom } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthIntercepterService {

  

  constructor(private authService: AuthService) {
      }
      intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            return from(this.handleAccess(request, next));
          }
          private async handleAccess(request: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
                // Only add an access token to whitelisted origin
                const allowedOrigins = ['http://localhost'];
                if (allowedOrigins.some(url => request.urlWithParams.includes(url))) {
                  const accessToken = await this.authService.token;
                  request = request.clone({
                    setHeaders: {
                      Authorization: 'Bearer ' + accessToken
                    }
                  });
                }
                return await lastValueFrom(next.handle(request));
              }
}
