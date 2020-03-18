import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { CookieService } from 'ngx-cookie-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { MetaService } from '@ngx-meta/core';
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
  constructor(public router:Router,public activatedRoute:ActivatedRoute,public formBuilder: FormBuilder, public http: HttpServiceService,public cookieService: CookieService,public _snackBar: MatSnackBar, private readonly meta:MetaService) {
    this.activatedRoute.params.subscribe(params => {
      if (params['_id'] != null) {
       
        this.activatedRoute.data.subscribe((resolveData:any) => {
          setTimeout(()=>{    //<<<---    using ()=> syntax
            this.setDefaultValue(resolveData.contactInfo.res[0]);
       }, 3000);
            
        });
      }
    });
       /*Getting the role*/
       let allData: any = {};
       allData = cookieService.getAll()
       let user_data = JSON.parse(allData.user_details);
      this.adminid={admin_id:user_data._id}
      

    this.allStateCityData();

    /**genarate form contactInfo */
    this.contactInfo=this.formBuilder.group({
      id:[null],
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


    this.meta.setTitle('MedWorldOne - Add Contact Info');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'MedWorldOne - Add Contact Info');
    this.meta.setTag('twitter:title', 'MedWorldOne - Add Contact Info');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-fb.png');
    this.meta.setTag('twitter:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-twitter.png');



   }


  ngOnInit() {

  }


  setDefaultValue(defaultValue:any) {
    // console.log('setDefaultValue',defaultValue);
    this.contactInfo.patchValue({
      id:defaultValue._id,
      name: defaultValue.name,
      address:defaultValue.address,
      state:defaultValue.state,
      city:defaultValue.city,
      contactperson:defaultValue.contactperson,
      zip:defaultValue.zip
    });
    for(let i in defaultValue.email){
      this.collect_emaill(defaultValue.email[i]);
    }
    for(let i in defaultValue.phone){
      this.collect_phoness(defaultValue.phone[i]);
    }

  }
   //for getting all states & cities function start here
   allStateCityData() {
    this.http.getSiteSettingData("./assets/data-set/state.json").subscribe(response => {
      this.states = response;
    });

    this.http.getSiteSettingData("./assets/data-set/usa-cities.json").subscribe(response => {
      this.allCities = response;
    });
  }


  collect_email(event: any) {
    if (event.keyCode == 32) {
      this.collect_email_array.push(event.target.value);
      this.contactInfo.controls['email'].patchValue("");
      return;
    }
  }
  collect_emaill(event: any) {
   
      this.collect_email_array.push(event);
      this.contactInfo.controls['email'].patchValue("");
      return;
   
  }

  //collecting mass phones
  collect_phones(event: any) {
    if (event.keyCode == 32) {
      this.collect_phone_array.push(event.target.value);
      this.contactInfo.controls['phone'].patchValue("");
      return;
    }
  }

  collect_phoness(event: any) {
   
      this.collect_phone_array.push(event);
      this.contactInfo.controls['phone'].patchValue("");
      return;
    
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
  if(this.contactInfo.value.id==null){
    delete this.contactInfo.value.id;
    var postData: any = {
      "source":"contactus",
      "data": Object.assign(this.contactInfo.value,this.adminid),
      "token": this.cookieService.get('jwtToken'),
      "sourceobj": ["admin_id"],
    };
  }else{
    var postData: any = {
      "source":"contactus",
      "data": Object.assign(this.contactInfo.value,this.adminid),
      "token": this.cookieService.get('jwtToken'),
      "sourceobj": ["admin_id"],
    };
  }
  
//  console.log(postData);

  this.http.httpViaPost('addorupdatedata', postData).subscribe(res => {

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
    form.controls[val].markAsUntouched();
  }
}
