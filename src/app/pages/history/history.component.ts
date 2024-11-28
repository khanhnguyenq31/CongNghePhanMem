// history.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

interface Student {
  name: string;
  id: string;
  useDate: string;
  amount: string;
  device: string;
  quantity: number;
}
@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {
  totalStudents: number = 5423;
  totalUsage: number = 1893;
  activeDevices: number = 189;
  students: Student[] = [];
  currentPage: number = 1;
  totalPages: number = 40;
  searchText: string = '';
  sortBy: string = 'Newest';
  studentGrowth: number = 16;
  usageDecline: number = 1;

  ngOnInit() {
    this.students = Array(8).fill(null).map(() => ({
      name: 'Quang Khánh',
      id: '223123456',
      useDate: '1/1/2024',
      amount: '100.000 VND',
      device: 'Toshiba 5505AC',
      quantity: 50
    }));
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }
}
