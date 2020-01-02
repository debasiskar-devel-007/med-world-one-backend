import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpServiceService } from 'src/app/services/http-service.service';
@Component({
  selector: 'app-adminpackage',
  templateUrl: './adminpackage.component.html',
  styleUrls: ['./adminpackage.component.css']
})
export class AdminpackageComponent implements OnInit {
  public addpackageForm:FormGroup;
  public img_flag: any = false;
  public imageblockflag: boolean = false;
  public imageErrCode: boolean = false;
  public ErrCode: boolean=false;
  public configData: any = {
    baseUrl: "https://fileupload.influxhostserver.com/",
    endpoint: "uploads",
    size: "51200", // kb
    format: ["jpg", "jpeg", "png"], // use all small font
    type: "inventory-file",
    path: "files",
    prefix: "_inventory-file",
    formSubmit: false,
    conversionNeeded: 0,
    bucketName: "crmfiles.influxhostserver"
  }
  constructor(public formBuilder: FormBuilder, public cookieService: CookieService,public http: HttpServiceService, public router: Router,
    public activatedRoute: ActivatedRoute, public _snackBar: MatSnackBar) {
      this.imageblockflag = true;
      let userData = JSON.parse(this.cookieService.get('user_details'));
      this.generateForm();
     }

  ngOnInit() {
  }
  generateForm(){
    this.addpackageForm = this.formBuilder.group({
      id: [null],
      package_name: ['', [Validators.required]],
      priority: ["",[Validators.required]],
      package_wholesell_price: ["", [Validators.required]],
      description: ['', [Validators.required]],
      inventory_image: [],
      status: ["",[Validators.required]],
  
    });
  }
  onSubmit(){
        /** marking as untouched **/
        for (let x in this.addpackageForm.controls) {
          this.addpackageForm.controls[x].markAsTouched();
        }
           //status
      if (this.addpackageForm.value.status) {
        this.addpackageForm.value.status = parseInt("1");
      }
      else {
        this.addpackageForm.value.status = parseInt("0");
      }
    console.log(this.addpackageForm.value);
  }

  inputBlur(val: any) {
    this.addpackageForm.controls[val].markAsUntouched();
  }
    // clear image in InventoryComponent//
    clear_image() {
      this.img_flag = false;
    }
  
}
