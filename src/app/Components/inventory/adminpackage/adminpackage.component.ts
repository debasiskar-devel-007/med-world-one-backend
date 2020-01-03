import { Component, OnInit ,Inject} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface inventory {
  sku: any;
  inventory_name: any;
}
export interface DialogData {
  alldata:any;
}
@Component({
  selector: 'app-adminpackage',
  templateUrl: './adminpackage.component.html',
  styleUrls: ['./adminpackage.component.css']
})
export class AdminpackageComponent implements OnInit {
  public addpackageForm:FormGroup;
  public img_flag: any = false;
  public quantity:number;
  public imageblockflag: boolean = false;
  public imageErrCode: boolean = false;
  public ErrCode: boolean=false;
  public userId: any;
  public userType: any;
  public msg:string;
  public selected:any;
  public active_hospital_list:any=[];
  public inventoryList:any=[];
  public inven: Observable<string[]>;
  public PackageInventoryDetails:any=[];
  public alldata:any='';
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
    public activatedRoute: ActivatedRoute, public _snackBar: MatSnackBar,public dialog: MatDialog) {
      this.imageblockflag = true;
      let userData = JSON.parse(this.cookieService.get('user_details'));
      this.userId = userData._id;
      this.userType = userData.type;
      this.generateForm();
     }

  ngOnInit() {
    /** getting the active hospitals **/
    
    this.activatedRoute.data.subscribe(resolveData => {
      this.inventoryList=resolveData.inventoryList.inventory;
      //console.log(resolveData);
      });
    this.inven=this.addpackageForm.controls['inventory'].valueChanges.pipe(
      startWith(''),
      map(inventory => inventory ? this._filterStates(inventory) : inventory.slice())
    );
    this.getActiveHospital();
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
      package_quantity: ["",[Validators.required]],
  
    });
  }
  inventoryAdd(value:any){
    // console.log('inventory choice',value);
    value.quantity=1;
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
     //console.log(this.addpackageForm.value);
     
        /** marking as untouched **/
        for (let x in this.addpackageForm.controls) {
          this.addpackageForm.controls[x].markAsTouched();
        }
              
        /**submit here */
        if(this.addpackageForm.valid){
            delete this.addpackageForm.value.inventory;
                var postData: any = {
                  "source": 'package_list',
                  "data": {
                    "user_id": this.userId,
                    "hospital_id":this.addpackageForm.value.hospital_id,
                    "package_details":this.addpackageForm.value,
                    "package_inventoery_details":this.PackageInventoryDetails,
                    "status":0
                  },
                  "sourceobj": ["user_id","hospital_id"],
                };
                //console.log(postData);
              
                this.msg="Package Save Successfully"
                this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {
                  //console.log(response);
                  if (response.status == "success") {
                    this._snackBar.open(this.msg, '', {
                      duration: 2000,
                    });
                    this.addpackageForm.reset();
                    this.PackageInventoryDetails='';
                     /**salesrep route */
                     if (this.userType == 'salesrep') {
                      this.router.navigateByUrl('/salesrep/package/list');
                    }
                    /**hospital route */
                    if (this.userType == 'hospital') {
                      this.router.navigateByUrl('/medicalpartner/package/list');
                    }
                    /**admin route */
                    if (this.userType == 'admin') {
                      this.router.navigateByUrl('/admin/package/list');
                    }
                  }
                  })
        }
    
  }

   /**add and delete quentity */
   addToqty(item:any){

    item.quantity=item.quantity+1;
    
  }
  removeItem(item:any){
    item.quantity=item.quantity-1;
   }

/**SubmitPackage */
SubmitPackage(){
   //console.log(this.addpackageForm.value);
    
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
            delete this.addpackageForm.value.inventory;
                var postData: any = {
                  "source": 'package_list',
                  "data": {
                    "user_id": this.userId,
                    "hospital_id":this.addpackageForm.value.hospital_id,
                    "package_details":this.addpackageForm.value,
                    "package_inventoery_details":this.PackageInventoryDetails,
                    "status":1
                  },
                  "sourceobj": ["user_id","hospital_id"],
                };
                //console.log(postData);
                this.msg="Package Submit Successfully"
                this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {
                  //console.log(response);
                  if (response.status == "success") {
                    this._snackBar.open(this.msg, '', {
                      duration: 2000,
                    });
                    this.addpackageForm.reset();
                    this.PackageInventoryDetails='';

                      /**salesrep route */
                      if (this.userType == 'salesrep') {
                        this.router.navigateByUrl('/salesrep/package/list');
                      }
                      /**hospital route */
                      if (this.userType == 'hospital') {
                        this.router.navigateByUrl('/medicalpartner/package/list');
                      }
                      /**admin route */
                      if (this.userType == 'admin') {
                        this.router.navigateByUrl('/admin/package/list');
                      }
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
  
      /*******************add inventory pakage Modal ********************************/
 
  addinventorymanually():void{
    const dialogRef = this.dialog.open(Dialoginventory, {
      // width: '750px',
      // disableClose: true
      panelClass:'packageInventory',
      data:this.alldata
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      //console.log('All data kjghdsfgdrfhg',result);
      result.quantity=1;
      if(result.inventory_name!=null && result.inventory_name!=''){
        this.PackageInventoryDetails.push(result);
      }
      
    });
  }
  /***************************************************** */
}


@Component({
  selector: 'Dialoglogin',
  templateUrl: './addinventorymodal.html',
})
export class Dialoginventory {
  public brand_name_array: any = [];
  public selected:any;
  public inventoryForm: FormGroup;
  public inventory_category_array: any = [];
  public header_txt: any = "Add Inventory";
  public btn_text: any = "SUBMIT";
  public condition: any;
  public action: any;
  public defaultData: any;
  public successMessage: any = "Submitted Successfully!!!";
  public yom_flag: boolean = false;
  public ErrCode: boolean;
  public fullImagePath: any;
  public imageName: any;
  public imageType: any;
  public img_flag: any = false;
  public add_field_flag: boolean = false;
  public i_count: number = 0;
  public dummy_array: any;
  public attr_name: any;
  public attr_value: any;
  public a_name: string;
  public a_value: string;
  public temp_array: any = [];
  public items: FormArray;
  public active_hospital_list: any = [];
  public imageErrCode: boolean = false;
  public userId: any;
  public userType: any;
  public getcategory:any;
  public gettbrandname:any;
    // ===================================================

  //image upload 
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
  constructor(
    public dialogRef: MatDialogRef<Dialoginventory>, public router: Router,public formBuilder:FormBuilder,public http: HttpServiceService,
    public cookieService: CookieService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { 
      let userData = JSON.parse(this.cookieService.get('user_details'));
      this.userId = userData._id;
      this.userType = userData.type;
      this.inventoryForm = this.formBuilder.group({
        inventory_name: ['', [Validators.required]],
        brand_name: ["",[Validators.required]],
        inventory_category: ["",[Validators.required]],
        sku: ['', [Validators.required]],
        quantity: ['', [Validators.required]],
        description: ['', [Validators.required]],
        inventory_image: [],        
        items: new FormArray([]),
        dynamic_attributes: [], 
        brand:[],
        image:[],
        category:[]
      });
      this.getInventoryCategory();
     
    }

    onSubmit() {
      /** marking as untouched **/
      //console.log(this.inventoryForm.value);
      // this.dialogRef.close(this.inventoryForm.value);

      for (let x in this.inventoryForm.controls) {
        this.inventoryForm.controls[x].markAsTouched();
      }
      var item: any = this.inventoryForm.value.items
      this.inventoryForm.value.dynamic_attributes = [];
      for (let loop = 0; loop < item.length; loop++) {
        var data: any = {};
        data[item[loop].label_name] = item[loop].label_value;
        this.inventoryForm.value.dynamic_attributes.push(data);
      }
  
  
      // Image File Upload Works 
      if (this.configData.files) {
  
        if (this.configData.files.length > 1) { this.ErrCode = true; return; }
        this.inventoryForm.value.inventory_image =
          {
            "basepath": this.configData.files[0].upload.data.basepath + '/' + this.configData.path + '/',
            "image": this.configData.files[0].upload.data.data.fileservername,
            "name": this.configData.files[0].name,
            "type": this.configData.files[0].type
          };
      } else {
        this.inventoryForm.value.inventory_image = false;
        this.imageErrCode = true;
        if (this.action == 'edit')
          this.inventoryForm.value.inventory_image = this.defaultData.inventory_image;
      }
      // console.log(this.inventoryForm.value);
      if (this.inventoryForm.invalid) {
        return;
      }
      else {
        this.inventoryForm.value.brand = this.gettbrandname;
        this.inventoryForm.value.category = this.getcategory;
        this.inventoryForm.value.image = this.inventoryForm.value.inventory_image.basepath+this.inventoryForm.value.inventory_image.image;

          //console.log(this.inventoryForm.value);
          this.dialogRef.close(this.inventoryForm.value);
      }
    }
     /** blur function **/
  inputBlur(val: any) {
    this.inventoryForm.controls[val].markAsUntouched();
  }
  createItem(item_array: any): FormGroup {
    if (item_array != null) {
      return this.formBuilder.group({
        label_name: [item_array.label_name],
        label_value: [item_array.label_value]
      });
    }
    if (item_array == null) {
      return this.formBuilder.group({
        label_name: '',
        label_value: ''
      });
    }
  }

  addItem(): void {
    this.items = this.inventoryForm.get('items') as FormArray;
    this.items.push(this.createItem(null));
  }

  addItemWithData(val: any): void {
    this.items = this.inventoryForm.get('items') as FormArray;
    this.items.push(this.createItem(val));
  }
   //getting the brand name

   getBrandName(index: any) {
    //console.log(index);
    var data: any;
    data = {
      'source': 'category_view',
      'token': this.cookieService.get('jwtToken'),
      condition: {
        _id_object: index
      }
    };
    this.http.httpViaPost("datalist", data).subscribe(response => {
      //console.log("getBrandName response",response);
      let result: any;
      result = response.res;
      this.brand_name_array = result[0].brand_data;
    });
  }

  getInventoryCategory() {
    var data: any;
    data = {
      'source': 'inventory_category',
      'token': this.cookieService.get('jwtToken')
    };
    this.http.httpViaPost("datalist", data).subscribe(response => {
      let result: any;
      result = response;
      this.inventory_category_array = result.res;
    });
  }
   // clear image in InventoryComponent//
   clear_image() {
    this.img_flag = false;
  }
  getcatagoryName(catname: any) {
    this.getcategory = catname;
  }
  getbrandName(brndname: any) {
    this.gettbrandname = brndname;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}