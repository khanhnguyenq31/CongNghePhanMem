import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { ReportService } from '../../services/report.service';
import { UpdatereportService } from '../../services/updatereport.service';
interface Report {
  _id: string;
  Stu_ID: string;
  description: string;
  location?: string; // location có thể không có
  status: boolean;
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
  selectedReport: Report | null = null; // Để lưu báo cáo được chọn cho cập nhật
  newStatus: boolean = false; // Trạng thái mới
  constructor(private reportService: ReportService, private updatereportService: UpdatereportService) {} // Inject service
  ngOnInit() {
    this.loadReports();
  }
  
  loadReports() {
    this.reportService.getReports().subscribe(response => {
      if (response.success) {
        this.reports = response.report.map((report: Report) => ({
          _id: report._id,
          Stu_ID: report.Stu_ID,
          description: report.description,
          location: report.location || 'N/A', // Nếu không có location thì hiển thị 'N/A'
          status: report.status
        }));
      }
    });
  }

  // Phương thức để mở form cập nhật
  openUpdateForm(report: Report) {
    this.selectedReport = report;
    this.newStatus = !report.status; // Đảo ngược trạng thái hiện tại
  }

  

  onPageChange(page: number) {
    this.currentPage = page;
  }

  // Phương thức để cập nhật trạng thái báo cáo
  updateReportStatus() {
    if (this.selectedReport) {
      this.updatereportService.updateReportStatus(this.selectedReport._id, this.newStatus).subscribe(response => {
        if (response.success) {
          alert(response.message);
          this.loadReports(); // Tải lại danh sách báo cáo
          this.selectedReport = null; // Đóng form
        } else {
          alert('Cập nhật thất bại');
        }
      });
    }
  }
}
