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
import { AddEditMedicalpartnersComponent } from './Components/medicalpartners-management/add-edit-medicalpartners/add-edit-medicalpartners.component';
import { ListingMedicalpartnersComponent } from './Components/medicalpartners-management/listing-medicalpartners/listing-medicalpartners.component';
import { AddEditSalesrepComponent } from './Components/salesrep-management/add-edit-salesrep/add-edit-salesrep.component';
import { ListingSalesrepComponent } from './Components/salesrep-management/listing-salesrep/listing-salesrep.component';


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

// _______________MANAGE ADMIN____________
{ path:'admin-management/add' , component:AddEditAdminComponent},
{
  path: 'admin-management/list',
  component: ListingAdminComponent,
  canActivate: [AuthguardService],
  resolve :{adminList :ResolveService},
  data: {
    requestcondition: {
      source: 'admin_view',
      condition: {}
    },
    endpoint: 'datalist'
  },
},
{
  path: 'admin-management/edit/:_id',
  component: AddEditAdminComponent,
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


//____________MANAGE MEDICAL PARTNERS_____________
{ path:'admin/medicalpartners-management/add' , component:AddEditMedicalpartnersComponent},
{
  path: 'admin/medicalpartners-management/list',
  component: ListingMedicalpartnersComponent,
  canActivate: [AuthguardService],
  resolve :{mpList :ResolveService},
  data: {
    requestcondition: {
      source: 'medicalpartners_view',
      condition: {}
    },
    endpoint: 'datalist'
  },
},
{
  path: 'admin/medicalpartners-management/edit/:_id',
  component: AddEditMedicalpartnersComponent,
  canActivate: [AuthguardService],
  resolve :{ mpList :ResolveService},
  data: {
    requestcondition: {
      source: 'medicalpartners',
      condition: {}
    },
    endpoint: 'datalist'
  },
},


//____________SALES REP PARTNERS_____________
{ path:'admin/salesrep-management/add' , component:AddEditSalesrepComponent},
{
  path: 'admin/salesrep-management/list',
  component: ListingSalesrepComponent,
  canActivate: [AuthguardService],
  resolve :{salesRepList :ResolveService},
  data: {
    requestcondition: {
      source: 'salesrep_view',
      condition: {}
    },
    endpoint: 'datalist'
  },
},
{
  path: 'admin/salesrep-management/edit/:_id',
  component: AddEditSalesrepComponent,
  canActivate: [AuthguardService],
  resolve :{ salesRepList :ResolveService},
  data: {
    requestcondition: {
      source: 'salesrep',
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
