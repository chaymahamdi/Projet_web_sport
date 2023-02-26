import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  logged_user: any;
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(data => {
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUser(data);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      
      this.router.navigate(['']);
    },
    err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    }
    );
  }

  onsubmit(): void {
    const { username, email, password,position,address} = this.form;

    this.authService.register(username, email, password, position, address).subscribe({
      next: data => {
        console.log(data);
      },
      error: err => {
        this.errorMessage = err.error.message;
        /*this.isSignUpFailed = true;*/
      }
    });
  }
  reloadPage(): void {
    window.location.reload();
  }

}
