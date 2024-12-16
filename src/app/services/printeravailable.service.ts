import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrinteravailableService {
  private apiUrl = 'http://localhost:3000/api/printer/getavailable';

  constructor(private http: HttpClient) { }

  getAvailablePrinters(): Observable<any> {
    return this.http.post(this.apiUrl, {});
  }
}
