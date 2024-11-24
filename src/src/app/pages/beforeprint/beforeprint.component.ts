import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-beforeprint',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './beforeprint.component.html',
  styleUrl: './beforeprint.component.css'
})
export class BeforeprintComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
