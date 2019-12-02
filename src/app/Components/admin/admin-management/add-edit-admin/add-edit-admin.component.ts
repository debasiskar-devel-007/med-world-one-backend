import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { DialogBoxComponent } from '../../../common/dialog-box/dialog-box.component';
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
  flag: boolean = false;
  linkTo: any;
  user_data: any;
  role: any;
  // ==========================================================


  constructor(private formBuilder: FormBuilder, public cookieService: CookieService,
    private http: HttpServiceService, private router: Router, public activatedRoute: ActivatedRoute,
    public dialog: MatDialog) {
    this.activatedRoute.params.subscribe(params => {
      if (params['_id'] != null) {
        this.action = "edit";
        this.condition = { id: params._id };
        this.activatedRoute.data.subscribe(resolveData => {
          this.defaultData = resolveData.adminList.res[0];
        });
      }
      else
        this.action = "add";
    });

    /*Getting the role*/
    let allData: any = {};
    allData = cookieService.getAll()
    this.user_data = JSON.parse(allData.user_details);
    this.role = this.user_data.type;
  }






  ngOnInit() {







    // Case 
    switch (this.action) {

      case 'add':
        /* Button text */
        this.btn_text = "SUBMIT";
        //Generating the form on ngOnInit
        this.generateForm();
        this.linkTo = "/admin-management/list";
        break;
      case 'edit':
        /* Button text */
        this.btn_text = "UPDATE";
        this.successMessage = "One row updated!!!";
        //Generating the form on ngOnInit
        this.generateForm();
        this.setDefaultValue(this.defaultData);
        this.header_txt = "Edit Admin Information";
        this.flag = true;
        if (this.role == 'admin')
          this.linkTo = "/dashboard-admin";
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
      password: defaultValue.password,
      phone: defaultValue.phone,
      status: defaultValue.status

    })
  }
  // ======================================================================================







  // ==============GENERATE FORM==================
  generateForm() {
    this.adminForm = this.formBuilder.group({
      firstname: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      phone: ["", [Validators.required, phoneValidator]],
      email: ["", [Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)]],
      password: ['', Validators.required],
      confirmpassword: [''],
      status: [],
      type: ['admin']
    });
  }
  // ===============================================



  change_password() {
    let data: any = {
      width: '250px',
      data: {
        header: "Change Password",
        message: "Record Saved Successfully",
        id: this.condition,
        button1: { text: "Cancel" },
        button2: { text: "Submit" },
      }
    }
    this.penDialog(data);

  }

  penDialog(data) {
    this.dialogRef = this.dialog.open(DialogBoxComponent, data);
    this.dialogRef.afterClosed().subscribe(result => {
      switch (result) {
        case "Cancel":

          break;
        case "Add Next":
          location.reload();
          break;
      }
    });
  }


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
        "source": 'users',
        "data": Object.assign(this.adminForm.value, this.condition),
        "token": this.cookieService.get('jwtToken')

      };
      
      /**delete password when id not null */
      if(postData.data.id){
          //console.log("with ID");
          delete postData.data.password;
        }else{
          //console.log("withOut ID");
        }
          //console.log(postData);

      this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {
        if (response.status == "success") {
          this.openDialog(this.successMessage);
          setTimeout(() => {
            this.dialogRef.close();
          }, 2000);
          this.router.navigateByUrl(this.linkTo);
        } else {
          // alert("Some error occurred. Please try again.");
        }
      }, (error) => {
        // alert("Some error occurred. Please try again.");
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
