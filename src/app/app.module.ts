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
import { AddEditAdminComponent, Modal } from './Components/admin/admin-management/add-edit-admin/add-edit-admin.component';
import { ListingAdminComponent } from './Components/admin/admin-management/listing-admin/listing-admin.component';
import { ListingMedicalpartnersComponent } from './Components/admin/medicalpartners-management/listing-medicalpartners/listing-medicalpartners.component';
import { AddEditMedicalpartnersComponent, Modal2 } from './Components/admin/medicalpartners-management/add-edit-medicalpartners/add-edit-medicalpartners.component';
import { ListingSalesrepComponent } from './Components/admin/salesrep-management/listing-salesrep/listing-salesrep.component';
import { AddEditSalesrepComponent, Modal3 } from './Components/admin/salesrep-management/add-edit-salesrep/add-edit-salesrep.component';
import { AdminheaderComponent } from './Components/admin/adminheader/adminheader.component';
import { FooterComponent } from './Components/admin/footer/footer.component';
import { LeftNavComponent } from './Components/admin/left-nav/left-nav.component';
import { BlogModule } from 'blog';
import { CKEditorModule } from 'ngx-ckeditor';

//Blogs
import { AddEditBlogsComponent } from './Components/managewebsites/add-edit-blogs/add-edit-blogs.component';
import { ListingBlogsComponent } from './Components/managewebsites/listing-blogs/listing-blogs.component';

//Blog Category
import { AddEditBlogcatComponent } from './Components/managewebsites/add-edit-blogcat/add-edit-blogcat.component';
import { ListingBlogcatComponent } from './Components/managewebsites/listing-blogcat/listing-blogcat.component'; 


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
    ListingBlogcatComponent

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
    CKEditorModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  entryComponents: [Modal, Modal2, Modal3]
})
export class AppModule { }
