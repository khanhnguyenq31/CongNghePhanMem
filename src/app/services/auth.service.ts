import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api'; // Địa chỉ API của bạn

  constructor(private http: HttpClient) { }

  login(email: string, password: string, role: string): Observable<any> {
    let url = `${this.apiUrl}/user/studentlogin`;
    if (role === 'admin') {
      url = `${this.apiUrl}/user/adminlogin`;
    }
    return this.http.post(url, { email, password });
  }
}