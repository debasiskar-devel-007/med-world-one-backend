import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpServiceService } from 'src/app/services/http-service.service';
@Component({
  selector: 'app-addinventorylistingquote',
  templateUrl: './addinventorylistingquote.component.html',
  styleUrls: ['./addinventorylistingquote.component.css']
})
export class AddinventorylistingquoteComponent implements OnInit {
  // ======================declarations=================
  public brand_name_array: any = [];
  public submitbuttonFlage:number=0;
  public msg:string;
  public hospital_id:any;
  public ids:any=[];
  public addinventorylistingquoteForm: FormGroup;
  public inventory_category_array: any = [];
  public header_txt: any = "Add New Listing Inventory Quote";
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
  public userId:any;
  public userType:any;
  public imageblockflag:boolean=false
  public selected:any;
  public inventoryDetails:any=[];
  public getcatagory:any;
  public gettbrandname:any;
  public hospitalName:any;
  public quote_id:number;
  //@HostListener('window:scroll')
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

  constructor(public formBuilder: FormBuilder, public cookieService: CookieService,
    public http: HttpServiceService, public router: Router,
    public activatedRoute: ActivatedRoute,public _snackBar: MatSnackBar) { 


      let userData = JSON.parse(this.cookieService.get('user_details'));
      this.userId = userData._id;
      this.userType = userData.type;

      this.imageblockflag=true;

      this.activatedRoute.params.subscribe(params => {
        if (params['_id'] != null) {
          this.action = "edit";
          this.condition = { user_id: params._id };
          this.activatedRoute.data.subscribe(resolveData => {
            this.defaultData = resolveData.inventoryList.res[0];
          });
        }
        else this.action = "add";

      });
       //generating the form
    this.generateForm();
    this.fetchAddedInventoryDetails();
  }

  ngOnInit() {
        //getting the inventory category
        this.getInventoryCategory();

        /** getting the active hospitals **/
        this.getActiveHospital();
    
        // Case 
        switch (this.action) {
          case 'add':
            /* Button text */
            this.btn_text = "SUBMIT";
            break;
          case 'edit':
            /* Button text */
            this.btn_text = "UPDATE";
            this.successMessage = "One row updated";
            this.setDefaultValue(this.defaultData);
            this.header_txt = "Edit Brand Information";
            this.img_flag = true;
            break;
        }
  }

  // =====================generate form=====================
  generateForm() {
    this.addinventorylistingquoteForm = this.formBuilder.group({
      id:[null],
      product_name: ['', [Validators.required]],
      source: [""],
      brand_id: ["",[Validators.required]],
      category_id: ["",[Validators.required]],
      sku: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      saleprice:['',Validators.required],
      description: ['', [Validators.required]],
      inventory_image: [],
      condition: ['New',],
      yom: [],
      items: new FormArray([]),
      dynamic_attributes: [],
      status: [true],

    });
  }
  // =======================================================





  // ===================================Setting the default Value========================
  setDefaultValue(defaultValue) {
    this.addinventorylistingquoteForm.patchValue({
      product_name: defaultValue.product_name,
      brand_id: defaultValue.brand_id,
      category_id: defaultValue.category_id,
      sku: defaultValue.sku,
      description: defaultValue.description,
      condition: defaultValue.condition,
      status: defaultValue.status,
      inventory_image: defaultValue.inventory_image,
      quantity: defaultValue.quantity,
      saleprice:defaultValue.saleprice,
      source: this.defaultData.source

    })
    this.fullImagePath = defaultValue.inventory_image.basepath + defaultValue.inventory_image.image;
    this.imageName = defaultValue.inventory_image.name;
    this.imageType = defaultValue.inventory_image.type;
    this.getBrandName(defaultValue.inventory_category);
    for (let i = 0; i < this.defaultData.items.length; i++) {
      if (this.defaultData.items[i] != null) {
        this.addItemWithData(this.defaultData.items[i]);
      }
    }
  }
  // ===================================================================================

  gethospitalName(data:any,id:any){
   // console.log(data);
    this.hospitalName=data;
    this.hospital_id=id;
  }
  getcatagoryName(catname:any){
    //console.log(catname);
    this.getcatagory=catname;
  }
  getbrandName(brndname:any){
    //console.log(brndname);
    this.gettbrandname=brndname;
  }
  /** blur function **/
  inputBlur(val: any) {
    this.addinventorylistingquoteForm.controls[val].markAsUntouched();
  }
  /**Fetch inventory details */
  fetchAddedInventoryDetails(){
    // console.log(this.condition.user_id);
    let postData={
      "source": "quote-listing_view",
      "condition":{
        "userid_object":this.userId
      }
    }
    this.http.httpViaPost('datalist', postData).subscribe((response: any) => {
        //console.log(response.res);
        this.inventoryDetails=response.res;
    })

    // for quote id
    this.http.httpViaPost('userid', undefined).subscribe((response: any) => {
      //console.log(response.userID);
      this.quote_id=response.userID;
  })

  }
  // ======================submit form=======================
  onSubmit() {
    
    /** marking as untouched **/
    for (let x in this.addinventorylistingquoteForm.controls) {
      this.addinventorylistingquoteForm.controls[x].markAsTouched();
    }
    var item: any = this.addinventorylistingquoteForm.value.items
    this.addinventorylistingquoteForm.value.dynamic_attributes = [];
    for (let loop = 0; loop < item.length; loop++) {
      var data: any = {};
      data[item[loop].label_name] = item[loop].label_value;
      this.addinventorylistingquoteForm.value.dynamic_attributes.push(data);
    }


    // Image File Upload Works 
    if (this.configData.files) {

      if (this.configData.files.length > 1) { this.ErrCode = true; return; }
      this.addinventorylistingquoteForm.value.inventory_image =
        {
          "basepath": this.configData.files[0].upload.data.basepath + '/' + this.configData.path + '/',
          "image": this.configData.files[0].upload.data.data.fileservername,
          "name": this.configData.files[0].name,
          "type": this.configData.files[0].type
        };
    } else {
      this.addinventorylistingquoteForm.value.inventory_image = false;
      this.imageErrCode = true;
      if (this.action == 'edit')
        this.addinventorylistingquoteForm.value.inventory_image = this.defaultData.inventory_image;
    }

    if (this.addinventorylistingquoteForm.invalid) {
      return;
    }
    else {

      //status
      if (this.addinventorylistingquoteForm.value.status) {
        this.addinventorylistingquoteForm.value.status = parseInt("1");
      }
      else {
        this.addinventorylistingquoteForm.value.status = parseInt("0");
      }

      /* start process to submited data */
      this.addinventorylistingquoteForm.value.brandname=this.gettbrandname;
      this.addinventorylistingquoteForm.value.catagory=this.getcatagory;
      this.addinventorylistingquoteForm.value.hospitalname=this.hospitalName;

      /**inventory */
      if(this.addinventorylistingquoteForm.value.id==null){
        var postData: any = {
          "source": 'quote-listing',
          "data":{
            "userid":this.userId,
            "hospital_id":this.hospital_id,
            "inventory_details":this.addinventorylistingquoteForm.value
          },
          "sourceobj": ["category_id", "brand_id","userid","hospital_id"],
  
        };
        this.msg='Thank You For Submitting A Listing Inventory Quote';
      }else{
        var inventID= this.addinventorylistingquoteForm.value.id;
        var postData: any = {
          "source": 'quote-listing',
          "data":{
            "userid":this.userId,
            "hospital_id":this.hospital_id,
            "inventory_details":this.addinventorylistingquoteForm.value,
            "id":inventID
          },
          "sourceobj": ["category_id", "brand_id","userid","hospital_id"],
  
        };
        this.msg='Inventory Updated';
      }
        
      console.log(postData,'postData');
      //return;
     
      //console.log(postData,postData.data.inventory_details.inventory_image.basepath,postData.data.inventory_details.inventory_image.image);
      let inventory_image:any=postData.data.inventory_details.inventory_image.basepath+postData.data.inventory_details.inventory_image.image;
          

      this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {
         // console.log(response);
        if (response.status == "success") {
            this.addinventorylistingquoteForm.reset();
            this._snackBar.open(this.msg, '', {
              duration: 2000,
            });
            //this.defaultData.inventory_image=null;
           this.imageblockflag=false;

           setTimeout(()=>{    //<<<---    using ()=> syntax
            this.imageblockflag=true;
              }, 1000);
          
           postData.data.inventory_details.inventory_image=inventory_image;
           postData.data.inventory_details.category=this.getcatagory;
           if(postData.data.id==null) this.inventoryDetails.push(postData.data.inventory_details);
            this.router.events.subscribe(() =>
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        );

        this.generateForm();


        } else {
          alert("Some error occurred. Please try again.");
        }
      }, (error) => {
        alert("Some error occurred. Please try again.");
      });
    }
  }
  // ========================================================






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
  //getting the brand name

  getBrandNamewithval(index: any,selectid:any) {
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
     this.addinventorylistingquoteForm.patchValue({brand_id:selectid});
    });
  }


  // clear image in InventoryComponent//
  clear_image() {
    this.img_flag = false;
  }


  //getting the brand name


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

  /** get active hospital list **/
  getActiveHospital() {

    if(this.userType=='hospital'){
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


    if(this.userType=='salesrep'){
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



    if(this.userType=='admin'){
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
    this.items = this.addinventorylistingquoteForm.get('items') as FormArray;
    this.items.push(this.createItem(null));
  }

  addItemWithData(val: any): void {
    this.items = this.addinventorylistingquoteForm.get('items') as FormArray;
    this.items.push(this.createItem(val));
  }

/**plus */
plus(){

}
minus(){

}
  trackByFn(index) {
    return index;
  }

  submitquote(){
    let postData = {
      "source": "quote_listing_details",
      "data":{
      "inventory_details": this.inventoryDetails,
      "hospital_id": this.hospital_id,
      "user_id": this.userId,
      "quote_id":this.quote_id,
      "status":0
      },
      "sourceobj":["hospital_id","quoted_by","user_id"]
    };

    console.log(postData);
    // console.log(this.inventoryDetails);

    for(let i in this.inventoryDetails){
        this.ids.push(this.inventoryDetails[i]._id);
    }
    // console.log(this.ids);


    let deleteData={
      "source": "quote-listing",
      "ids":this.ids
    }
    //console.log(deleteData);
    this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {
      //console.log(response);
      if(response.status="success"){
        this._snackBar.open('Inventory Listing Submitted', '', {
          duration: 2000,
        });
        this.http.httpViaPost('deletesingledatamany', deleteData).subscribe((response: any) => {
          //console.log(response);
          if(response.status="success"){
          // this.router.navigateByUrl('/admin/managequotes/inventorylistingquote/list');
          }
        })
        
      }
    })
  }
  /**delete inventory */
  delete(id:any,index:any){
    //console.log(id,index);
    let deleteData:any={
       "source": "quote-listing",
       "id":id};
    this.http.httpViaPost('deletesingledata', deleteData).subscribe((response: any) => {
      if(response.status=="success"){
        this.inventoryDetails.splice(index, index + 1);
      }
    })
  }
  /**view Detail inventory */
  viewDetailsInventory(item:any){
    console.log(item);
    this.submitbuttonFlage=1;
    this.addinventorylistingquoteForm.patchValue({
      id:item._id,
      product_name:item.inventory_details.product_name ,
      source:item.inventory_details.source,
      //brand_id:item.inventory_details.brand_id,
      category_id:item.inventory_details.category_id,
      sku:item.inventory_details.sku,
      quantity:item.inventory_details.quantity,
      saleprice:item.inventory_details.saleprice,
      description:item.inventory_details.description,
      inventory_image:item.inventory_details.inventory_image.basepath+item.inventory_details.inventory_image.image
    });
    // this.getbrandName=item.inventory_details.brandname;
    this.getbrandName(item.inventory_details.brandname);
    this.getcatagoryName(item.inventory_details.catagory);
    this.gethospitalName(item.inventory_details.hospitalname,item.inventory_details.source);
    this.getBrandNamewithval(item.inventory_details.category_id,item.inventory_details.brand_id);

    this.configData={};
    this.configData.files=[];
    this.configData.files[0]=item.inventory_details.inventory_image;  

    this.fullImagePath = item.inventory_details.inventory_image.basepath + item.inventory_details.inventory_image.image;
    this.imageName = item.inventory_details.inventory_image.name;
    this.imageType = item.inventory_details.inventory_image.type;
    this.img_flag=true;

    // this.addinventorylistingquoteForm.value.inventory_image =
    //     {
    //       "basepath": this.configData.files[0].upload.data.basepath + '/' + this.configData.path + '/',
    //       "image": this.configData.files[0].upload.data.data.fileservername,
    //       "name": this.configData.files[0].name,
    //       "type": this.configData.files[0].type
    //     };

  }
}
