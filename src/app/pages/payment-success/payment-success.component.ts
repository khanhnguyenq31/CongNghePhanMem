import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-payment-success',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './payment-success.component.html',
  styleUrl: './payment-success.component.css'
})
export class PaymentSuccessComponent {
  numberOfPages: number;
  totalAmount: number;
  currentPages: number;
  balance: number;
  constructor() {
    // Lấy dữ liệu từ trang trước (Trang 2)
    const state = history.state as { balance: number; numberOfPages: number; totalAmount: number };
    this.balance = state?.balance || 0;
    this.numberOfPages = state?.numberOfPages || 0;
    this.totalAmount = state?.totalAmount || 0;
    this.currentPages = this.balance + this.numberOfPages; // Giả sử ban đầu có 50 trang
  }
}
