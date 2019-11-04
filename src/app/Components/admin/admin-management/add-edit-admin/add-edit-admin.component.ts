import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { Router, ActivatedRoute } from '@angular/router';
import { matchpwd, nameValidator, phoneValidator } from '../../../common/validators'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpServiceService } from 'src/app/services/http-service.service';
export interface DialogData {
  msg: string;
}



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
  action: any = "add"
  defaultData: any;
  successMessage: any = "Submitted Successfully!!!";
  dialogRef: any;
  header_txt: any = "Add an admin"
  isDisabled:boolean =  false;
  // ==========================================================


  constructor(private formBuilder: FormBuilder, public cookieService: CookieService,
    private http: HttpServiceService, private router: Router, public activatedRoute: ActivatedRoute,
    public dialog: MatDialog) {
    this.activatedRoute.params.subscribe(params => {
      if (params['_id'] != null) {
        this.action = "edit";
        this.isDisabled = true;
        this.condition = { id: params._id };
        this.activatedRoute.data.subscribe(resolveData => {
          this.defaultData = resolveData.adminList.res[0];
        });
      }
      else
        this.action = "add";
    });
  }



 


  ngOnInit() {

    //Generating the form on ngOnInit
    this.generateForm();




    // Case 
    switch (this.action) {

      case 'add':
        /* Button text */
        this.btn_text = "SUBMIT";
        break;
      case 'edit':
        /* Button text */
        this.btn_text = "UPDATE";
        this.successMessage = "One row updated!!!";
        this.setDefaultValue(this.defaultData);
        this.header_txt = "Edit Admin Information";
        
        break;
    }
  }



  // =========================================MODAL functions==========================================
  openDialog(x: any): void {
    this.dialogRef = this.dialog.open(Modal, {
      width: '250px',
      data: { msg: x }
    });

    this.dialogRef.afterClosed().subscribe(result => {

    });
  }
  // =====================================================================================================



  // ===================================Setting the default Value========================
  setDefaultValue(defaultValue) {
    this.adminForm.patchValue({
      firstname: defaultValue.firstname,
      lastname: defaultValue.lastname,
      email: defaultValue.email,
      // password: defaultValue.password,
      // confirmpassword: defaultValue.password,
      phone: defaultValue.phone,
      status: this.defaultData.status

    })
  }
  // ======================================================================================







  // ==============GENERATE FORM==================
  generateForm() {
    this.adminForm = this.formBuilder.group({
      firstname: ["", [Validators.required, nameValidator]],
      lastname: ["", [Validators.required, nameValidator]],
      phone: ["", [Validators.required, phoneValidator]],
      email: ["", [Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)]],
      password: ['', Validators.required],
      confirmpassword: ['', matchpwd],
      status: [],
      Type: ['admin']
    });
  }
  // ===============================================





  // ====================SUBMIT FUNCTION+===================
  onSubmit() {

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

      delete this.adminForm.value.confirmpassword;



      /* start process to submited data */
      let postData: any = {
        "source": 'user',
        "data": Object.assign(this.adminForm.value, this.condition),
        "token": this.cookieService.get('jwtToken')

      };

      this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {

        if (response.status == "success") {

          this.openDialog(this.successMessage);
          setTimeout(() => {
            this.dialogRef.close();
          }, 2000);


          this.router.navigateByUrl('admin-management/list');;
        } else {
          alert("Some error occurred. Please try again.");
        }
      }, (error) => {
        alert("Some error occurred. Please try again.");
      });
    }
  }
  // ====================================================================


  inputBlur(val: any) {
    this.adminForm.controls[val].markAsUntouched();
  }
}



// ============================================MODAL COMPONENT===========================================
@Component({
  selector: 'app-modal',
  templateUrl: 'modal.html',
})
export class Modal {

  constructor(
    public dialogRef: MatDialogRef<Modal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
// ======================================================================================================
