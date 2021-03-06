import { Component, OnInit,Inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpServiceService } from '../../../services/http-service.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { matchpwd, nameValidator, phoneValidator } from '../../common/validators';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router} from '@angular/router';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {
public adminData;
public adminForm:FormGroup;
public allCities: any;
public cities: any;
public states: any;
public condition:any;
  constructor(public cookieService:CookieService,public http:HttpServiceService,public formBuilder:FormBuilder,
    public _snackBar: MatSnackBar,public router:Router, private readonly meta: MetaService) { 

    let allData: any = {};
    allData = cookieService.getAll()
    this.adminData = JSON.parse(allData.user_details);
    //console.log(this.adminData);
    this.condition = { id:this.adminData.id};
    this.genarateForm();


    this.meta.setTitle('MedWorldOne - admin details');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'MedWorldOne -  admin details');
    this.meta.setTag('twitter:title', 'MedWorldOne -  admin details');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-fb.png');
    this.meta.setTag('twitter:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-twitter.png');


  }

  

  ngOnInit() {
    //getting the cities
    this.allStateCityData();
    this.setAdminValue(this.adminData);
  }

  /**genarate edit form */
  genarateForm(){
    this.adminForm = this.formBuilder.group({
      user_id: [],
      firstname: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      phone: ["", [Validators.required, phoneValidator]],
      email: ["", [Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)]],      
      address: [],
      state: [],
      city: [],
      zip: [],
      type: ['admin']
    });
  }


  setAdminValue(value:any){
    this.adminForm.patchValue({
      firstname: value.firstname,
      lastname: value.lastname,
      email: value.email,
      phone: value.phone,
      address: value.address,
      state: value.state,
      city: value.city,
      zip: value.zip,
    })
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


    onSubmit(){
      for (let i in this.adminForm.controls) {
        this.adminForm.controls[i].markAsTouched();
      }
      if(this.adminForm.valid){
      /* start process to submited data */
      let postData: any = {
        "source": 'users',
        "data": Object.assign(this.adminForm.value, this.condition),
        "token": this.cookieService.get('jwtToken')

      };
      this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {
        if (response.status == "success") {
            this._snackBar.open('Update Successfully', '', {
              duration: 2000,
            });
            this.router.navigateByUrl('/admin-management/list');
        }
      })
    }
    }

/**blur function */
  inputBlur(val: any) {
    this.adminForm.controls[val].markAsUntouched();
  }
}
