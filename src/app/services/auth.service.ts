import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private jwtToken: string = "";

  constructor(private http: HttpClient, private router: Router) {}



  decodeToken(token: string): any {
    const tokenParts = token.split('.');
    if (tokenParts.length !== 3) {
      throw new Error('Invalid JWT token');
    }

    const payload = JSON.parse(atob(tokenParts[1]));
    return payload;
  }


  login(credentials: any): Observable<any> {

    console.log(credentials.username + credentials.password)
    return this.http.post<any>('http://localhost:8080/login', credentials, { observe: 'response' })
      .pipe(
        tap(response => {
       
          if (response.status === 200) {
            const token = response.body.token;
            if (token) {
              const decodedToken = this.decodeToken(token);
        
              this.saveToken(token);  

              if (decodedToken.roleName === 'ROLE_PRO') {

              
                this.router.navigate(['/pro']);
              } else if (decodedToken.roleName === 'ROLE_normal') {
                this.router.navigate(['/normal']);
              } else {
        
              }
             
               
            }
          }
        })
      
      );
  }

  // JWT'yi saklamak için bir yöntem
  saveToken(token: string) {
    this.jwtToken = token;
    localStorage.setItem('token', token);
  }

  // Her HTTP isteğinde JWT'nin Authorization başlığı altında gönderilmesi
  loadToken() {
    this.jwtToken = localStorage.getItem('token')!;
  }

  getAuthorizationHeaders(): HttpHeaders {
    console.log()
    this.loadToken();
    return new HttpHeaders({ 'Authorization': 'Bearer ' + this.jwtToken });
  }

  // Çıkış işlemi, JWT'yi temizle
  logout() {
    this.jwtToken = null!;
    localStorage.removeItem('token');
  }
}
