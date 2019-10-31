import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './Modules/material-module';
import { LoginModule } from 'login';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListingModule } from 'lib-listing';
import { FileUploadModule } from 'file-upload';
import { AppRoutingModule } from './Modules/app-routing.module';
import { LoginComponent } from './Components/auth/login/login.component';
import { ResetPasswordComponent } from './Components/auth/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './Components/auth/forgot-password/forgot-password.component';
import { DashboardAdminComponent } from './Components/admin/dashboard-admin/dashboard-admin.component';

import { AdminheaderComponent } from './Components/admin/adminheader/adminheader.component';
import { FooterComponent } from './Components/admin/footer/footer.component';
import { LeftNavComponent } from './Components/admin/left-nav/left-nav.component';

import { CKEditorModule } from 'ngx-ckeditor';


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
import { BlogModule } from 'blog';
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
import { AddEditInventoryCatComponent , Modal4} from './Components/inventory/manageinventory/inventory_category/add-edit-inventory-cat/add-edit-inventory-cat.component';
import { ListingInventoryCatComponent } from './Components/inventory/manageinventory/inventory_category/listing-inventory-cat/listing-inventory-cat.component';

//Brand
import { AddEditBrandComponent,Modal5 } from './Components/inventory/manageinventory/brand/add-edit-brand/add-edit-brand.component';
import { ListingBrandComponent } from './Components/inventory/manageinventory/brand/listing-brand/listing-brand.component';

//Inventory List
import { AddEditInventoryComponent } from './Components/inventory/inventorylist/add-edit-inventory/add-edit-inventory.component';
import { ListingInventoryComponent } from './Components/inventory/inventorylist/listing-inventory/listing-inventory.component';




import { LoaderService } from './services/loader.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { LoaderInterceptor } from './Class/common/loader.interceptor';
import { HttpLoaderComponent } from './Components/common/http-loader/http-loader.component';


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
    AddEditInventoryComponent,
    ListingInventoryComponent,
    HttpLoaderComponent,

    

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
    HttpClientModule
  ],
  providers: [CookieService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent],
  entryComponents: [Modal5,Modal4 ,Modal, Modal2, Modal3]
})
export class AppModule { 
  constructor(public http: HttpClient) {
    
  }
}
