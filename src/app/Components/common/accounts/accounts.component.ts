import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  // ==============declaraton=========
  user_data: any;
  addflag:boolean;
  accountForm: FormGroup;
  // ==================================

  constructor(public cookieService: CookieService, private formBuilder: FormBuilder) {

    let allData: any = {};
    allData = cookieService.getAll()
    this.user_data = JSON.parse(allData.user_details);
    console.log("USERDETAILS", this.user_data);
    this.addflag=false;
  }


  ngOnInit() {

    //generating the form
    this.generateForm();


    this.accountForm.patchValue({
      email:this.user_data.email,
      Type:this.user_data.Type
    });
  }


  // =============generate form===========
  generateForm() {
    this.accountForm = this.formBuilder.group({
      email: [],
      Type: [],
    });
  }
  // =====================================


  onSubmit(){
    //this.accountForm.addControl('newcontrol',[""]);
    this.addflag=true;
    this.accountForm.addControl('newControl', new FormControl('', Validators.required));
  }
}
