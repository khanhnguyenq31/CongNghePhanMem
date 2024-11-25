import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../../src/app/components/sidebar/sidebar.component';

interface Report {
  studentName: string;
  id: string;
  location: string;
  content: string;
  status: string;
}

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent implements OnInit {
  reports: Report[] = [];
  currentPage: number = 1;
  totalPages: number = 40;
  searchText: string = '';
  sortBy: string = 'Newest';

  ngOnInit() {
    this.reports = Array(8).fill(null).map((_, index) => ({
      studentName: 'Quang Khánh',
      id: '223123456',
      location: 'H6-100',
      content: 'không thể tải file....',
      status: index < 4 ? 'Chưa giải quyết' : 'Đã giải quyết'
    }));
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }
}
