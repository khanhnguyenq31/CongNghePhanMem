import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-buy',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})
export class BuyComponent {
  numberOfPages: number = 0;
  totalAmount: number = 0;
  showError: boolean = false;
  balance: number = 0; // Khai báo biến balance
  constructor(private router: Router, private authService: AuthService) {}

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
    
  calculateTotal() {
    if (this.numberOfPages % 10 === 0) {
      this.showError = false;
      this.totalAmount = this.numberOfPages * 300; // Giả sử giá mỗi trang là 300 VND
    } else {
      this.showError = true;
      this.totalAmount = 0;
    }
  }
  
  goToConfirm() {
    this.router.navigate(['/confirm'], { state: { balance: this.balance, numberOfPages: this.numberOfPages, totalAmount: this.totalAmount } });
  }
}
