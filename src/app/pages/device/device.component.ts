import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { PrinterService } from '../../services/printer.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface ApiResponse {
    success: boolean;
    message: string;
    printers?: any[];
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
  currentPage: number = 1;
  totalPages: number = 40;
  searchText: string = '';
  sortBy: string = 'Newest';
  printers: any[] = [];

  printerID: string = '';
  printerName: string = '';
  brand: string = '';
  model: string = '';
  description: string = '';
  location: any = { campus: '', building: '', room: '' };
  available: boolean = true;
  constructor(private printerService: PrinterService, private http: HttpClient, private router: Router) { }
  
  isAddPrinterVisible: boolean = false;
  isUpdatePrinterVisible: boolean = false;
  isDeletePrinterVisible: boolean = false;

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

  addPrinter() {
    const printerData = {
      PrinterID: this.printerID,
      printerName: this.printerName,
      brand: this.brand,
      model: this.model,
      description: this.description,
      location: this.location,
      available: this.available
    };

    this.http.post<ApiResponse>('http://localhost:3000/api/printer/add', printerData).subscribe(response => {
      console.log(response);
      alert(response.message);
    });
  }

  updatePrinter() {
    const updateData = {
      PrinterID: this.printerID,
      available: this.available
    };

    this.http.post<ApiResponse>('http://localhost:3000/api/printer/update', updateData).subscribe(response => {
      console.log(response);
      alert(response.message);
    });
  }

  deletePrinter() {
    const deleteData = {
      PrinterID: this.printerID
    };

    this.http.post<ApiResponse>('http://localhost:3000/api/printer/delete', deleteData).subscribe(response => {
      console.log(response);
      alert(response.message);
    });
  }

  

showAddPrinterForm() {
  this.isAddPrinterVisible = true;
  this.isUpdatePrinterVisible = false;
  this.isDeletePrinterVisible = false;
}

showUpdatePrinterForm() {
  this.isAddPrinterVisible = false;
  this.isUpdatePrinterVisible = true;
  this.isDeletePrinterVisible = false;
}

showDeletePrinterForm() {
  this.isAddPrinterVisible = false;
  this.isUpdatePrinterVisible = false;
  this.isDeletePrinterVisible = true;
}

}
