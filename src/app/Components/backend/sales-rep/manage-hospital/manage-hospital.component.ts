import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { CookieService } from 'ngx-cookie-service';
import { MatSnackBar } from '@angular/material'
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-hospital',
  templateUrl: './manage-hospital.component.html',
  styleUrls: ['./manage-hospital.component.css']
})
export class ManageHospitalComponent implements OnInit {

  /**  declarations **/
  public manageHospitalForm: FormGroup;
  public states: string;
  public allCities: any;
  public cities: string;
  public userData: any;
  public collect_email_array: any = [];
  public collect_phone_array: any = [];
  public id: any;
  public btn_text: string = "SUBMIT";
  public condition: any;
  public message: string = "Hospital Added!!!";
  public salesrepname: string;
  public ErrCode: boolean;
  public action:string;
  public defaultData:any;

  constructor(public formBuilder: FormBuilder, public http: HttpServiceService,
    public cookieService: CookieService, public snackBar: MatSnackBar, public router: Router,
    public activatedRoute:ActivatedRoute) {
      this.activatedRoute.params.subscribe(params => {
        if (params['_id'] != null) {
          this.action = "edit";
          this.condition = { id: params._id };
          this.activatedRoute.data.subscribe(resolveData => {
            this.defaultData = resolveData.data.res[0];
          });
        }
        else
          this.action = "add";
      });


    /**  getting the sales rep information **/
    let allData: any = {};
    allData = cookieService.getAll()
    this.userData = JSON.parse(allData.user_details);
    this.id = this.userData.id;
    this.salesrepname = this.userData.firstname + ' ' + this.userData.lastname;
    console.log(this.salesrepname);
  }

  ngOnInit() {

    /** generating the form **/
    this.generateForm();


    /** calling all state  **/
    this.allStateCityData();


/** switch case **/
    switch (this.action) {

      case 'add':
        /* Button text */
        this.btn_text = "SUBMIT";
        //Generating the form on ngOnInit
        this.generateForm();     
        break;
      case 'edit':
        /* Button text */
        this.btn_text = "UPDATE";       
        //Generating the form on ngOnInit
        this.generateForm();
        this.setDefaultValue(this.defaultData);
      
        break;
    }

  }



  /** setting the default data **/
  setDefaultValue(defaultValue) {
    console.log(defaultValue);
    this.manageHospitalForm.patchValue({
     hospitalname:defaultValue.hospitalname,
     email:defaultValue.email,

    })
  }

  /** configuration for image **/
  public configData: any = {
    baseUrl: "https://fileupload.influxhostserver.com/",
    endpoint: "uploads",
    size: "51200", // kb
    format: ["jpg", "jpeg", "png"], // use all small font
    type: "med_partner_img",
    path: "files",
    prefix: "medpartner_picture_"
  }



  /** generating the form **/
  generateForm() {
    this.manageHospitalForm = this.formBuilder.group({
      hospitalname: [],
      contactperson: [],
      state: [],
      city: [],
      zip: [],
      speciality: [],
      noofdoctors: [],
      noofbeds: [],
      noofstaffs: [],
      type: ['hospital'],
      contactemails: [],
      contactphones: [],
      salesrepselect: [this.id],
      status: [0],
      email: [],
      salesrepname: [this.salesrepname],
      mpimage: []
    });
  }

  /** for getting all states & cities function start here **/
  allStateCityData() {
    this.http.getSiteSettingData("./assets/data-set/state.json").subscribe(response => {
      this.states = response;
    });

    this.http.getSiteSettingData("./assets/data-set/city.json").subscribe(response => {
      this.allCities = response;
    });
  }

  /** for getting all states & cities  function end here  **/
  getCity(event: any) {
    var val = event;
    this.cities = this.allCities[val];
  }

  /** activating the state operation  **/
  getCityByName(stateName) {
    this.cities = this.allCities[stateName];
  }

  /** collecting the email **/
  collect_email(event: any) {
    if (event.keyCode == 32 || event.keyCode == 13) {
      this.collect_email_array.push(event.target.value);
      this.manageHospitalForm.controls['contactemails'].patchValue("");
      return;
    }
  }

  /** cleraring multiple emails **/
  clearEmail(index) {
    this.collect_email_array.splice(index, 1);
  }

  /** collecting the phone numbers **/
  collect_phones(event: any) {
    if (event.keyCode == 32 || event.keyCode == 13) {
      this.collect_phone_array.push(event.target.value);
      this.manageHospitalForm.controls['contactphones'].patchValue("");
      return;
    }
  }

  /** clearing the phones **/
  clearPhones(index) {
    this.collect_phone_array.splice(index, 1);
  }



  /** --------------------------submit------------------------**/
  onSubmit() {


    //  File Upload Works 
    if (this.configData.files) {

      if (this.configData.files.length > 1) { this.ErrCode = true; return; }
      this.manageHospitalForm.value.mpimage =
        {
          "basepath": this.configData.files[0].upload.data.basepath + '/' + this.configData.path + '/',
          "image": this.configData.files[0].upload.data.data.fileservername,
          "name": this.configData.files[0].name,
          "type": this.configData.files[0].type
        };
    } else {
      this.manageHospitalForm.value.mpimage = false;
    }


    if (this.manageHospitalForm.invalid) {
      return;
    }
    else {

      this.manageHospitalForm.value.contactemails = this.collect_email_array;
      this.manageHospitalForm.value.contactphones = this.collect_phone_array;


      /* start process to submited data */
      let postData: any = {
        "source": 'users',
        "data": Object.assign(this.manageHospitalForm.value, this.condition),
        "token": this.cookieService.get('jwtToken'),
        "sourceobj": ["salesrepselect"]

      };


      this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {
        if (response.status == "success") {


          this.snackBar.open(this.message, 'OK', {
            duration: 1000,
          });



          setTimeout(() => {
            this.router.navigateByUrl('/salesrep/my-hospital');
          }, 3000);

        } else {
          alert("Some error occurred. Please try again.");
        }
      }, (error) => {
        alert("Some error occurred. Please try again.");
      });
    }
  }

}
