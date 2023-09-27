import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    debugger
    var localuserdata = JSON.parse(localStorage.getItem("UserDetails"));
    var UserDetails = localuserdata.find((c) => c.email=== email);
    if (email == UserDetails.email && password == UserDetails.password) {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: UserDetails.email, email: UserDetails.password });
    }
    return throwError(new Error('Failed to login'));
  }
}