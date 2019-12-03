import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './Modules/material-module';
import { LoginModule } from 'login';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListingModule } from 'listing-angular7';
import { FileUploadModule } from 'file-upload';
import { ClipboardModule } from 'ngx-clipboard';
import { AppRoutingModule } from './Modules/app-routing.module';
import { LoginComponent } from './Components/auth/login/login.component';
import { ResetPasswordComponent } from './Components/auth/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './Components/auth/forgot-password/forgot-password.component';
import { DashboardAdminComponent } from './Components/admin/dashboard-admin/dashboard-admin.component';
import { CommonModule } from '@angular/common';
import { AdminheaderComponent } from './Components/admin/adminheader/adminheader.component';
import { FooterComponent } from './Components/admin/footer/footer.component';
import { LeftNavComponent } from './Components/admin/left-nav/left-nav.component';
import { CKEditorModule } from 'ngx-ckeditor';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';


//Admin Management
import { AddEditAdminComponent, Modal } from './Components/admin/admin-management/add-edit-admin/add-edit-admin.component';
import { ListingAdminComponent } from './Components/admin/admin-management/listing-admin/listing-admin.component';



//Medcial Partners
import { ListingMedicalpartnersComponent } from './Components/admin/medicalpartners-management/listing-medicalpartners/listing-medicalpartners.component';
import { AddEditMedicalpartnersComponent, Modal2 } from './Components/admin/medicalpartners-management/add-edit-medicalpartners/add-edit-medicalpartners.component';



//Sales Representative
import { ListingSalesrepComponent } from './Components/admin/salesrep-management/listing-salesrep/listing-salesrep.component';
import { AddEditSalesrepComponent, Modal3 } from './Components/admin/salesrep-management/add-edit-salesrep/add-edit-salesrep.component';



//Blogs
import { BlogModule, BlogComponent } from 'blog';
import { AddEditBlogsComponent } from './Components/managewebsites/blogmanagement/add-edit-blogs/add-edit-blogs.component';
import { ListingBlogsComponent } from './Components/managewebsites/blogmanagement/listing-blogs/listing-blogs.component';

//Blog Category
import { AddEditBlogcatComponent } from './Components/managewebsites/blogmanagement/add-edit-blogcat/add-edit-blogcat.component';
import { ListingBlogcatComponent } from './Components/managewebsites/blogmanagement/listing-blogcat/listing-blogcat.component';


//Team
import { TeamModule } from 'team';
import { AddEditTeamComponent } from './Components/managewebsites/teammanagement/add-edit-team/add-edit-team.component';
import { ListingTeamComponent } from './Components/managewebsites/teammanagement/listing-team/listing-team.component';
import { ListingTeamCatComponent } from './Components/managewebsites/teammanagement/listing-team-cat/listing-team-cat.component';
import { AddeditTeamCatComponent } from './Components/managewebsites/teammanagement/addedit-team-cat/addedit-team-cat.component';


//Inventory Category
import { AddEditInventoryCatComponent, Modal4 } from './Components/inventory/manageinventory/inventory_category/add-edit-inventory-cat/add-edit-inventory-cat.component';
import { ListingInventoryCatComponent } from './Components/inventory/manageinventory/inventory_category/listing-inventory-cat/listing-inventory-cat.component';

//Brand
import { AddEditBrandComponent, Modal5 } from './Components/inventory/manageinventory/brand/add-edit-brand/add-edit-brand.component';
import { ListingBrandComponent } from './Components/inventory/manageinventory/brand/listing-brand/listing-brand.component';

//Inventory List
import { AddEditInventoryComponent } from './Components/inventory/inventorylist/add-edit-inventory/add-edit-inventory.component';
import { ListingInventoryComponent } from './Components/inventory/inventorylist/listing-inventory/listing-inventory.component';




import { LoaderService } from './services/loader.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { LoaderInterceptor } from './Class/common/loader.interceptor';
import { HttpLoaderComponent } from './Components/common/http-loader/http-loader.component';
import { AccountsComponent } from './Components/common/accounts/accounts.component';
import { DialogBoxComponent } from './Components/common/dialog-box/dialog-box.component';
import { MatIconRegistry } from '@angular/material';
import { HomePageComponent } from './Components/frontend/home-page/home-page.component';
import { BuyFromUsComponent } from './Components/frontend/buy-from-us/buy-from-us.component';
import { ManufacturarDirectComponent } from './Components/frontend/manufacturar-direct/manufacturar-direct.component';
import { MedicalPartnersComponent } from './Components/frontend/medical-partners/medical-partners.component';
import { ContactUsComponent } from './Components/frontend/contact-us/contact-us.component';
import { TeamPageComponent, TeamDetails } from './Components/frontend/team-page/team-page.component';
import { BlogComponentFrontEnd } from './Components/frontend/blog/blog.component';
import { BlogDetailsComponent } from './Components/frontend/blog-details/blog-details.component';
import { InventoryComponent } from './Components/frontend/inventory/inventory.component';
import { InventoryDetailsComponent } from './Components/frontend/inventory-details/inventory-details.component';
import { AboutUsFrontComponent } from './Components/frontend/about-us-front/about-us-front.component';
import { SalesRepLoginComponent } from './Components/frontend/logins/sales-rep-login/sales-rep-login.component';
import { MyDetailsHospitalComponent } from './Components/backend/hospital/my-details-hospital/my-details-hospital.component';
import { HospitalChangePasswordComponent } from './Components/backend/hospital/hospital-change-password/hospital-change-password.component';
import { HospitalMySalesrepComponent } from './Components/backend/hospital/hospital-my-salesrep/hospital-my-salesrep.component';
import { HospitalInventoryAddedComponent } from './Components/backend/hospital/hospital-inventory-added/hospital-inventory-added.component';
import { DetailsHospitalInventoryComponent } from './Components/backend/hospital/details-inventory/details-inventory.component';
import { HospitalAddInventoryComponent } from './Components/backend/hospital/hospital-add-inventory/hospital-add-inventory.component';
import { HospitalViewQuotesComponent } from './Components/backend/hospital/hospital-view-quotes/hospital-view-quotes.component';
import { DetailsQuotesComponent } from './Components/backend/hospital/details-quotes/details-quotes.component';
import { MyDetailsComponent } from './Components/backend/sales-rep/my-details/my-details.component';
import { SalesrepChangePasswordComponent } from './Components/backend/sales-rep/salesrep-change-password/salesrep-change-password.component';
import { SalesrepHospitalComponent } from './Components/backend/sales-rep/salesrep-hospital/salesrep-hospital.component';
import { SalesrepInventoryAddedComponent } from './Components/backend/sales-rep/salesrep-inventory-added/salesrep-inventory-added.component';
import { EditInventoryComponent } from './Components/backend/sales-rep/edit-inventory/edit-inventory.component';
import { DetailsInventoryComponent } from './Components/backend/sales-rep/details-inventory/details-inventory.component';
import { SalesrepViewQuotesComponent } from './Components/backend/sales-rep/salesrep-view-quotes/salesrep-view-quotes.component';
import { SalesrepSalesComponent } from './Components/backend/sales-rep/salesrep-sales/salesrep-sales.component';
import { ManageHospitalComponent } from './Components/backend/sales-rep/manage-hospital/manage-hospital.component';
import { FrontendFooterComponent } from './Components/frontend/frontend-footer/frontend-footer.component';
import { FrontendHeaderComponent } from './Components/frontend/frontend-header/frontend-header.component';
import { MyaccountComponent } from './Components/backend/sales-rep/myaccount/myaccount.component';
import { LeftNavSalesComponent } from './Components/backend/sales-rep/left-nav-sales/left-nav-sales.component';
import { HospitalLoginComponent } from './Components/frontend/logins/hospital-login/hospital-login.component';
import { UploadDialogBoxComponent, DialogContentExampleDialog } from './Components/common/upload-dialog-box/upload-dialog-box.component';
import { LoginAdminComponent } from './Components/frontend/logins/login/login.component';
import { ContactusModule } from 'contactus';
import { MomentModule } from 'ngx-moment';


// Pricemarkup
import { AddEditPriceMarkupManagementComponent, Modal6} from './Components/inventory/priceMarkupManagementList/add-edit-price-markup-management/add-edit-price-markup-management.component';
import { ListingPriceMarkupManagementComponent } from './Components/inventory/priceMarkupManagementList/listing-price-markup-management/listing-price-markup-management.component';


import { ContactusListingComponent } from './Components/miscellaneous/contactus-listing/contactus-listing.component';

//Language Container
import { AddEditLanguageComponent } from './Components/miscellaneous/language-container/add-edit-language/add-edit-language.component';
import { ListingLanguageComponent } from './Components/miscellaneous/language-container/listing-language/listing-language.component';


//purchase comparison
import { AddEditPurchaseComparisonComponent } from './Components/inventory/purchasecomparison/add-edit-purchase-comparison/add-edit-purchase-comparison.component';
import { ListingPurchaseComparisonComponent ,quoteModal,sendMailModal} from './Components/inventory/purchasecomparison/listing-purchase-comparison/listing-purchase-comparison.component';
import { MetaModule } from '@ngx-meta/core';
import { AddcontactinfoComponent } from './Components/miscellaneous/addcontactinfo/addcontactinfo.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    DashboardAdminComponent,
    AddEditAdminComponent,
    Modal,
    ListingAdminComponent,

    AddEditMedicalpartnersComponent,
    ListingMedicalpartnersComponent,
    Modal2,

    AddEditSalesrepComponent,
    ListingSalesrepComponent,
    Modal3,

    AdminheaderComponent,
    FooterComponent,
    LeftNavComponent,

    AddEditBlogsComponent,
    ListingBlogsComponent,
    AddEditBlogcatComponent,
    ListingBlogcatComponent,
    AddEditTeamComponent,
    ListingTeamComponent,
    ListingTeamCatComponent,
    AddeditTeamCatComponent,


    AddEditInventoryCatComponent,
    ListingInventoryCatComponent,
    Modal4,

    AddEditBrandComponent,
    ListingBrandComponent,
    Modal5,
    Modal6,
    AddEditInventoryComponent,
    ListingInventoryComponent,
    HttpLoaderComponent,
    AccountsComponent,

    DialogBoxComponent,

    // front end
    HomePageComponent,
    BuyFromUsComponent,
    ManufacturarDirectComponent,
    MedicalPartnersComponent,
    ContactUsComponent,
    TeamPageComponent,
    BlogComponentFrontEnd,
    BlogDetailsComponent,
    InventoryComponent,
    InventoryDetailsComponent,
    AboutUsFrontComponent,
    SalesRepLoginComponent,
    MyDetailsHospitalComponent,
    HospitalChangePasswordComponent,
    HospitalMySalesrepComponent,
    HospitalInventoryAddedComponent,
    DetailsHospitalInventoryComponent,
    HospitalAddInventoryComponent,
    HospitalViewQuotesComponent,
    DetailsQuotesComponent,
    MyDetailsComponent,
    SalesrepChangePasswordComponent,
    SalesrepHospitalComponent,
    SalesrepInventoryAddedComponent,
    EditInventoryComponent,
    DetailsInventoryComponent,
    SalesrepViewQuotesComponent,
    SalesrepSalesComponent,
    ManageHospitalComponent,
    FrontendFooterComponent,
    FrontendHeaderComponent,
    MyaccountComponent,
    LeftNavComponent,
    LeftNavSalesComponent,
    HospitalLoginComponent,
    UploadDialogBoxComponent,
    DialogContentExampleDialog,
    LoginComponent,
    LoginAdminComponent,
    TeamDetails,
    AddEditPriceMarkupManagementComponent,
    ListingPriceMarkupManagementComponent,
    ContactusListingComponent,
    AddEditLanguageComponent,
    ListingLanguageComponent,
    AddEditPurchaseComparisonComponent,
    ListingPurchaseComparisonComponent,
    quoteModal,sendMailModal, AddcontactinfoComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    LoginModule,
    FormsModule,
    ReactiveFormsModule,
    ListingModule,
    FileUploadModule,
    BlogModule,
    CKEditorModule,
    TeamModule,
    HttpClientModule,
    ContactusModule,
    CommonModule,
    MomentModule,
    ClipboardModule,
    NgxDaterangepickerMd.forRoot(),
    MetaModule.forRoot(),
  ],
  providers: [CookieService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  entryComponents: [sendMailModal,quoteModal,Modal5, Modal4, Modal, Modal2, Modal3,Modal6, DialogBoxComponent, TeamDetails]
})
export class AppModule {
  constructor(public http: HttpClient, matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}
