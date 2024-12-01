import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-beforeprint',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './beforeprint.component.html',
  styleUrl: './beforeprint.component.css'
})
export class BeforeprintComponent {

  numberOfPages: number = 0;
  filename: string = '';
  balance: number = 0; // Khai báo biến balance
  constructor(private router: Router, private authService: AuthService) {
    const uploadedFile = JSON.parse(localStorage.getItem('uploadedFile') || '{}');
    this.numberOfPages = uploadedFile.numberOfPages; // Lấy số trang từ localStorage
    this.filename = uploadedFile.filename; // Lưu tên file
  }

  /*countPages(file: string) {
    // Logic để đếm số trang từ file, ví dụ sử dụng PDF.js nếu file là PDF
    // Đây là một ví dụ giả định, bạn cần sử dụng thư viện để thực hiện
    this.numberOfPages = 10; // Giả sử đếm được 10 trang
  }*/

  onProceedToPrint() {
    this.router.navigate(['/print']);
  }

  goBack() {
    // Logic to navigate back
    window.history.back(); // Ví dụ: quay lại trang trước
  }
  
  ngOnInit() {
    this.fetchBalance();
  }
  
  fetchBalance() {
    this.authService.getBalance().subscribe(
      (response) => {
        this.balance = response.balance;
      },
      (error) => {
        console.error('Lỗi khi lấy số dư:', error);
      }
    );
  }

  
}
