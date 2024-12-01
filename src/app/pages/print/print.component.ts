import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-print',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './print.component.html',
  styleUrl: './print.component.css'
})
export class PrintComponent {
  printInfo: any;
  fileContent: string | null;
  constructor(private router: Router) {
    this.printInfo = JSON.parse(localStorage.getItem('printInfo') || '{}');
    this.fileContent = localStorage.getItem('fileContent');
  }

  goBack() {
    // Logic to navigate back
    window.history.back(); // Ví dụ: quay lại trang trước
  }

  onPrint() {
    // Logic để in tài liệu
    const uploadedFile = JSON.parse(localStorage.getItem('uploadedFile') || '{}');
    const printInfo = {
        filename: uploadedFile.filename,
        pageCount: uploadedFile.numberOfPages,
        copies: 1,
        printerName: 'Toshiba 5505AC',
        startTime: new Date().toLocaleString(),
        endTime: new Date().toLocaleString()
    };
    localStorage.setItem('printInfo', JSON.stringify(printInfo));
    this.router.navigate(['/success']);
  }
}
