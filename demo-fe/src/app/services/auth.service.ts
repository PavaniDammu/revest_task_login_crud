import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080';
  private tokenKey = 'auth-token';

  constructor(private http: HttpClient) { }

  private handleToken(response: any): void {
    const token = response && response.token;
    if (token) {
      sessionStorage.setItem(this.tokenKey, token);
    }
  }

  login(userName: string, password: string): Observable<any> {
    const credentials = { userName, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.baseUrl}/api/auth/signin`, credentials, { headers }).pipe(
      tap(response => this.handleToken(response))
    );
  }

  signup(userData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.baseUrl}/api/auth/signup`, userData, { headers }).pipe(
      tap(response => this.handleToken(response))
    );
  }

  logout(): Observable<any> {
    sessionStorage.removeItem(this.tokenKey); 
    return this.http.post(`${this.baseUrl}/api/auth/signout`, {})
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token; // Return true if the token exists
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated();
  }
}
