import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../../services/http-service.service';
import { FormControl, FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  public contactLocationActive:any;
  public collect_email_array: any = [];
  public collect_phone_array: any = [];
  public contactusForm: FormGroup;
  constructor(public httpClient:HttpClient,public _snackBar: MatSnackBar, public formBuilder: FormBuilder,public httpServiceService: HttpServiceService,public activatedRoute: ActivatedRoute) {

     this.contactusForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: [''],
      phone: [''],
      address: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      this.contactLocationActive=resolveData.activeContact.res;
        // console.log(resolveData.activeContact.res);
      });
  }
  collect_email(event: any) {
    if (event.keyCode == 32) {
      this.collect_email_array.push(event.target.value);
      this.contactusForm.controls['email'].patchValue("");
      return;
    }
  }

  //collecting mass phones
  collect_phones(event: any) {
    if (event.keyCode == 32) {
      this.collect_phone_array.push(event.target.value);
      this.contactusForm.controls['phone'].patchValue("");
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
