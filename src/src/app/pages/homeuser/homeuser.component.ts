import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-homeuser',
  standalone: true,
  imports: [SidebarComponent],
  template: `<app-sidebar />`,
  templateUrl: './homeuser.component.html',
  styleUrl: './homeuser.component.css'
})
export class HomeuserComponent {

}
