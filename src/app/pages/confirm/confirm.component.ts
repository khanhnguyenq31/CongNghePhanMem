import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  standalone: true,
  imports: [],
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.css'
})
export class ConfirmComponent {
  numberOfPages: number = history.state.numberOfPages || 0;
  totalAmount: number = history.state.totalAmount || 0;

  constructor(private router: Router) {}

  goToSuccess() {
    this.router.navigate(['/payment-success'], { state: { numberOfPages: this.numberOfPages, totalAmount: this.totalAmount } });
  }
}
