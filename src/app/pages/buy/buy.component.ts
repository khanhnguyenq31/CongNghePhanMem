import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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

  constructor(private router: Router) {}

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
    this.router.navigate(['/confirm'], { state: { numberOfPages: this.numberOfPages, totalAmount: this.totalAmount } });
  }
}
