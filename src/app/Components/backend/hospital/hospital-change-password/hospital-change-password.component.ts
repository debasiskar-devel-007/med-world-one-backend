import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HttpServiceService } from '../../../../services/http-service.service';
import { MatSnackBar } from '@angular/material';
import { Router, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-hospital-change-password',
  templateUrl: './hospital-change-password.component.html',
  styleUrls: ['./hospital-change-password.component.css']
})
export class HospitalChangePasswordComponent implements OnInit {

  /**  declarations **/
  changePwdForm: FormGroup;
  userData: any;
  role: string;
  id: any;
  message: string;


  constructor(public formBuilder: FormBuilder, public cookieService: CookieService,
    private http: HttpServiceService, private snackBar: MatSnackBar, public router: Router) {
    let allData: any = {};
    allData = cookieService.getAll()
    this.userData = JSON.parse(allData.user_details);
    this.role = this.userData.type;
    this.id = this.userData._id;
  }

  ngOnInit() {
    this.changePwdForm = this.formBuilder.group({
      old_pwd: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      new_pwd: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirm_new_pwd: []
    }, { validator: this.matchpassword('new_pwd', 'confirm_new_pwd') });
  }


  /**for validation purpose**/
  matchpassword(newPasswordkye: string, confirmPasswordkye: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[newPasswordkye],
        confirmpasswordInput = group.controls[confirmPasswordkye];
      if (passwordInput.value !== confirmpasswordInput.value) {
        return confirmpasswordInput.setErrors({ notEquivalent: true });
      }
      else {
        return confirmpasswordInput.setErrors(null);
      }
    };
  }


  //** Update password  **/
  changePassword() {

    if (this.changePwdForm.invalid)
      return;
    else {
      let posData: any = {
        "adminflag": 0,
        "_id": this.id,
        "oldPassword": this.changePwdForm.value.old_pwd,
        "newPassword": this.changePwdForm.value.new_pwd
      }
      this.http.httpViaPost('changepassword', posData).subscribe((response: any) => {
        if (response.Status == true) {

          this.message = "Password Changed Successfully!!!";
          let action: any = "Ok";
          this.snackBar.open(this.message, action, {
            duration: 1000,
          });

          this.router.navigateByUrl('hospital/change-password');

        }
        else {
          this.message = "Could not change password!Please try again later!!!"
          this.snackBar.open(this.message, "OK", {
            duration: 1500
          });
        }
      });
    }
  }

  /** blur **/
  inputBlur(val: any) {
    this.changePwdForm.controls[val].markAsUntouched();
  }

  /** Cancel button**/
  onCancel() {
    this.changePwdForm.reset();
  }

}
