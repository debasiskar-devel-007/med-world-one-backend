import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup ,FormBuilder , Validators } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-manage-hospital',
  templateUrl: './manage-hospital.component.html',
  styleUrls: ['./manage-hospital.component.css']
})
export class ManageHospitalComponent implements OnInit {

  /**  declarations **/
  manageHospitalForm:FormGroup;
  states:string;
  allCities:any;
  cities:string;
  userData:any;

  constructor( public formBuilder : FormBuilder ,public http : HttpServiceService ,
     public cookieService : CookieService) {
    
    /**  getting the sales rep information **/
    let allData: any = {};
    allData = cookieService.getAll()
    this.userData = JSON.parse(allData.user_details);
    console.log(this.userData);
   }

  ngOnInit() {

    /** generating the form **/
    this.generateForm();


    /** calling all state  **/
    this.allStateCityData();
  }


  generateForm(){
    this.manageHospitalForm = this.formBuilder.group({
      hospital_name:[],
      contact_person:[],
      state:[],
      city:[],
      zip:[],
      speciality:[],
      no_of_docs:[],
      no_of_beds:[],
      no_of_staffs:[],
      type:['hospital'],
      contact_emails:[],
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


}
