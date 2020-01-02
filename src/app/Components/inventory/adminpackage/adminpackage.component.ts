import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
export interface inventory {
  sku: any;
  inventory_name: any;
}

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
  public active_hospital_list:any=[];
  public inventoryList:any=[];
  public inven: Observable<string[]>;
  public PackageInventoryDetails:any=[];
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
    /** getting the active hospitals **/
    this.getActiveHospital();
    this.activatedRoute.data.subscribe(resolveData => {
      this.inventoryList=resolveData.inventoryList.inventory;
      });
    this.inven=this.addpackageForm.controls['inventory'].valueChanges.pipe(
      startWith(''),
      map(inventory => inventory ? this._filterStates(inventory) : inventory.slice())
    );
  }
  private _filterStates(value: string): inventory[] {
    const filterValue = value.toLowerCase();

    return this.inventoryList.filter(inventory => inventory.inventory_name.toLowerCase().indexOf(filterValue) === 0);
  }



  generateForm(){
    this.addpackageForm = this.formBuilder.group({
      id: [null],
      package_name: ['', [Validators.required]],
      hospital_id:["",[Validators.required]],
      inventory: [""],
       notes: ['', [Validators.required]],
      status: [""],
  
    });
  }
  inventoryAdd(value:any){
   
    this.PackageInventoryDetails.push(value);
    //console.log(this.PackageInventoryDetails);
  }
  /**delete inventory */
  remove(indx:any){
      this.PackageInventoryDetails.splice(indx, indx + 1);
      //console.log(this.PackageInventoryDetails);
  }



  /**submit function */
  onSubmit(){
     console.log(this.addpackageForm.value);
     return;
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
    /** get active hospital list **/
    getActiveHospital() {

      if (this.userType == 'hospital') {
        var data: any;
        data = {
          'source': 'users_view',
          'condition': {
            '_id_object': this.userId
          }
  
        };
  
  
        this.http.httpViaPost("datalist", data).subscribe(response => {
          //console.log(response);
          let result: any;
          result = response.res;
          this.active_hospital_list = result
        });
  
      }
  
  
      if (this.userType == 'salesrep') {
        var data: any;
        data = {
          'source': 'users_view',
          'condition': {
            'salesrepselect_object': this.userId
          }
  
        };
  
  
        this.http.httpViaPost("datalist", data).subscribe(response => {
          //console.log(response);
          let result: any;
          result = response.res;
          this.active_hospital_list = result
        });
  
      }
  
  
  
      if (this.userType == 'admin') {
        var data: any;
        data = {
          'source': 'users_view',
          'token': this.cookieService.get('jwtToken'),
          'condition': {
            'type': 'hospital',
            status: 1
          }
        };
        this.http.httpViaPost("datalist", data).subscribe(response => {
          let result: any;
          result = response.res;
          this.active_hospital_list = result
        });
      }
    }
}
