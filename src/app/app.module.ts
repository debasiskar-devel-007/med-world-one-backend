import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import { DemoMaterialModule } from './Modules/material-module';
import { LoginModule } from 'login';
import { CookieService } from 'ngx-cookie-service';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { DashboardAdminComponent } from './Components/dashboard-admin/dashboard-admin.component';
import { AddEditAdminComponent, Modal } from './Components/admin-management/add-edit-admin/add-edit-admin.component';
import { ListingAdminComponent } from './Components/admin-management/listing-admin/listing-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListingModule } from 'lib-listing';
import { AddEditMedicalpartnersComponent , Modal2 } from './Components/medicalpartners-management/add-edit-medicalpartners/add-edit-medicalpartners.component';
import { ListingMedicalpartnersComponent } from './Components/medicalpartners-management/listing-medicalpartners/listing-medicalpartners.component';
import { FileUploadModule} from 'file-upload';
import { ListingSalesrepComponent } from './Components/salesrep-management/listing-salesrep/listing-salesrep.component';
import { AddEditSalesrepComponent ,Modal3} from './Components/salesrep-management/add-edit-salesrep/add-edit-salesrep.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    DashboardAdminComponent,
    AddEditAdminComponent,
    ListingAdminComponent,
    Modal,
    AddEditMedicalpartnersComponent,
    ListingMedicalpartnersComponent,
    Modal2,
    ListingSalesrepComponent,
    AddEditSalesrepComponent,
    Modal3
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
    FileUploadModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  entryComponents: [Modal,Modal2,Modal3]
})
export class AppModule { }
