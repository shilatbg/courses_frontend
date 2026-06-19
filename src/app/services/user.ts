import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, Observable, of} from 'rxjs';
import { Auth } from './auth';

@Injectable({
  providedIn: 'root',
})
export class User {
  private apiUrl = 'https://courses-backend-5.onrender.com/api/students';
    constructor(private http: HttpClient, private auth: Auth) {}
    authToken: string ='';

getUsers(): Observable<any[]> {
  const token = this.auth.authToken;
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  return this.http.get<any[]>(this.apiUrl, { headers }).pipe(
    catchError(error => {
      return of([]);
    })
  );
}
}


