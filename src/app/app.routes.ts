import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BeforeloginComponent } from './pages/beforelogin/beforelogin.component';
import { HomeuserComponent } from './pages/homeuser/homeuser.component';
import { UploadComponent } from './pages/upload/upload.component';
import { BeforeprintComponent } from './pages/beforeprint/beforeprint.component';
import { PrintComponent } from './pages/print/print.component';
import { SuccessComponent } from './pages/success/success.component';

export const routes: Routes = [
    {path:'', component: BeforeloginComponent},
    {path:'login', component: LoginComponent},
    {path:'homeuser', component: HomeuserComponent},
    {path:'upload', component: UploadComponent},
    {path:'beforeprint', component: BeforeprintComponent},
    {path:'print', component: PrintComponent},
    {path:'success', component: SuccessComponent}

];
