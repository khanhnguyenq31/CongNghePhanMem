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
  totalStudents: number = 9;
  totalUsage: number = 8;
  activeDevices: number = 2;
  students: Student[] = [];
  currentPage: number = 1;
  totalPages: number = 40;
  searchText: string = '';
  sortBy: string = 'Newest';
  studentGrowth: number = 16;
  usageDecline: number = 17;

  ngOnInit() {
    this.students = Array(1).fill(null).map(() => ({
      name: 'huy',
      id: '2211211',
      useDate: '1/12/2024',
      amount: '6.000 VND',
      device: 'Toshiba 5505AC',
      quantity: 110
    }));
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }
}
