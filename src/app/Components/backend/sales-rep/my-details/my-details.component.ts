import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpServiceService } from '../../../../services/http-service.service';
import { MatSnackBar } from '@angular/material';
import { zip } from 'rxjs';
import { ClipboardService } from 'ngx-clipboard';

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
  sharelink:any;


  constructor(private cookieService: CookieService, private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder, public http: HttpServiceService, private snackBar: MatSnackBar,
    public router: Router,public clipboardService:ClipboardService) {

    /*Getting the role*/
    let allData: any = {};
    allData = cookieService.getAll()
    this.userData = JSON.parse(allData.user_details);
    this.role = this.userData.type;
    this.id = this.userData._id;
    this.sharelink='https://dev-hospital-signup.mdstockinternational.com/'+this.id;
    this.condition = { id: this.id };

    /**  generating the form **/
    this.generateForm();
    /**  setting the default value **/
    this.setDefaultValue(this.userData);

    console.log("ALL", this.userData);



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
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: [{ value: '--', disabled: true }],
      city: [],
      state: [],
      zip: ['', Validators.required],
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
  onUpdate() {
    for (let i in this.salesRepForm.controls) {
      this.salesRepForm.controls[i].markAsTouched();
    }

    if (this.salesRepForm.invalid)
      return;
    else {

      let postData: any = {
        'source': 'users',
        'data': Object.assign(this.salesRepForm.value, this.condition),
        'token': this.cookieService.get('jwtToken')
      }

      this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {
        if (response.status == 'success') {

          var userDetailsCookie: any = JSON.parse(this.cookieService.get('user_details'));
          var type: any = userDetailsCookie.type;
          this.cookieService.delete('user_details');

          /**  setting the required fields **/
          userDetailsCookie.firstname = this.salesRepForm.value.firstname;
          userDetailsCookie.lastname = this.salesRepForm.value.lastname;
          userDetailsCookie.state = this.salesRepForm.value.state;
          userDetailsCookie.city = this.salesRepForm.value.city;
          userDetailsCookie.zip = this.salesRepForm.value.zip;

          setTimeout(() => {
            this.cookieService.set('user_details', userDetailsCookie);
          }, 1000);


          userDetailsCookie = JSON.stringify(userDetailsCookie);
          let action: any = "Ok";
          this.snackBar.open(this.message, action, {
            duration: 1000,
          });



          setTimeout(() => {
            this.router.navigateByUrl('/salesrep/my-details');
          }, 3000);
        }
        else {
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

  /** blur function**/
  inputBlur(val: any) {
    this.salesRepForm.controls[val].markAsUntouched();
  }

  /** */
  copytoclipboard(){
    this.clipboardService.copyFromContent(this.sharelink);
   this.snackBar.open('Link Copy','', {
      duration: 500
    });
    
  }
}
