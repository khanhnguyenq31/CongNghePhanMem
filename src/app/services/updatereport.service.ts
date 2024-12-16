import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdatereportService {
  private apiUrl = 'http://localhost:3000/api/report/update';

  constructor(private http: HttpClient) {}
  updateReportStatus(id: string, status: boolean): Observable<any> {
    const body = {
      id: id,
      status: status
    };
    return this.http.post<any>(this.apiUrl, body);
  }
}
