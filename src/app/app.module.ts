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
import { AddEditAdminComponent } from './Components/admin-management/add-edit-admin/add-edit-admin.component';
import { ListingAdminComponent } from './Components/admin-management/listing-admin/listing-admin.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { ListingModule } from 'lib-listing';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    DashboardAdminComponent,
    AddEditAdminComponent,
    ListingAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    LoginModule,
    FormsModule,
    ReactiveFormsModule,
    ListingModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
