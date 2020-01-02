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
  public userId: any;
  public userType: any;
  public msg:string;

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
      this.userId = userData._id;
      this.userType = userData.type;
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
      package_image: [],
      status: [""],
  
    });
  }
  onSubmit(){
    //  console.log(this.addpackageForm.value);
     
        /** marking as untouched **/
        for (let x in this.addpackageForm.controls) {
          this.addpackageForm.controls[x].markAsTouched();
        }
           //status
      if (this.addpackageForm.value.status) {
        this.addpackageForm.value.status=1;
      }
      else {
        this.addpackageForm.value.status=0;
      }

      // Image File Upload Works 
    if (this.configData.files) {

      if (this.configData.files.length > 1) { this.ErrCode = true; return; }
      this.addpackageForm.value.package_image =
      {
        "basepath": this.configData.files[0].upload.data.basepath + '/' + this.configData.path + '/',
        "image": this.configData.files[0].upload.data.data.fileservername,
        "name": this.configData.files[0].name,
        "type": this.configData.files[0].type
      };
    } else {
      this.addpackageForm.value.package_image = false;
      this.imageErrCode = true;
      // if (this.action == 'edit')
      //   this.addpackageForm.value.package_image = this.defaultData.package_image;
    }
    
        /**submit here */
        if(this.addpackageForm.valid){
                var postData: any = {
                  "source": 'package_list',
                  "data": {
                    "user_id": this.userId,
                    "package_details":this.addpackageForm.value
                  },
                  "sourceobj": ["user_id"],
                };
                this.msg="Package added Successfully"
                this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {
                  console.log(response);
                  if (response.status == "success") {
                    this._snackBar.open(this.msg, '', {
                      duration: 2000,
                    });
                    this.addpackageForm.reset();
                    this.imageblockflag = false;

                    setTimeout(() => {    //<<<---    using ()=> syntax
                      this.imageblockflag = true;
                    }, 1000);
                    this.generateForm();
                  }
                  })
        }
    
  }

  inputBlur(val: any) {
    this.addpackageForm.controls[val].markAsUntouched();
  }
    // clear image in InventoryComponent//
    clear_image() {
      this.img_flag = false;
    }
  
}
