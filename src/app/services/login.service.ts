import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public authService: AuthService){}

 

  login(credentials: any): Observable<any> {
    console.log(credentials.username + credentials.password);
    return this.authService.login(credentials);
  }

}
