import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

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

  constructor(private cookieService: CookieService, private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) {

    /*Getting the role*/
    let allData: any = {};
    allData = cookieService.getAll()
    this.userData = JSON.parse(allData.user_details);
    this.role = this.userData.Type;
    this.id = this.userData._id;
    console.log("Data from cookie", this.userData);




    if (this.id != null)
      this.condition = { id: this.id };
    this.activatedRoute.data.subscribe(resolveData => {
      this.defaultData = resolveData.data.res[0];
      console.log("+++", this.defaultData);
      this.setDefaultValue(this.defaultData);
    });


  }

  ngOnInit() {
    //calling the form generation
    this.generateForm();

  }


  /* Form Generation */
  generateForm() {
    this.salesRepForm = this.formBuilder.group({
      firstname: [],
      lastname: [],
      email: [],
      city: [],
      state: [],
      zip: [],
      date: []
    });

  }

  setDefaultValue(defaultValue) {
    console.log("default Value",defaultValue);
    this.salesRepForm.patchValue({
      // firstname: defaultValue.firstname,
      // lastname: defaultValue.lastname,
      // email: defaultValue.email,
      // city: defaultValue.city,
      // state: defaultValue.state,
      // zip: defaultValue.zip,
      // date: defaultValue.date
    });
  }
}
