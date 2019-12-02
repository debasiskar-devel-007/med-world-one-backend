import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { CookieService } from 'ngx-cookie-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-addcontactinfo',
  templateUrl: './addcontactinfo.component.html',
  styleUrls: ['./addcontactinfo.component.css']
})
export class AddcontactinfoComponent implements OnInit {
  contactInfo:FormGroup;
public states:any;
public allCities:any;
public adminid:any;
public collect_email_array: any = [];
public collect_phone_array: any = [];
  constructor(public router:Router,public formBuilder: FormBuilder, public http: HttpServiceService,public cookieService: CookieService,public _snackBar: MatSnackBar) {
    
       /*Getting the role*/
       let allData: any = {};
       allData = cookieService.getAll()
       let user_data = JSON.parse(allData.user_details);
      this.adminid={admin_id:user_data._id}
      //console.log(this.adminid);

    this.allStateCityData();

    /**genarate form contactInfo */
    this.contactInfo=this.formBuilder.group({
      name:['',Validators.required],
      address:['',Validators.required],
      email:[],
      state:['',Validators.required],
      city:['',Validators.required],
      contactperson:['',Validators.required],
      zip:['',Validators.required],
      phone:[],
      status:0
    })

   }


  ngOnInit() {
  }

   //for getting all states & cities function start here
   allStateCityData() {
    this.http.getSiteSettingData("./assets/data-set/state.json").subscribe(response => {
      this.states = response;
     // console.log(this.states);
    });

    this.http.getSiteSettingData("./assets/data-set/usa-cities.json").subscribe(response => {
      this.allCities = response;
      //console.log(this.allCities);
    });
  }


  collect_email(event: any) {
    if (event.keyCode == 32) {
      this.collect_email_array.push(event.target.value);
      this.contactInfo.controls['email'].patchValue("");
      return;
    }
  }

  //collecting mass phones
  collect_phones(event: any) {
    if (event.keyCode == 32) {
      this.collect_phone_array.push(event.target.value);
      this.contactInfo.controls['phone'].patchValue("");
      return;
    }
  }

  //delete mass email
  clearEmail(index) {
    this.collect_email_array.splice(index, 1);
  }
  //delete mass phone
  clearPhones(index) {
    this.collect_phone_array.splice(index, 1);
  }



  /**Submit function */
  onSubmit(){
  for (let i in this.contactInfo.controls) {
    this.contactInfo.controls[i].markAsTouched();
  }
  this.contactInfo.value.email=this.collect_email_array;
  this.contactInfo.value.phone=this.collect_phone_array;

  if(this.contactInfo.valid){
  /* start process to submited data */
  let postData: any = {
    "source":"contactus",
    "data": Object.assign(this.contactInfo.value,this.adminid),
    "token": this.cookieService.get('jwtToken'),
    "sourceobj": ["admin_id"],
  };
  // console.log(this.contactInfo.value);
  // console.log(postData);
  this.http.httpViaPost('addorupdatedata', postData).subscribe(res => {
    //console.log(res);
    if (res.status == "success") {
      this._snackBar.open('Contact Info add successfully', '', {
        duration: 2000,
      });

      this.contactInfo.reset();
      this.router.navigateByUrl('admin-dashboard/contact');
      
    }
  })
  }
}

/**blur function */
  inputUntouch(form: any, val: any) {
    //console.log('on blur .....');
    form.controls[val].markAsUntouched();
  }
}
