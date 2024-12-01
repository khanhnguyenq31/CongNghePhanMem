import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): boolean {
    // Kiểm tra xem người dùng đã đăng nhập chưa
    const isLoggedIn = this.authService.isLoggedIn();
    
    if (!isLoggedIn) {
      // Nếu chưa đăng nhập, chuyển về trang login
      this.router.navigate(['/login']);
      return false;
    }

    // Lấy vai trò của người dùng
    const userRole = this.authService.getUserRole();
    
    // Danh sách route cho admin
    const adminRoutes = [
      '/dashboard', 
      '/device', 
      '/history', 
      '/profile', 
      '/report'
    ];

    // Danh sách route cho student
    const studentRoutes = [
      '/homeuser', 
      '/upload', 
      '/beforeprint', 
      '/print', 
      '/success', 
      '/payment', 
      '/payment-success',
      'confirm'
    ];

    // Lấy route hiện tại
    const currentRoute = state.url;

    // Kiểm tra quyền truy cập
    if (userRole === 'admin' && !adminRoutes.includes(currentRoute)) {
      this.router.navigate(['/dashboard']);
      return false;
    }

    if (userRole === 'student' && !studentRoutes.includes(currentRoute)) {
      this.router.navigate(['/homeuser']);
      return false;
    }

    return true;
  }
}