import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private loginService: LoginService, private router: Router) { }

  username: string = '';
  password: string = '';
  errorMessage: string = '';
  
  rememberMe: boolean = false;

  switchToSignup(type: string) {
    if (type === 'normal') {

      console.log('Switching to Normal Signup');
      // Burada normal üyelik işlemleri yapılabilir
    } else if (type === 'pro') {
      // Pro üyelik seçeneğine geçiş yapılıyor
      console.log('Switching to Pro Signup');
      // Burada pro üyelik işlemleri yapılabilir
    }
  }

  login() {
    console.log("Login attempted");  
    const credentials = {
      username: this.username,
      password: this.password
    };
    
    this.loginService.login(credentials).subscribe(
      (response) => {
        console.log('Login successful');
    
  
      },
      error => {
    
        console.error('Login failed:', error);
        this.errorMessage = 'Login failed. Please try again.';
      }
    );
  }
}