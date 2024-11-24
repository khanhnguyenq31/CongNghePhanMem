import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-print',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './print.component.html',
  styleUrl: './print.component.css'
})
export class PrintComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
