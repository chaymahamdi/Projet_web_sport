import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
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
 
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.isLoggedIn);
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe({
      next:data => {
      localStorage.setItem('token', data.accessToken);
      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.router.navigate(['']);
      console.log(data);
    },
    error: err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    }
  
  });
  }
  
}
