import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { DialogBoxComponent } from '../../../common/dialog-box/dialog-box.component';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpServiceService } from 'src/app/services/http-service.service';
export interface DialogData {
  msg: string;
}


@Component({
  selector: 'app-add-edit-medicalpartners',
  templateUrl: './add-edit-medicalpartners.component.html',
  styleUrls: ['./add-edit-medicalpartners.component.css']
})
export class AddEditMedicalpartnersComponent implements OnInit {

  // =====================Declarations==================
  btn_text: any = "SUBMIT";
  medicalPartnerForm: FormGroup;
  condition: any;
  action: any = "add"
  defaultData: any;
  successMessage: any = "Submitted Successfully!!!";
  dialogRef: any;
  header_txt: any = "Add a Medical Partner"
  collect_email_array: any = [];
  collect_phone_array: any = [];
  ErrCode: boolean;
  states: any;
  cities: any;
  allCities: any;
  fullImgPath: any;
  imgName: any;
  imgtype: any;
  img_flag: boolean = false;
  flag: boolean = false;
  linkTo: any;
  user_data: any;
  role: any;
  salesNameArray:any=[];
  // ===================================================



  //  =====================Image Upload Configuration====================
  public configData: any = {
    baseUrl: "https://fileupload.influxhostserver.com/",
    endpoint: "uploads",
    size: "51200", // kb
    format: ["jpg", "jpeg", "png"], // use all small font
    type: "med_partner_img",
    path: "files",
    prefix: "medpartner_picture_"
  }

  //  ====================================================================



  constructor(private formBuilder: FormBuilder, private cookieService: CookieService,
    public http: HttpServiceService, public router: Router, private activatedRoute: ActivatedRoute,
    public dialog: MatDialog) {
    this.activatedRoute.params.subscribe(params => {
      if (params['_id'] != null) {
        this.action = "edit";
        this.condition = { id: params._id };
        this.activatedRoute.data.subscribe(resolveData => {
          this.defaultData = resolveData.mpList.res[0];
          console.log(this.defaultData);
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
    //generating the form here
    this.generateForm();

    //Calling list of states here
    this.allStateCityData();

    //getting all sales names
    this.getSalesName();


    // Case 
    switch (this.action) {
      case 'add':
        /* Button text */
        this.btn_text = "SUBMIT";
        this.linkTo = "/admin/medicalpartners-management/list"
        break;
      case 'edit':
        /* Button text */
        this.btn_text = "UPDATE";
        this.flag = true;
        this.successMessage = "One row updated!!!";
        this.setDefaultValue(this.defaultData);
        setTimeout(() => {
          this.getCityByName(this.defaultData.state);
        }, 2000);
        this.header_txt = "Edit Medical Partner's Information"
        this.img_flag = true;
        if (this.role == 'admin')
          this.linkTo = "/admin/medicalpartners-management/list";
        else
          this.linkTo = "/dashboard-admin";
        break;
    }
  }



  // =========================================MODAL functions==========================================
  openDialog(x: any): void {
    this.dialogRef = this.dialog.open(Modal2, {
      width: '250px',
      data: { msg: x }
    });

    this.dialogRef.afterClosed().subscribe(result => {

    });
  }
  // =====================================================================================================



  // =========================Form Generations==============
  generateForm() {
    this.medicalPartnerForm = this.formBuilder.group({
      hospitalname: [],
      salesrepselect:[],
      contactperson: [],
      email: [],
      contactemails: [],
      contactphones: [],
      password: [],
      confirmpassword: [],
      address: [],
      state: [],
      city: [],
      zip: [],
      speciality: [],
      noofdoctors: [],
      noofbeds: [],
      noofstaffs: [],
      status: [],
      mpimage: [],
      type: ['hospital'],
    });
  }
  //  ===========================================================



  // ===================================Setting the default Value========================
  setDefaultValue(defaultValue) {
    
    this.medicalPartnerForm.patchValue({
      hospitalname: defaultValue.hospitalname,
      salesrepselect: defaultValue.salesrepselect,
      contactperson: defaultValue.contactperson,
      email: defaultValue.email,
      password: defaultValue.password,
      address: defaultValue.address,
      zip: defaultValue.zip,
      speciality: defaultValue.speciality,
      state: defaultValue.state,
      city: defaultValue.city,
      noofdoctors: defaultValue.noofdoctors,
      noofbeds: defaultValue.noofbeds,
      noofstaffs: defaultValue.noofstaffs,
      status: defaultValue.status,
      mpimage: defaultValue.mpimage
    })
    this.collect_email_array = defaultValue.contactemails;
    this.collect_phone_array = defaultValue.contactphones;

    this.fullImgPath = defaultValue.mpimage.basepath + defaultValue.mpimage.image;
    this.imgName = defaultValue.mpimage.name;
    this.imgtype = defaultValue.mpimage.type;
  }
  // ======================================================================================




  //collecting mass emails
  collect_email(event: any) {
    if (event.keyCode == 32) {
      this.collect_email_array.push(event.target.value);
      this.medicalPartnerForm.controls['contactemails'].patchValue("");
      return;
    }
  }

  //collecting mass phones
  collect_phones(event: any) {
    if (event.keyCode == 32) {
      this.collect_phone_array.push(event.target.value);
      this.medicalPartnerForm.controls['contactphones'].patchValue("");
      return;
    }
  }

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

    //  File Upload Works 
    if (this.configData.files) {

      if (this.configData.files.length > 1) { this.ErrCode = true; return; }
      this.medicalPartnerForm.value.mpimage =
        {
          "basepath": this.configData.files[0].upload.data.basepath + '/' + this.configData.path + '/',
          "image": this.configData.files[0].upload.data.data.fileservername,
          "name": this.configData.files[0].name,
          "type": this.configData.files[0].type
        };
    } else {
      this.medicalPartnerForm.value.mpimage = false;
    }


    if (this.medicalPartnerForm.invalid) {
      return;
    }
    else {

      //status
      if (this.medicalPartnerForm.value.status) {
        this.medicalPartnerForm.value.status = parseInt("1");
      }
      else {
        this.medicalPartnerForm.value.status = parseInt("0");
      }

      this.medicalPartnerForm.value.contactemails = this.collect_email_array;
      this.medicalPartnerForm.value.contactphones = this.collect_phone_array;

      delete this.medicalPartnerForm.value.confirmpassword;



      /* start process to submited data */
      let postData: any = {
        "source": 'users',
        "data": Object.assign(this.medicalPartnerForm.value, this.condition),
        "token": this.cookieService.get('jwtToken'),
        "sourceobj":["salesrepselect"]

      };

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
          alert("Some error occurred. Please try again.");
        }
      }, (error) => {
        alert("Some error occurred. Please try again.");
      });
    }
  }
  // ====================================================================

  //Blur function
  inputBlur(val: any) {
    this.medicalPartnerForm.controls[val].markAsUntouched();
  }
  //delete mass email
  clearEmail(index) {
    this.collect_email_array.splice(index, 1);
  }
  //delete mass phone
  clearPhones(index) {
    this.collect_phone_array.splice(index, 1);
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

  //clearing the image
  clear_image() {
    this.img_flag = false;
  }

  /*getting sales rep*/
  getSalesName() {
    var data: any;
    data = {
      'source': 'users_view',
      'token':this.cookieService.get('jwtToken'),
      'condition': { 'type': 'salesrep' }
    }

    this.http.httpViaPost('datalist',data).subscribe(response=>{
       this.salesNameArray = response.res;
      console.log("sales response",response.res);
    });
    console.log("sales name",this.salesNameArray);
  }

}




// ============================================MODAL COMPONENT===========================================
@Component({
  selector: 'app-modal',
  templateUrl: 'modal2.html',
})
export class Modal2 {

  constructor(
    public dialogRef: MatDialogRef<Modal2>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
// ======================================================================================================
