import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { CookieService } from 'ngx-cookie-service';
import { MatSnackBar } from '@angular/material'
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { ClipboardService } from 'ngx-clipboard';
import { MetaService } from '@ngx-meta/core';
import { Title } from '@angular/platform-browser';
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
  public message: string;
  public salesrepname: string;
  public ErrCode: boolean;
  public action: string;
  public defaultData: any;
  public myDate: any;
  public date: any;
  public useridval: any = null;
  public sharelink:any;
  constructor(public formBuilder: FormBuilder, public http: HttpServiceService,
    public cookieService: CookieService, public snackBar: MatSnackBar, public router: Router,
    public activatedRoute: ActivatedRoute,public clipboardService:ClipboardService,public readonly meta: MetaService,
    public readonly Title:Title) {

      this.meta.setTitle('MD Stock International - Your Medical Partner');
      this.meta.setTag('og:description', 'MD Stock International is the Medical Equipment & Supplies Partner you want for Top-Quality On-Demand Supplies, Direct-to-Manufacturer Purchases and much more.');
      this.meta.setTag('og:title', 'MD Stock International - Your Medical Partner');
      this.meta.setTag('og:type', 'website');
      this.meta.setTag('og:url', 'https://dev.mdstockinternational.com/');
      this.meta.setTag('og:image', 'https://dev.mdstockinternational.com/assets/images/mdstocklogometa.jpg');
      this.meta.setTag('og:keywords','');
     
      this.meta.setTag('twitter:description', 'MD-stock-international');
      this.meta.setTag('twitter:title', 'MD Stock International is the Medical Equipment & Supplies Partner you want for Top-Quality On-Demand Supplies, Direct-to-Manufacturer Purchases and much more.');
      this.meta.setTag('twitter:card', 'summary');
      this.meta.setTag('twitter:image', 'https://dev.mdstockinternational.com/assets/images/mdstocklogometa.jpg');


    this.activatedRoute.params.subscribe(params => {
      if (params['_id'] != null) {
        this.action = "edit";
        this.condition = { id: params._id };
        this.activatedRoute.data.subscribe(resolveData => {
          console.log(resolveData);
          this.defaultData = resolveData.data.res[0];
          this.date = moment(this.defaultData.created_at).format('MM/DD/YYYY');

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
    this.sharelink='https://dev-hospital-signup.mdstockinternational.com/'+this.userData._id;
    /** fetching the current date **/
    if (this.action == 'add')
      this.date = moment(this.myDate).format('MM/DD/YYYY');
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
        /** generating the current date **/
        this.myDate = new Date();
        this.message = "Hospital Added!!!"



        /** generating the user id **/
        this.http.httpViaPost('userid', undefined).subscribe((response: any) => {
          this.useridval = response.userID;

          //Generating the form on ngOnInit
          this.generateForm();

          setTimeout(() => {
            this.manageHospitalForm.controls['user_id'].disable();
          }, 500);
        });

        break;
      case 'edit':
        /* Button text */
        this.btn_text = "UPDATE";
        this.message = "Hospital Information Updated";


        // this.generateForm();
        this.setDefaultValue(this.defaultData);

        setTimeout(() => {
          this.getCityByName(this.defaultData.state);
        }, 2000);
  
        

        setTimeout(() => {
          this.manageHospitalForm.controls['user_id'].disable();
        }, 500);
        break;
    }

  }



  /** setting the default data **/
  setDefaultValue(defaultValue) {
    this.manageHospitalForm.patchValue({
      user_id: defaultValue.user_id,
      date_added: defaultValue.date_added,
      hospitalname: defaultValue.hospitalname,
      email: defaultValue.email,
      contactperson: defaultValue.contactperson,
      zip: defaultValue.zip,
      city: defaultValue.city,
      state: defaultValue.state
    })
    this.collect_phone_array = this.defaultData.contactemails;
    this.collect_email_array = this.defaultData.contactphones;
  }

  /** configuration for image **/
  public configData: any = {
    baseUrl: "https://fileupload.influxhostserver.com/",
    endpoint: "uploads",
    size: "51200", // kb
    format: ["jpg", "jpeg", "png"], // use all small font
    type: "inventory-file",
    path: "files",
    prefix: "_inventory-file",
    formSubmit: false,
    conversionNeeded: 0,
    bucketName: "crmfiles.influxhostserver"
  }



  /** generating the form **/
  generateForm() {
    this.manageHospitalForm = this.formBuilder.group({
      user_id: [this.useridval],
      date_added: [{ value: this.date, disabled: true }],
      hospitalname: [],
      contactperson: [],
      password: [],
      confirmpassword: [],
      state: [],
      city: [],
      zip: [],
      address: [],
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

    this.manageHospitalForm.value.user_id = this.manageHospitalForm.controls['user_id'].value;
    this.manageHospitalForm.value.date_added = this.manageHospitalForm.controls['date_added'].value;


    if (this.action == 'edit')
      delete this.manageHospitalForm.value.confirmpassword;

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


   /**Copy clipborad function */
   copytoclipboard(){
    this.clipboardService.copyFromContent(this.sharelink);
   this.snackBar.open('Link Copy','', {
      duration: 500
    });
    
  }
}
