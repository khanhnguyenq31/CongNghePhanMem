import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BeforeloginComponent } from './pages/beforelogin/beforelogin.component';
import { HomeuserComponent } from './pages/homeuser/homeuser.component';
import { UploadComponent } from './pages/upload/upload.component';
import { BeforeprintComponent } from './pages/beforeprint/beforeprint.component';
import { PrintComponent } from './pages/print/print.component';
import { SuccessComponent } from './pages/success/success.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HistoryComponent } from './pages/history/history.component';
import { DeviceComponent } from './pages/device/device.component';
import { ReportComponent } from './pages/report/report.component';
import { BuyComponent } from './pages/buy/buy.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';
import { PaymentSuccessComponent } from './pages/payment-success/payment-success.component';
import { AuthGuard } from './guards/auth.guard';
import { ReportuserComponent } from './pages/reportuser/reportuser.component';

export const routes: Routes = [
    {path:'', component: BeforeloginComponent},    
    {path:'login', component: LoginComponent},
    {path: 'homeuser',component: HomeuserComponent, 
        canActivate: [AuthGuard] },
    {path:'upload', component: UploadComponent, 
        canActivate: [AuthGuard] },
    {path:'reportuser', component: ReportuserComponent, 
        canActivate: [AuthGuard] },
    {path:'beforeprint', component: BeforeprintComponent,
        canActivate: [AuthGuard] },
    {path:'print', component: PrintComponent, 
        canActivate: [AuthGuard] },
    {path:'sidebar', component: SidebarComponent, 
        canActivate: [AuthGuard] },
    {path:'success', component: SuccessComponent, 
        canActivate: [AuthGuard] },
    {path:'dashboard', component: DashboardComponent, 
        canActivate: [AuthGuard] },
    {path:'profile', component: ProfileComponent, 
        canActivate: [AuthGuard] },
    {path:'history', component: HistoryComponent, 
        canActivate: [AuthGuard] },
    {path:'device', component: DeviceComponent, 
        canActivate: [AuthGuard] },
    {path:'report', component: ReportComponent, 
        canActivate: [AuthGuard] },
    {path:'buy', component: BuyComponent, 
        canActivate: [AuthGuard] },
    {path:'confirm', component: ConfirmComponent, 
        canActivate: [AuthGuard] },
    {path:'payment-success', component: PaymentSuccessComponent, 
        canActivate: [AuthGuard] },
        {
            path: '', 
            redirectTo: '/login', 
            pathMatch: 'full'
          }
];
