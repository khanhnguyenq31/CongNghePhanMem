import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

interface Device {
  name: string;
  brand: string;
  location: string;
  installDate: string;
  isActive: boolean;
}
@Component({
  selector: 'app-device',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './device.component.html',
  styleUrl: './device.component.css'
})
export class DeviceComponent implements OnInit {
  totalDevices: number = 189;
  activeDevices: number = 189;
  devices: Device[] = [];
  currentPage: number = 1;
  totalPages: number = 40;
  searchText: string = '';
  sortBy: string = 'Newest';

  ngOnInit() {
    // Initialize dummy data
    this.devices = Array(8).fill(null).map(() => ({
      name: 'Toshiba 5505AC',
      brand: 'Toshiba',
      location: 'H6-100',
      installDate: '1/1/2024',
      isActive: Math.random() > 0.5
    }));
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }
}
