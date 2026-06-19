import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
private apiUrl = 'https://courses-backend-5.onrender.com/api/Auth';
  authToken: string = '';

  constructor(private http: HttpClient) { }

login(email: string, password: string): Observable<any> {
  return this.http.post<any>(this.apiUrl + '/login', {
    email: email,
    password: password
  })
  .pipe(
   tap(res => {
  console.log(res.token);

  if (res && res.token) {
    this.authToken = res.token;
    localStorage.setItem('token', res.token);
  }
})
  );
}
}