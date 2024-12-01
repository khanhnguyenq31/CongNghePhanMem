import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-homeuser',
  standalone: true,
  imports: [],
  templateUrl: './homeuser.component.html',
  styleUrl: './homeuser.component.css'
})
export class HomeuserComponent {
  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
