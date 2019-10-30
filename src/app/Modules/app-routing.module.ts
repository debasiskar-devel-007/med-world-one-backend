import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../Components/auth/login/login.component';
// import { ForgetPasswordComponent } from 'login/lib/forget-password/forget-password.component';
import { ResetPasswordComponent } from '../Components/auth/reset-password/reset-password.component';
import { DashboardAdminComponent } from '../Components/admin/dashboard-admin/dashboard-admin.component';
import { AuthguardService } from '../services/authguard.service';
import { AddEditAdminComponent } from '../Components/admin/admin-management/add-edit-admin/add-edit-admin.component';
import { ListingAdminComponent } from '../Components/admin/admin-management/listing-admin/listing-admin.component';
import { ResolveService } from '../services/resolve.service';
import { AddEditMedicalpartnersComponent } from '../Components/admin/medicalpartners-management/add-edit-medicalpartners/add-edit-medicalpartners.component';
import { ListingMedicalpartnersComponent } from '../Components/admin/medicalpartners-management/listing-medicalpartners/listing-medicalpartners.component';
import { AddEditSalesrepComponent } from '../Components/admin/salesrep-management/add-edit-salesrep/add-edit-salesrep.component';
import { ListingSalesrepComponent } from '../Components/admin/salesrep-management/listing-salesrep/listing-salesrep.component';
import { ForgotPasswordComponent } from '../Components/auth/forgot-password/forgot-password.component';
import { AddEditBlogcatComponent } from '../Components/managewebsites/blogmanagement/add-edit-blogcat/add-edit-blogcat.component';
import { ListingBlogcatComponent } from '../Components/managewebsites/blogmanagement/listing-blogcat/listing-blogcat.component';
import { ListingBlogsComponent } from '../Components/managewebsites/blogmanagement/listing-blogs/listing-blogs.component';
import { AddEditBlogsComponent } from '../Components/managewebsites/blogmanagement/add-edit-blogs/add-edit-blogs.component';
import { AddEditTeamComponent } from '../Components/managewebsites/teammanagement/add-edit-team/add-edit-team.component';
import { ListingTeamComponent } from '../Components/managewebsites/teammanagement/listing-team/listing-team.component';
import { AddeditTeamCatComponent } from '../Components/managewebsites/teammanagement/addedit-team-cat/addedit-team-cat.component';
import { ListingTeamCatComponent } from '../Components/managewebsites/teammanagement/listing-team-cat/listing-team-cat.component';
import { AddEditInventoryCatComponent } from '../Components/inventory/manageinventory/inventory_category/add-edit-inventory-cat/add-edit-inventory-cat.component';
import { ListingInventoryCatComponent } from '../Components/inventory/manageinventory/inventory_category/listing-inventory-cat/listing-inventory-cat.component';
import { AddEditBrandComponent } from '../Components/inventory/manageinventory/brand/add-edit-brand/add-edit-brand.component';
import { ListingBrandComponent } from '../Components/inventory/manageinventory/brand/listing-brand/listing-brand.component';



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






  // __________________ADMIN MANGEMENT____________________
  // =====================================================

  // _______________MANAGE ADMIN____________
  { path: 'admin-management/add', component: AddEditAdminComponent },
  {
    path: 'admin-management/list',
    component: ListingAdminComponent,
    canActivate: [AuthguardService],
    resolve: { adminList: ResolveService },
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
    resolve: { adminList: ResolveService },
    data: {
      requestcondition: {
        source: 'admin',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },




  //____________MANAGE MEDICAL PARTNERS_____________
  { path: 'admin/medicalpartners-management/add', component: AddEditMedicalpartnersComponent },
  {
    path: 'admin/medicalpartners-management/list',
    component: ListingMedicalpartnersComponent,
    canActivate: [AuthguardService],
    resolve: { mpList: ResolveService },
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
    resolve: { mpList: ResolveService },
    data: {
      requestcondition: {
        source: 'medicalpartners',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },


  //____________SALES REP PARTNERS_____________
  { path: 'admin/salesrep-management/add', component: AddEditSalesrepComponent },
  {
    path: 'admin/salesrep-management/list',
    component: ListingSalesrepComponent,
    canActivate: [AuthguardService],
    resolve: { salesRepList: ResolveService },
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
    resolve: { salesRepList: ResolveService },
    data: {
      requestcondition: {
        source: 'salesrep',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },




  // _______________________MANAGE WEBSITES________________
  // =========================================================




  // ________________BLOG CATEGORY______________
  { path: 'manage-websites/addblogcategory/add', component: AddEditBlogcatComponent },

  {
    path: 'manage-websites/addblogcategory/list',
    component: ListingBlogcatComponent,
    canActivate: [AuthguardService],
    resolve: { blogCatList: ResolveService },
    data: {
      requestcondition: {
        source: 'blog_category_view',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },
  {
    path: 'manage-websites/addblogcategory/edit/:_id',
    component: AddEditBlogcatComponent,
    canActivate: [AuthguardService],
    resolve: { blogCatList: ResolveService },
    data: {
      requestcondition: {
        source: 'blog_category',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },


// ________________BLOGS______________


{ path: 'manage-websites/addblogs/add', component: AddEditBlogsComponent },

  {
    path: 'manage-websites/addblogs/list',
    component: ListingBlogsComponent,
    canActivate: [AuthguardService],
    resolve: { blogsList: ResolveService },
    data: {
      requestcondition: {
        source: 'blogs_view',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },
  {
    path: 'manage-websites/addblogs/edit/:_id',
    component: AddEditBlogsComponent,
    canActivate: [AuthguardService],
    resolve: { blogsList: ResolveService },
    data: {
      requestcondition: {
        source: 'blogs',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },


//  _____________________TEAM CATEGORY________________

{ path: 'manage-websites/team-category/add', component: AddeditTeamCatComponent },

{
  path: 'manage-websites/team-category/list',
  component: ListingTeamCatComponent,
  canActivate: [AuthguardService],
  resolve: { teamCatList: ResolveService },
  data: {
    requestcondition: {
      source: 'Team_category_view',
      condition: {}
    },
    endpoint: 'datalist'
  },
},
{
  path: 'manage-websites/team-category/edit/:_id',
  component: AddeditTeamCatComponent,
  canActivate: [AuthguardService],
  resolve: { teamCatList: ResolveService },
  data: {
    requestcondition: {
      source: 'Team_category',
      condition: {}
    },
    endpoint: 'datalist'
  },
},




//  _____________________TEAM________________

  { path: 'manage-websites/team/add', component: AddEditTeamComponent },

  {
    path: 'manage-websites/team/list',
    component: ListingTeamComponent,
    canActivate: [AuthguardService],
    resolve: { teamList: ResolveService },
    data: {
      requestcondition: {
        source: 'Team_management_view',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },
  {
    path: 'manage-websites/team/edit/:_id',
    component: AddEditTeamComponent,
    canActivate: [AuthguardService],
    resolve: { teamList: ResolveService },
    data: {
      requestcondition: {
        source: 'Team_management',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },





   // _______________________INVENTORY________________
  // =========================================================


  { path: 'inventory/manage-inventory/inventory-category/add', component: AddEditInventoryCatComponent },

  {
    path: 'inventory/manage-inventory/inventory-category/list',
    component: ListingInventoryCatComponent,
    canActivate: [AuthguardService],
    resolve: { inventoryCatList: ResolveService },
    data: {
      requestcondition: {
        source: 'inventory_category_view',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },
  {
    path: 'inventory/manage-inventory/inventory-category/edit/:_id',
    component: AddEditInventoryCatComponent,
    canActivate: [AuthguardService],
    resolve: { inventoryCatList: ResolveService },
    data: {
      requestcondition: {
        source: 'inventory_category',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },

  // _______________BRAND_______________
  { path: 'inventory/manage-inventory/brand/add', component: AddEditBrandComponent },

  {
    path: 'inventory/manage-inventory/brand/list',
    component: ListingBrandComponent,
    canActivate: [AuthguardService],
    resolve: { brandList: ResolveService },
    data: {
      requestcondition: {
        source: 'brands_view',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },
  {
    path: 'inventory/manage-inventory/brand/edit/:_id',
    component: AddEditBrandComponent,
    canActivate: [AuthguardService],
    resolve: { brandList: ResolveService },
    data: {
      requestcondition: {
        source: 'brands',
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
