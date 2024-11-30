import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Nhập HttpClient


@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  selectedFile: File | null = null;

  constructor(private http: HttpClient, private router: Router, private location: Location) {}

  goBack() {
    this.location.back();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFile = input.files[0]; // Lưu trữ tệp đã chọn
    }
  }

  onUpload() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      this.http.post('http://localhost:3000/api/upload/uploadfile', formData).subscribe((response: any) => {
        if (response.success) {
          const numberOfPages = response.numberOfPages; // Nhận số trang từ server
          const filename = response.filename; // Nhận tên file từ server
          const filepath = response.filepath; // Nhận đường dẫn file từ server
          // Đọc nội dung file
          const reader = new FileReader();
          reader.onload = (e: any) => {
              const fileContent = e.target.result; // Nội dung file
              localStorage.setItem('fileContent', fileContent); // Lưu nội dung vào localStorage
          };
          // Kiểm tra xem selectedFile có phải là null không trước khi đọc
          if (this.selectedFile) {
            reader.readAsText(this.selectedFile); // Đọc file dưới dạng văn bản
          }
          localStorage.setItem('uploadedFile', JSON.stringify({
            filename: filename,
            Stu_ID: response.Stu_ID,
            numberOfPages: numberOfPages, // Lưu số trang vào localStorage
            filepath : filepath
          }));
          this.router.navigate(['/beforeprint']);
        } else {
          alert('Upload thất bại: ' + response.message);
        }
      }, (error) => {
        console.error('Lỗi khi upload file:', error);
        alert('Có lỗi xảy ra khi upload file.');
      });
    }
  }
}