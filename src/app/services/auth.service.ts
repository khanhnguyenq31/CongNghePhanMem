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

  // Lưu token và role sau khi đăng nhập
  setSession(token: string, role: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
  }

  // Kiểm tra đăng nhập
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Lấy vai trò người dùng
  getUserRole(): string | null {
    return localStorage.getItem('role');
  }

  // Đăng xuất
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

  // Phương thức mới để lấy số dư
  getBalance(): Observable<any> {
    // Lấy Stu_ID từ localStorage hoặc từ thông tin đăng nhập
    const Stu_ID = localStorage.getItem('Stu_ID'); 
    return this.http.post(`${this.apiUrl}/user/getBalance`, { Stu_ID });
  }
}