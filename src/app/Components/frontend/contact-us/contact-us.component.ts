import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../../services/http-service.service';
import { FormControl, FormGroup, FormBuilder, Validator, Validators,AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {MatChipInputEvent} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { CookieService } from 'ngx-cookie-service';
import { MetaService } from '@ngx-meta/core';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  public contactLocationActive:any;
  public collect_email_array: any = [];
  public collect_phone_array: any = [];
  public contactusForm: FormGroup;

  constructor(public cookieService:CookieService, public httpClient:HttpClient,public _snackBar: MatSnackBar, public formBuilder: FormBuilder,public httpServiceService: HttpServiceService,public activatedRoute: ActivatedRoute, private readonly meta: MetaService) {

    this.meta.setTitle('MD Stock International - Contact Us');
    this.meta.setTag('og:description', 'At MD Stock International, we are always available to our clients and Partners, aiding them whenever they are in need. Contact Us TODAY and we will be happy to respond to your queries!');
    this.meta.setTag('twitter:description', 'At MD Stock International, we are always available to our clients and Partners, aiding them whenever they are in need. Contact Us TODAY and we will be happy to respond to your queries!');

    this.meta.setTag('og:keyword', 'MD Stock Internation Contact Us, Contact MD Stock International, MD Stock International Contact Info');
    this.meta.setTag('twitter:keyword', 'MD Stock Internation Contact Us, Contact MD Stock International, MD Stock International Contact Info');

    this.meta.setTag('og:title', 'MD Stock International - Contact Us');
    this.meta.setTag('twitter:title', 'MD Stock International - Contact Us');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://dev.mdstockinternational.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://dev.mdstockinternational.com/assets/images/logo.png');



     this.contactusForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['',Validators.required,Validators.email],
      phone: ['',Validators.required],
      address: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      this.contactLocationActive=resolveData.activeContact.res;
      //console.log('contactus frontend',resolveData);
      });
  }


  //keyUp event for email
  collect_email(event: MatChipInputEvent):void{
    const input=event.input;
    const value = event.value;
      this.collect_email_array.push(value);
      if(input){
        input.value='';
      }
  }

  //keyUp event for Phone
  collect_phones(event: MatChipInputEvent) {
    const input=event.input;
    const value = event.value;
      this.collect_phone_array.push(value);
      if(input){
        input.value='';
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

  /**submit function */
  onSubmit() {
    for (let i in this.contactusForm.controls) {
      this.contactusForm.controls[i].markAsTouched();
    }
    this.contactusForm.value.email=this.collect_email_array;
    this.contactusForm.value.phone=this.collect_phone_array;
    console.log(this.contactusForm.value);
    let data: any = {
      "source": "contactus",
      "data": this.contactusForm.value,
    };
    if (this.contactusForm.valid) {
      this.httpServiceService.httpViaPost('addorupdatedata', data).subscribe(res => {
        //console.log(res);
        if (res.status == "success") {
          this._snackBar.open('Message sent successfully', '', {
            duration: 2000,
          });
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
