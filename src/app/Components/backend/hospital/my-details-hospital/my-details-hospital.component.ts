
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from '../../../../services/http-service.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-my-details-hospital',
  templateUrl: './my-details-hospital.component.html',
  styleUrls: ['./my-details-hospital.component.css']
})
export class MyDetailsHospitalComponent implements OnInit {

  /** declarations **/
  hospitalAccountForm: FormGroup;
  userData: any;
  role: any;
  id: any;
  condition: any;
  defaultData: any;
  states: any;
  allCities: any;
  cities: any;
  message: string = "Account Details Updated Successfully!!";
  public contactphonesarray: any = [];
  public contactemailarray: any = [];
  basepath: any;
  image: any;
  name: any;
  type: any;
  fullpath: any;


  constructor(private formBuilder: FormBuilder, private cookieService: CookieService,
    private activatedRoute: ActivatedRoute, private http: HttpServiceService,
    private snackBar : MatSnackBar , private router : Router) {

    /*Getting the role*/
    let allData: any = {};
    allData = cookieService.getAll()
    this.userData = JSON.parse(allData.user_details);
    this.role = this.userData.type;
    this.id = this.userData._id;
    
    this.condition = { id: this.id };
  
    /**  generating the form **/
    this.generateForm();
    /**  setting the default value **/
    this.setDefaultValue(this.userData);


   

    this.basepath = this.userData.mpimage.basepath;
    this.image = this.userData.mpimage.image;
    this.name = this.userData.mpimage.name;
    this.type = this.userData.mpimage.type;
    this.fullpath = this.basepath + this.image;
    

    
    this.contactemailarray = this.userData.contactemails;
    this.contactphonesarray = this.userData.contactphones;
    console.log("Data from cookie",this.userData);
  }

  ngOnInit() {

    //getting the cities
    this.allStateCityData();


    //getting the state
    setTimeout(() => {
      this.getCityByName(this.userData.state);
    }, 2000);
  }

  /**  form generation **/
  generateForm() {
    this.hospitalAccountForm = this.formBuilder.group({
      hospitalname: ['',Validators.required],
      email: [{ value: '--', disabled: true }],
      contactperson: ['',Validators.required],
      contactemails: [],
      contactphones: [],
      state: [],
      city: [],
      speciality: ['',Validators.required],
      noofdoctors: ['',Validators.required],
      noofbeds: ['',Validators.required],
      noofstaffs: ['',Validators.required]
    });
  }



  /**  Setting the default value **/
  setDefaultValue(defaultValue) {
  
    this.hospitalAccountForm.patchValue({
      hospitalname: this.userData.hospitalname,
      email: defaultValue.email,
      contactperson: defaultValue.contactperson,
      zip: defaultValue.zip,
      noofdoctors: defaultValue.noofdoctors,
      noofbeds: defaultValue.noofbeds,
      noofstaffs: defaultValue.noofstaffs,
      speciality: defaultValue.speciality,
      state: defaultValue.state,
      city: defaultValue.city,
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

  /** deleting the phones **/
  deletephones(index) {
    this.contactphonesarray.splice(index, 1);
  }

  /** deleting the emails  **/
  deleteemails(index) {
    this.contactemailarray.splice(index, 1);
  }

  /** adding multiple emails **/
  addMultipleEmails(event : any){
    if (event.keyCode == 13) {
      this.contactemailarray.push(event.target.value);
      this.hospitalAccountForm.controls['contactemails'].patchValue("");
      return;
    }
  }

/** adding multiple phones**/
  addMultiplePhones(event:any){
    if (event.keyCode == 13) {
      this.contactphonesarray.push(event.target.value);
      this.hospitalAccountForm.controls['contactphones'].patchValue("");
      return;
    }
  }

   /** blur function**/
   inputBlur(val:any){
     this.hospitalAccountForm.controls[val].markAsUntouched();
   }

   /** cancel function **/
   onCancel(){
     this.router.navigateByUrl('/hospital/my-details');
   }

  /**  submit button function **/
    onUpdate(){
     for (let i in this.hospitalAccountForm.controls)
     {
       this.hospitalAccountForm.controls[i].markAsTouched();
     }

      if (this.hospitalAccountForm.invalid)
       return;
     else {

      /** updating the tags **/
      this.hospitalAccountForm.value.contactemails = this.contactemailarray;
      this.hospitalAccountForm.value.contactphones = this.contactphonesarray;

       let postData: any = {
         'source': 'users',
         'data': Object.assign(this.hospitalAccountForm.value,this.condition),
         'token': this.cookieService.get('jwtToken')
       }
 
       this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {
         if (response.status == 'success') { 
         
           


         

          var userDetailsCookie: any = JSON.parse(this.cookieService.get('user_details'));
          var type: any = userDetailsCookie.type;
          this.cookieService.delete('user_details');
          userDetailsCookie.contactperson = this.hospitalAccountForm.value.contactperson;
          userDetailsCookie.hospitalname = this.hospitalAccountForm.value.hospitalname;
          userDetailsCookie.state = this.hospitalAccountForm.value.state;
          userDetailsCookie.city = this.hospitalAccountForm.value.city;
          userDetailsCookie.speciality = this.hospitalAccountForm.value.speciality;
          userDetailsCookie.noofdoctors = this.hospitalAccountForm.value.noofdoctors;
          userDetailsCookie.noofbeds = this.hospitalAccountForm.value.noofbeds;
          userDetailsCookie.noofstaffs = this.hospitalAccountForm.value.noofstaffs;
          userDetailsCookie.contactemails = this.contactemailarray;
          userDetailsCookie.contactphones = this.contactphonesarray;

          userDetailsCookie = JSON.stringify(userDetailsCookie);
          

          setTimeout(() => {
            this.cookieService.set('user_details', userDetailsCookie);
          }, 1000);
           
           let action: any = "Ok";
           this.snackBar.open(this.message, action, {
             duration: 1000,
           });
 
         
 
           setTimeout(() => {
             console.log("hit");
             this.router.navigateByUrl('hospital/my-details');
           }, 6000);         
         }
         else{
           this.snackBar.open(response.status, "OK", {
             duration: 1500
           });   
         }
 
       });
     }
    }

   
}
