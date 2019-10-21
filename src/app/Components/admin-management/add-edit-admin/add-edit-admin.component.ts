import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validator } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HttpServiceService } from '../../../services/http-service.service';


@Component({
  selector: 'app-add-edit-admin',
  templateUrl: './add-edit-admin.component.html',
  styleUrls: ['./add-edit-admin.component.css']
})
export class AddEditAdminComponent implements OnInit {


  // ==========================declaration=====================
  btn_text: any = "SUBMIT";
  adminForm: FormGroup;
  condition: any;
  
  // ==========================================================
  constructor(private formBuilder: FormBuilder, public cookieService: CookieService,
    private http: HttpServiceService) { }







  ngOnInit() {

    //Generating the form on ngOnInit
    this.generateForm();
  }







  // ==============GENERATE FORM==================
  generateForm() {
    this.adminForm = this.formBuilder.group({
      firstname: [],
      lastname: [],
      phone: [],
      email: [],
      password: [],
      confirmpassword: [],
      status: []
    });
  }
  // ===============================================





  // ====================SUBMIT FUNCTION+===================
  onSubmit() {
    console.log(this.adminForm.value);


    if (this.adminForm.invalid) {
      return;
    }
    else {

      //status
      if (this.adminForm.value.status) {
        this.adminForm.value.status = parseInt("1");
      }
      else {
        this.adminForm.value.status = parseInt("0");
      }





      /* start process to submited data */
      let postData: any = {
        "source": 'admin',
        // "data": Object.assign(this.adminForm.value, this.condition),
        "data": this.adminForm.value,
        "token": this.cookieService.get('jwtToken')

      };
      console.log("+++");
      this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {
        
        if (response.status == "success") {
          
          // this.openDialog(this.successMessage);
          // setTimeout(() => {
          //   this.dialogRef.close();
          // }, 2000);


          // this.router.navigateByUrl('doctor-management/list');;
        } else {
          alert("Some error occurred. Please try again.");
        }
      }, (error) => {
        alert("Some error occurred. Please try again.");
      });
    }
  }
}
