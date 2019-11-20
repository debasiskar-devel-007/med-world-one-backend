import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';
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
  contactphonesarray:any=[];
  contactemailarray:any = [];
  basepath:any;
  image:any;
  name:any;
  type:any;
  fullpath:any;


  constructor(private formBuilder: FormBuilder, private cookieService: CookieService,
    private activatedRoute: ActivatedRoute, private http: HttpServiceService) {

    /*Getting the role*/
    let allData: any = {};
    allData = cookieService.getAll()
    this.userData = JSON.parse(allData.user_details);
    this.role = this.userData.type;
    this.id = this.userData._id;
    console.log("id->", this.id);
    this.condition = { id: this.id };
    console.log("Data from cookie", this.userData);
    /**  generating the form **/
    this.generateForm();
    /**  setting the default value **/
    this.setDefaultValue(this.userData);

    this.contactemailarray = this.userData.contactemails;
    console.log("contactemails",this.contactemailarray);
    this.contactphonesarray = this.userData.contactphones;
    this.basepath = this.userData.mpimage.basepath;
    this.image = this.userData.mpimage.image;
    this.name = this.userData.mpimage.name;
    this.type = this.userData.mpimage.type;
    this.fullpath = this.basepath+this.image;
    console.log("FULL PATH",this.fullpath);




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
      hospitalname: [],
      email: [{ value: '--', disabled: true }],
      contactperson: [],
      contactemails: [],
      contactphones: [],
      state: [],
      city: [],
      zip: [],
      speciality: [],
      noofdoctors: [],
      noofbeds: [],
      noofstaffs: []

    });
  }



  /**  Setting the default value **/
  setDefaultValue(defaultValue) {
    console.log("default Value", defaultValue);
    this.hospitalAccountForm.patchValue({
      hospitalname: this.userData.hospitalname,
      email: defaultValue.email,
      contactperson: defaultValue.contactperson,
      zip: defaultValue.zip,
      noofdoctors: defaultValue.noofdoctors,
      noofbeds: defaultValue.noofbeds,
      noofstaffs: defaultValue.noofstaffs,
      speciality: defaultValue.speciality,
      state:defaultValue.state,
      city:defaultValue.city
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


}
