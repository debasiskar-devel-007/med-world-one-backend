import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { DashboardAdminComponent } from './Components/dashboard-admin/dashboard-admin.component';
import { AuthguardService } from './services/authguard.service';
import { ResolveService } from './services/resolve.service';
import { AddEditAdminComponent } from './Components/admin-management/add-edit-admin/add-edit-admin.component';
import { ListingAdminComponent } from './Components/admin-management/listing-admin/listing-admin.component';


const routes: Routes = [
// Auth Route
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{ path: 'forgot-password', component: ForgotPasswordComponent },
{ path: 'reset-password', component: ResetPasswordComponent },

//Admin Dashboard
{
  path: 'dashboard-admin',
  component: DashboardAdminComponent,
  canActivate: [AuthguardService],
  // resolve :{techDashboardData :ResolveService},
  // data: {
  //   requestcondition: {
  //     source: 'll',
  //     condition: {}
  //   },
  //   endpoint: 'datalist'
  // },
},

// _______________ADMIN____________
{ path:'admin/add' , component:AddEditAdminComponent},
{
  path: 'admin/list',
  component: ListingAdminComponent,
  canActivate: [AuthguardService],
  resolve :{adminList :ResolveService},
  data: {
    requestcondition: {
      source: 'admin',
      condition: {}
    },
    endpoint: 'datalist'
  },
},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
