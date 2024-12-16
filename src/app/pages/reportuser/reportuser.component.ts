import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reportuser',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reportuser.component.html',
  styleUrl: './reportuser.component.css'
})
export class ReportuserComponent {
  report = {
    Stu_ID: '',
    description: '',
    location: ''
  };
  responseMessage: string | null = null;
  constructor(private location: Location, private http: HttpClient) {}
  goBack() {
    this.location.back();
  }
  onSubmit() {
    this.sendReport(this.report).subscribe(
      (response: any) => {
        this.responseMessage = response.message; // Hiển thị thông báo thành công
      },
      (error) => {
        this.responseMessage = 'Đã xảy ra lỗi khi gửi báo cáo'; // Hiển thị thông báo lỗi
      }
    );
  }

  sendReport(report: any): Observable<any> {
    const url = 'http://localhost:3000/api/report/send';
    return this.http.post(url, report);
  }
}
