import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { DialogBoxComponent } from '../../../common/dialog-box/dialog-box.component';
import { Router, ActivatedRoute } from '@angular/router';
import { matchpwd, nameValidator, phoneValidator } from '../../../common/validators'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpServiceService } from 'src/app/services/http-service.service';
import * as moment from 'moment';

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
  public btn_text: any = "SUBMIT";
  public adminForm: FormGroup;
  public condition: any;
  public action: any = "add"
  public defaultData: any;
  public successMessage: any = "Submitted Successfully!!!";
  public dialogRef: any;
  public header_txt: any = "Add an admin"
  public flag: boolean = false;
  public user_data: any;
  public role: any;
  public allCities: any;
  public cities: any;
  public states: any;
  public date: any;
  public myDate: any;
  public domainUrl: any = "{'domainUrl':'https://dev.mdstockinternational.com/reset-password'}";
  // ==========================================================


  constructor(private formBuilder: FormBuilder, public cookieService: CookieService,
    public http: HttpServiceService, private router: Router, public activatedRoute: ActivatedRoute,
    public dialog: MatDialog) {





    this.activatedRoute.params.subscribe(params => {
      if (params['_id'] != null) {
        this.action = "edit";
        this.condition = { id: params._id };
        this.activatedRoute.data.subscribe(resolveData => {
          this.defaultData = resolveData.adminList.res[0];
          this.date = moment(this.defaultData.created_at).format('MM/DD/YYYY');
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

    if (this.action == 'add')
      this.date = moment(this.myDate).format('MM/DD/YYYY');
  }






  ngOnInit() {

    /** getting all states **/
    this.allStateCityData();

    // Case 
    switch (this.action) {
      case 'add':
        /* Button text */
        this.btn_text = "SUBMIT";

        /** generating the current date  **/
        this.myDate = new Date();

        /** generating the user id **/
        this.http.httpViaPost('userid', undefined).subscribe((response: any) => {
          this.adminForm.patchValue({ user_id: response.userID });
        });

        //Generating the form on ngOnInit
        this.generateForm();

        setTimeout(() => {
          //getting the cities
          this.allStateCityData();
        }, 300);


        break;
      case 'edit':
        /* Button text */
        this.btn_text = "UPDATE";


        /** getting the state  **/
        setTimeout(() => {
          this.getCityByName(this.defaultData.state);
        }, 300);

        /** generating the form **/
        this.generateForm();
        this.successMessage = "Admin Record Updated!!!";
        this.setDefaultValue(this.defaultData);
        this.header_txt = "Edit Admin Information";
        this.flag = true;


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
      user_id: defaultValue.user_id,
      firstname: defaultValue.firstname,
      lastname: defaultValue.lastname,
      email: defaultValue.email,
      password: defaultValue.password,
      phone: defaultValue.phone,
      address: defaultValue.address,
      state: defaultValue.state,
      city: defaultValue.city,
      zip: defaultValue.zip,
      status: defaultValue.status
    })

  }
  // ======================================================================================







  // ==============GENERATE FORM==================
  generateForm() {
    this.adminForm = this.formBuilder.group({
      user_id: [{ value: "", disabled: true }],
      date_added: [{ value: this.date, disabled: true }],
      firstname: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      phone: ["", [Validators.required, phoneValidator]],
      email: ["", [Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)]],
      password: ['', Validators.required],
      confirmpassword: [''],
      address: [],
      state: [],
      city: [],
      zip: [],
      status: [1],
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

  /**for getting all states & cities function start here**/
  allStateCityData() {
    this.http.getSiteSettingData("./assets/data-set/state.json").subscribe(response => {
      this.states = response;
    });

    this.http.getSiteSettingData("./assets/data-set/city.json").subscribe(response => {
      this.allCities = response;
    });
  }

  /**for getting all states & cities  function end here**/
  getCity(event) {
    var val = event;
    this.cities = this.allCities[val];
  }

  /** For edit city state purpose **/
  getCityByName(stateName) {
    this.cities = this.allCities[stateName];
  }
  // ====================SUBMIT FUNCTION+===================
  onSubmit() {

    console.log(this.adminForm.value);


    if (this.adminForm.invalid) {
      return;
    }
    else {

      //status
      console.log("++++++++++++", this.adminForm.value.status);
      if (this.adminForm.value.status == true)
        this.adminForm.value.status = parseInt("1");
      else
        this.adminForm.value.status = parseInt("0");

      console.log(this.adminForm.value);


      delete this.adminForm.value.confirmpassword;

      /* start process to submited data */
      let postData: any = {
        "source": 'users',
        "data": Object.assign(this.adminForm.value, this.condition),
        "token": this.cookieService.get('jwtToken')
      };


      /**delete password when id not null */
      if (postData.data.id) {
        delete postData.data.password;
      }

      this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {
        if (response.status == "success") {
          this.openDialog(this.successMessage);
          setTimeout(() => {
            this.dialogRef.close();
          }, 2000);
          this.router.navigateByUrl('/admin-management/list');
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
