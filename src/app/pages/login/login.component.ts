import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { } // Tiêm Router

  onLogin() {
    this.authService.login(this.email, this.password, 'user').subscribe(
      response => {
        // Xử lý thành công
        console.log('Đăng nhập thành công', response);
        localStorage.setItem('token', response.token); // Lưu token vào localStorage
        localStorage.setItem('Stu_ID', response.Stu_ID);
        //console.log('hello ', response.Stu_ID);
        debugger;
        this.authService.setSession(response.token, response.role);
        // Điều hướng đến trang chỉ định
        if (response.role === 'admin') {
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/homeuser']);
        }
      },
      error => {
        // Xử lý lỗi
        console.error('Đăng nhập thất bại', error);
      }
    );
  }
  
}
