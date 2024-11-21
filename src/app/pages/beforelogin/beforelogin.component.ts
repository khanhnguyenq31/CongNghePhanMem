import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-beforelogin',
  standalone: true,
  imports: [RouterLink, LoginComponent],
  templateUrl: './beforelogin.component.html',
  styleUrl: './beforelogin.component.css'
})
export class BeforeloginComponent {

}
