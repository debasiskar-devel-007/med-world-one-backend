import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {matchpwd,nameValidator,phoneValidator} from './validators'
import { HttpServiceService } from 'src/app/services/http-service.service';
import { from } from 'rxjs';
export interface DialogData {
  msg: string;
}


@Component({
  selector: 'app-add-edit-salesrep',
  templateUrl: './add-edit-salesrep.component.html',
  styleUrls: ['./add-edit-salesrep.component.css']
})
export class AddEditSalesrepComponent implements OnInit {

  // ================Declaration================
  salesRepForm: FormGroup;
  states: any;
  cities: any;
  allCities: any;
  btn_text: any = "SUBMIT";
  condition: any;
  header_txt:any= "Add sales Rep";
  action:any;
  defaultData:any;
  successMessage:any;
  dialogRef:any;
  // =========================================


  constructor(private formBuilder: FormBuilder, private http: HttpServiceService,
    private cookieService: CookieService,private router : Router , 
    private activatedRoute : ActivatedRoute,public dialog: MatDialog) { 
      this.activatedRoute.params.subscribe(params => {
        if (params['_id'] != null) {
          this.action = "edit";
          this.condition = { id: params._id };
          this.activatedRoute.data.subscribe(resolveData => {
            this.defaultData = resolveData.salesRepList.res[0];
          });
        }
        else
          this.action = "add";
      });
    }

  ngOnInit() {
    //generating the form
    this.generateForm();

    //Calling list of states here
    this.allStateCityData();

     // Case 
     switch (this.action) {
      case 'add':
        /* Button text */
        this.btn_text = "SUBMIT";
        break;
      case 'edit':
        /* Button text */
        this.btn_text = "UPDATE";
        this.successMessage = "One row updated";
        this.setDefaultValue(this.defaultData); 
        setTimeout(() => {
          this.getCityByName(this.defaultData.state);
        }, 2000);      
        this.header_txt = "Edit SalesRep Information";
        break;
    }
  }


  // ================generateForm===================
  generateForm() {
    this.salesRepForm = this.formBuilder.group({
      name: ['',[Validators.required,nameValidator]],
      email: ['',[Validators.required,Validators.required,Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)]],
      password: ['',Validators.required],
      confirmpassword: ['',matchpwd],
      state: ['',],
      city: ['',],
      address: ['',[Validators.required]],
      zip: ['',[Validators.required]],
      phone: ['',[Validators.required,phoneValidator]],
      fax: ['',[Validators.required]],
      status: ['',]
    });
  }
// =====================================================




// =========================================MODAL functions==========================================
openDialog(x: any): void {
  this.dialogRef = this.dialog.open(Modal3, {
    width: '250px',
    data: { msg: x }
  });

  this.dialogRef.afterClosed().subscribe(result => {

  });
}
// =====================================================================================================





 // ===================================Setting the default Value========================
 setDefaultValue(defaultValue) {
  console.log(defaultValue);
 this.salesRepForm.patchValue({
   name:defaultValue.name,
   email:defaultValue.email,
   password:defaultValue.password,
   state:defaultValue.state,
   city:defaultValue.city,
   address:defaultValue.address,
   zip:defaultValue.zip,
   phone:defaultValue.phone,
   fax:defaultValue.fax,
   status:defaultValue.status
 })
}
// ======================================================================================

  //Blur function
  inputBlur(val: any) {
    this.salesRepForm.controls[val].markAsUntouched();
  }


  //for getting all states & cities function start here
  allStateCityData() {
    this.http.getSiteSettingData("./assets/data-set/state.json").subscribe(response => {
      this.states = response;
    });

    this.http.getSiteSettingData("./assets/data-set/city.json").subscribe(response => {
      this.allCities = response;
    });
  }

  //for getting all states & cities  function end here
  getCity(event: any) {
    var val = event;
    this.cities = this.allCities[val];
  }

  //activating the state operation
  getCityByName(stateName) {
    this.cities = this.allCities[stateName];
  }

  // ==================SUBMIT===================
  onSubmit() {
    console.log("+++", this.salesRepForm.value);


    if (this.salesRepForm.invalid) {
      return;
    }
    else {

      //status
      if (this.salesRepForm.value.status) {
        this.salesRepForm.value.status = parseInt("1");
      }
      else {
        this.salesRepForm.value.status = parseInt("0");
      }

     

      delete this.salesRepForm.value.confirmpassword;



      /* start process to submited data */
      let postData: any = {
        "source": 'salesrep',
        "data": Object.assign(this.salesRepForm.value, this.condition),
        "token": this.cookieService.get('jwtToken')

      };
      console.log("+++");
      this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {

        if (response.status == "success") {
          console.log(response.status);
          this.openDialog(this.successMessage);
          setTimeout(() => {
            this.dialogRef.close();
          }, 2000);


          this.router.navigateByUrl('admin/salesrep-management/list');;
        } else {
          alert("Some error occurred. Please try again.");
        }
      }, (error) => {
        alert("Some error occurred. Please try again.");
      });
    }
  }
  // ===========================================
}



// ============================================MODAL COMPONENT===========================================
@Component({
  selector: 'app-modal',
  templateUrl: 'modal3.html',
})
export class Modal3 {

  constructor(
    public dialogRef: MatDialogRef<Modal3>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
// ======================================================================================================
