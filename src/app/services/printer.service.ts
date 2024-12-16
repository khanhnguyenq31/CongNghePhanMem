import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrinterService {
  private apiUrl = 'http://localhost:3000/api/printer/get';

  constructor(private http: HttpClient) { }

  getAllPrinters(): Observable<any> {
    return this.http.post(this.apiUrl, {});
  }
}