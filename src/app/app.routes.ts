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

export const routes: Routes = [
    {path:'', component: BeforeloginComponent},
    {path:'login', component: LoginComponent},
    {path: 'homeuser',component: HomeuserComponent},
    {path:'upload', component: UploadComponent},
    {path:'beforeprint', component: BeforeprintComponent},
    {path:'print', component: PrintComponent},
    {path:'sidebar', component: SidebarComponent},
    {path:'success', component: SuccessComponent},
    {path:'dashboard', component: DashboardComponent},
    {path:'profile', component: ProfileComponent},
    {path:'history', component: HistoryComponent},
    {path:'device', component: DeviceComponent},
    {path:'report', component: ReportComponent},
    {path:'buy', component: BuyComponent},
    {path:'confirm', component: ConfirmComponent},
    {path:'payment-success', component: PaymentSuccessComponent},
];
