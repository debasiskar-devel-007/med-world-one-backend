
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpServiceService } from '../../../../services/http-service.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {


  /*Declarations*/
  userData: any;
  role: any;
  id: any;
  condition: any;
  defaultData: any;
  salesRepForm: FormGroup;
  states: any;
  allCities: any;
  cities: any;
  message: string = "Account Details Updated Successfully!!";
  

  constructor(private cookieService: CookieService, private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder, public http: HttpServiceService , private snackBar : MatSnackBar,
    public router : Router) {

    /*Getting the role*/
    let allData: any = {};
    allData = cookieService.getAll()
    this.userData = JSON.parse(allData.user_details);
    this.role = this.userData.type;
    this.id = this.userData._id;
    
    this.condition = { id:this.id };
    



    //calling the form generation
    this.generateForm();
    if (this.id != null) {
      this.condition = { id: this.id };
      this.activatedRoute.data.subscribe(resolveData => {
        this.defaultData = resolveData.data.res[0];
        this.setDefaultValue(this.defaultData);
      });
    }


  }

  ngOnInit() {

    //getting the cities
    this.allStateCityData();


    //getting the state
    setTimeout(() => {
      this.getCityByName(this.userData.state);
    }, 2000);
  }


  /* Form Generation */
  generateForm() {
    this.salesRepForm = this.formBuilder.group({
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      email: [{ value: '--', disabled: true }],
      city: [],
      state: [],
      zip: ['',Validators.required],
      date: [{ value: '--', disabled: true }]
    });
  }


  /**  Setting the default value **/
  setDefaultValue(defaultValue) {
    this.salesRepForm.patchValue({
      firstname: defaultValue.firstname,
      lastname: defaultValue.lastname,
      email: defaultValue.email,
      city: defaultValue.city,
      state: defaultValue.state,
      zip: defaultValue.zip,
      date: defaultValue.date
    });
  }


  /** Submit function goes here **/
  onSubmit() {
    
     if (this.salesRepForm.invalid)
       return;
     else {
 
       let postData: any = {
         'source': 'users',
         'data': Object.assign(this.salesRepForm.value,this.condition),
         'token': this.cookieService.get('jwtToken')
       }
 
       this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {
         if (response.status == 'success') { 
         
      
           let action: any = "Ok";
           this.snackBar.open(this.message, action, {
             duration: 1000,
           });
 
          
 
           setTimeout(() => {
             this.router.navigateByUrl('/salesrep/my-details');
           }, 3000);         
         }
         else{
           this.snackBar.open(response.status, "OK", {
             duration: 1500
           });   
         }
 
       });
     }
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
