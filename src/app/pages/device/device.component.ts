import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { PrinterService } from '../../services/printer.service';
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
  totalDevices: number = 0;
  activeDevices: number = 0;
  devices: Device[] = [];
  currentPage: number = 1;
  totalPages: number = 40;
  searchText: string = '';
  sortBy: string = 'Newest';
  printers: any[] = [];
  constructor(private printerService: PrinterService) { }
  
  ngOnInit(): void {
    this.loadPrinters();
  }

  loadPrinters() {
    this.printerService.getAllPrinters().subscribe(response => {
      if (response.success) {
        this.printers = response.printers;
        this.totalDevices = this.printers.length; // Tổng số máy in
        this.activeDevices = this.printers.filter(printer => printer.available).length; // Tổng số máy in có sẵn
      } else {
        console.error('Failed to load printers');
      }
    }, error => {
      console.error('Error fetching printers:', error);
    });
  }
  onPageChange(page: number) {
    this.currentPage = page;
  }
}
