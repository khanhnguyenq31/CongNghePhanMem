import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent {
  goBack() {
    // Logic to navigate back
    window.history.back(); // Ví dụ: quay lại trang trước
  }

  printInfo: any;

  constructor() {
    this.printInfo = JSON.parse(localStorage.getItem('printInfo') || '{}');
    console.log(`Tên file: ${this.printInfo.filename}, Số trang: ${this.printInfo.pageCount}`);
  }
}
