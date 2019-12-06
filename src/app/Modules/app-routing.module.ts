import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../Components/auth/login/login.component';
// import { ForgetPasswordComponent } from 'login/lib/forget-password/forget-password.component';
import { ResetPasswordComponent } from '../Components/auth/reset-password/reset-password.component';
import { DashboardAdminComponent } from '../Components/admin/dashboard-admin/dashboard-admin.component';
import { AuthguardService } from '../services/authguard.service';
import {AuthService } from '../services/auth.service';
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
import { AddEditInventoryComponent } from '../Components/inventory/inventorylist/add-edit-inventory/add-edit-inventory.component';
import { ListingInventoryComponent } from '../Components/inventory/inventorylist/listing-inventory/listing-inventory.component';
import { AccountsComponent } from '../Components/common/accounts/accounts.component';
import { HomePageComponent } from '../Components/frontend/home-page/home-page.component';
import { BuyFromUsComponent } from '../Components/frontend/buy-from-us/buy-from-us.component';
import { ManufacturarDirectComponent } from '../Components/frontend/manufacturar-direct/manufacturar-direct.component';
import { MedicalPartnersComponent } from '../Components/frontend/medical-partners/medical-partners.component';
import { ContactUsComponent } from '../Components/frontend/contact-us/contact-us.component';
import { TeamPageComponent } from '../Components/frontend/team-page/team-page.component';

import { BlogDetailsComponent } from '../Components/frontend/blog-details/blog-details.component';
import { InventoryComponent } from '../Components/frontend/inventory/inventory.component';
import { InventoryDetailsComponent } from '../Components/frontend/inventory-details/inventory-details.component';
import { AboutUsFrontComponent } from '../Components/frontend/about-us-front/about-us-front.component';
import { SalesRepLoginComponent } from '../Components/frontend/logins/sales-rep-login/sales-rep-login.component';
import { MyDetailsHospitalComponent } from '../Components/backend/hospital/my-details-hospital/my-details-hospital.component';
import { HospitalChangePasswordComponent } from '../Components/backend/hospital/hospital-change-password/hospital-change-password.component';
import { HospitalMySalesrepComponent } from '../Components/backend/hospital/hospital-my-salesrep/hospital-my-salesrep.component';
import { HospitalInventoryAddedComponent } from '../Components/backend/hospital/hospital-inventory-added/hospital-inventory-added.component';
import { DetailsHospitalInventoryComponent } from '../Components/backend/hospital/details-inventory/details-inventory.component';
import { HospitalAddInventoryComponent } from '../Components/backend/hospital/hospital-add-inventory/hospital-add-inventory.component';
import { HospitalViewQuotesComponent } from '../Components/backend/hospital/hospital-view-quotes/hospital-view-quotes.component';
import { DetailsQuotesComponent } from '../Components/backend/hospital/details-quotes/details-quotes.component';
import { MyDetailsComponent } from '../Components/backend/sales-rep/my-details/my-details.component';
import { SalesrepChangePasswordComponent } from '../Components/backend/sales-rep/salesrep-change-password/salesrep-change-password.component';
import { SalesrepHospitalComponent } from '../Components/backend/sales-rep/salesrep-hospital/salesrep-hospital.component';
import { SalesrepInventoryAddedComponent } from '../Components/backend/sales-rep/salesrep-inventory-added/salesrep-inventory-added.component';
import { EditInventoryComponent } from '../Components/backend/sales-rep/edit-inventory/edit-inventory.component';
import { DetailsInventoryComponent } from '../Components/backend/sales-rep/details-inventory/details-inventory.component';
import { SalesrepViewQuotesComponent } from '../Components/backend/sales-rep/salesrep-view-quotes/salesrep-view-quotes.component';
import { SalesrepSalesComponent } from '../Components/backend/sales-rep/salesrep-sales/salesrep-sales.component';
import { ManageHospitalComponent } from '../Components/backend/sales-rep/manage-hospital/manage-hospital.component';
import { BlogComponentFrontEnd } from '../Components/frontend/blog/blog.component';
// import { BlogComponent } from 'blog-lib-influxiq';
import { HospitalLoginComponent } from '../Components/frontend/logins/hospital-login/hospital-login.component';
import { LoginAdminComponent } from '../Components/frontend/logins/login/login.component';
import { ListingPriceMarkupManagementComponent } from '../Components/inventory/priceMarkupManagementList/listing-price-markup-management/listing-price-markup-management.component';
import { AddEditPriceMarkupManagementComponent } from '../Components/inventory/priceMarkupManagementList/add-edit-price-markup-management/add-edit-price-markup-management.component';
import { ContactusListingComponent } from '../Components/miscellaneous/contactus-listing/contactus-listing.component';
import { AddEditLanguageComponent } from '../Components/miscellaneous/language-container/add-edit-language/add-edit-language.component';
import { ListingLanguageComponent } from '../Components/miscellaneous/language-container/listing-language/listing-language.component';
import { AddEditPurchaseComparisonComponent } from '../Components/inventory/purchasecomparison/add-edit-purchase-comparison/add-edit-purchase-comparison.component';
import { ListingPurchaseComparisonComponent } from '../Components/inventory/purchasecomparison/listing-purchase-comparison/listing-purchase-comparison.component';
import { AddcontactinfoComponent } from '../Components/miscellaneous/addcontactinfo/addcontactinfo.component';
import { QuotesCartComponent } from '../components/frontend/quotes-cart/quotes-cart.component';



const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent,canActivate: [AuthService]},
  { path: 'sales-rep/home', component: HomePageComponent },
  { path: 'hospital/home', component: HomePageComponent },
  { path: 'buy-from-us', component: BuyFromUsComponent },
  { path: 'manufacturar-direct', component: ManufacturarDirectComponent },
  { path: 'medical-partners', component: MedicalPartnersComponent },
  // Auth Route
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password/:token', component: ResetPasswordComponent },

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
        source: 'users_view',
        condition: { 'type': 'admin' }
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
        source: 'users',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },




  //____________MANAGE MEDICAL PARTNERS_____________
  { path: 'admin/medicalpartners-management/add', component: AddEditMedicalpartnersComponent,canActivate: [AuthguardService]},
  {
    path: 'admin/medicalpartners-management/list',
    component: ListingMedicalpartnersComponent,
    canActivate: [AuthguardService],
    resolve: { mpList: ResolveService },
    data: {
      requestcondition: {
        source: 'users_view',
        condition: { 'type': 'hospital' }
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
        source: 'users',
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
        source: 'users_view',
        condition: { 'type': 'salesrep' }
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
        source: 'users',
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





  // _______________________INVENTORY category________________
  // =========================================================


  { path: 'inventory/manage-inventory/inventory-category/add', component: AddEditInventoryCatComponent,canActivate: [AuthguardService] },

  {
    path: 'inventory/manage-inventory/inventory-category/list',
    component: ListingInventoryCatComponent,
    canActivate: [AuthguardService],
    resolve: { inventoryCatList: ResolveService },
    data: {
      requestcondition: {
        source: 'category_view',
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


  //________________INVENTORY LIST_________________

  { path: 'inventory/inventory-list/add', component: AddEditInventoryComponent },

  {
    path: 'inventory/inventory-list/list',
    component: ListingInventoryComponent,
    canActivate: [AuthguardService],
    resolve: { inventoryList: ResolveService },
    data: {
      requestcondition: {
        source: 'inventories_list_view',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },
  {
    path: 'inventory/inventory-list/edit/:_id',
    component: AddEditInventoryComponent,
    canActivate: [AuthguardService],
    resolve: { inventoryList: ResolveService },
    data: {
      requestcondition: {
        source: 'inventories',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },
//_______________Admin Contact us Listing_____________//
{path: 'admin-dashboard/contact',component:ContactusListingComponent,resolve:{contactlist:ResolveService},
data:{requestcondition:{source:'contactus_view',condition:{}},endpoint:'datalist'},canActivate: [AuthguardService]},
// add admin contact info
 {path:'admin-dashboard/addcontactinfo',component:AddcontactinfoComponent,canActivate: [AuthguardService]},
  //____________________price markup management______________________//

  { path: 'inventory/price-markup-management-list/add', component: AddEditPriceMarkupManagementComponent },

  {
    path: 'inventory/price-markup-management-list/list', component: ListingPriceMarkupManagementComponent,
    canActivate: [AuthguardService],
    resolve: { priceMarkupList: ResolveService },
    data: {
      requestcondition: {
        source: 'priceMarkup_view',
        condition: {}
      },
      endpoint: 'datalist'
    }
  },

  {
    path: 'inventory/price-markup-management-list/edit/:_id', component: AddEditPriceMarkupManagementComponent,
    canActivate: [AuthguardService],
    resolve: { priceMarkupList: ResolveService },
    data: {
      requestcondition: {
        source: 'priceMarkup',
        condition: {}
      },
      endpoint: 'datalist'

    }

  },


  // ________________________ACCOUNT SETTINGS______________________

  { path: 'account-settings', component: AccountsComponent },
  {path: 'cart', component: QuotesCartComponent},

  // front end routing
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent,canActivate: [AuthguardService]},
  { path: 'sales-rep/home', component: HomePageComponent },
  { path: 'buy-from-us', component: BuyFromUsComponent },
  { path: 'manufacturar-direct', component: ManufacturarDirectComponent },
  { path: 'medical-partners', component: MedicalPartnersComponent },
  { path: 'contactus', component: ContactUsComponent,resolve: { activeContact: ResolveService },
  data: {
    requestcondition: {
      source: 'contactus_view_active',
      condition: {}
    },
    endpoint: 'datalist'
  },},
  {
    path: 'our-team',
    component: TeamPageComponent,
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
    path: 'our-team',
    component: TeamPageComponent,
    resolve: { teamList: ResolveService },
    data: {
      requestcondition: {
        source: 'Team_management_view',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },

  { path: 'blog', component: BlogComponentFrontEnd},


  { path: 'blog-details/:_id', component: BlogDetailsComponent,
    resolve: {
      blogCatList: ResolveService
    },
    data:
    {
      requestcondition:
      {
        source: 'blogs_view', condition: {}
      }, endpoint: 'datalistwithouttoken'
    } 
  },
  // Forntend inventory list
  { path: 'inventory', component: InventoryComponent,  resolve: { inventoryList: ResolveService },
  data: { requestcondition: { source: 'inventories_view',condition: {}},endpoint: 'datalist'}, },

  { path: 'inventory-details/:id', component: InventoryDetailsComponent },

  { path: 'about-us', component: AboutUsFrontComponent },

  { path: 'salesrep-login', component: SalesRepLoginComponent },

  // _____________________language container_____________________
  { path: 'admin-dashboard/language/add', component: AddEditLanguageComponent },
  {
    path: 'admin-dashboard/language/list',
    component: ListingLanguageComponent,
    resolve: { data: ResolveService },
    data: {
      requestcondition: {
        source: 'languages',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },
  {
    path: 'admin-dashboard/language/edit/:_id',
    component: AddEditLanguageComponent,
    resolve: { data: ResolveService },
    data: {
      requestcondition: {
        source: 'languages',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },

  // __________________admin purchase comparison____________________________
  { path: 'admin/inventory/purchase-comparison/add', component: AddEditPurchaseComparisonComponent },
  {
    path: 'admin/inventory/purchase-comparison/list',
    component: ListingPurchaseComparisonComponent,
    resolve: { data: ResolveService },
    data: {
      requestcondition: {
        source: 'purchasecomparison_view_admin',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },
  {
    path: 'admin/inventory/purchase-comparison/edit/:_id',
    component: AddEditPurchaseComparisonComponent,
    resolve: { data: ResolveService },
    data: {
      requestcondition: {
        source: 'purchasecomparison',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },
// ________________________salesrep  purchase comparison___________________________
  { path: 'salesrep/purchase-comparison/add', component: AddEditPurchaseComparisonComponent },
  {
    path: 'salesrep/purchase-comparison/list',
    component: ListingPurchaseComparisonComponent,
    resolve: { data: ResolveService },
    data: {
      requestcondition: {
        source: 'purchasecomparison_view_admin',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },
  {
    path: 'salesrep/purchase-comparison/edit/:_id',
    component: AddEditPurchaseComparisonComponent,
    resolve: { data: ResolveService },
    data: {
      requestcondition: {
        source: 'purchasecomparison',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },




  // ==================================================================================
  // FRONT END
  // ==================================================================================

  // admin frontend
  { path: 'login', component: LoginAdminComponent },
  { path: 'hospital-login', component: HospitalLoginComponent },
  {
    path: 'hospital/my-details',
    component: MyDetailsHospitalComponent,
    canActivate: [AuthguardService],
    resolve: { data: ResolveService },
    data: {
      requestcondition: {
        source: 'users_view',
        condition: { 'type': 'hospital' }
      },
      endpoint: 'datalist'
    },
  },
  { path: 'hospital/change-password', component: HospitalChangePasswordComponent },
  { path: 'hospital/my-hospital', component: HospitalMySalesrepComponent },
  { path: 'hospital/added-inventory', component: HospitalInventoryAddedComponent },
  { path: 'hospital/added-inventory/details', component: DetailsHospitalInventoryComponent },
  { path: 'hospital/added-inventory/add', component: HospitalAddInventoryComponent },
  { path: 'hospital/view-quotes', component: HospitalViewQuotesComponent },
  { path: 'hospital/view-quotes/details', component: DetailsQuotesComponent },


  {
    path: 'salesrep/my-details',
    component: MyDetailsComponent,
    resolve: { data: ResolveService },
    data: {
      requestcondition: {
        source: 'users_view',
        condition: { 'type': 'salesrep' }
      },
      endpoint: 'datalist'
    },

  },
  { path: 'salesrep/change-password', component: SalesrepChangePasswordComponent },
  { path: 'salesrep/my-hospital', component: SalesrepHospitalComponent },
  { path: 'salesrep/my-added-inventory', component: SalesrepInventoryAddedComponent },
  { path: 'salesrep/my-added-inventory/add', component: EditInventoryComponent },
  { path: 'salesrep/my-added-inventory/details', component: DetailsInventoryComponent },
  { path: 'salesrep/view-quotes', component: SalesrepViewQuotesComponent },
  { path: 'salesrep/my-sales', component: SalesrepSalesComponent },

  /** Salesrep hospital management **/
  { path: 'salesrep/hospital/manage-hospital', component: ManageHospitalComponent },
  {
    path: 'salesrep/hospital/manage-hospital/edit/:_id',
    component: ManageHospitalComponent,
    resolve: { data: ResolveService },
    data: {
      requestcondition: {
        'source': 'users_view',
        'condition': { 'type':'hospital'}
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
