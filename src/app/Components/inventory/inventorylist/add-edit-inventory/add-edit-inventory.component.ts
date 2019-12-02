import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { InventoryComponent } from 'src/app/Components/frontend/inventory/inventory.component';

import * as _ from "lodash";


@Component({
  selector: 'app-add-edit-inventory',
  templateUrl: './add-edit-inventory.component.html',
  styleUrls: ['./add-edit-inventory.component.css']
})
export class AddEditInventoryComponent implements OnInit {


  // ======================declarations=================
  public brand_name_array: any = [];
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
  public dynamic_items: FormArray;





  // ===================================================

  //image upload 
  public configData: any = {
    baseUrl: "https://fileupload.influxhostserver.com/",
    endpoint: "uploads",
    size: "51200", // kb
    format: ["jpg", "jpeg", "png", "bmp", "zip", 'html'], // use all small font
    type: "inventory-picture",
    path: "files",
    prefix: "inventory_picture_"
  }

  constructor(private formBuilder: FormBuilder, private cookieService: CookieService,
    private http: HttpServiceService, private router: Router,
    private activatedRoute: ActivatedRoute, public dialog: MatDialog) {
    this.activatedRoute.params.subscribe(params => {
      if (params['_id'] != null) {
        this.action = "edit";
        this.condition = { id: params._id };
        this.activatedRoute.data.subscribe(resolveData => {
          this.defaultData = resolveData.inventoryList.res[0];
        });
      }
      else
        this.action = "add";
    });

    //generating the form
    this.generateForm();
  }

  ngOnInit() {


    //getting the brand name
    this.getBrandName();

    //getting the inventory category
    this.getInventoryCategory();

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
    this.inventoryForm = this.formBuilder.group({
      inventory_name: [],
      brand_name: [],
      inventory_category: [],
      model: [],
      description: [],
      condition: ['New',],
      yom: [],
      availabiity: [],
      instock: [],
      status: [],
      inventory_image: [],
      sku: [],
      manufacturer: [],
      application: [],
      unspsc: [],
      latexfreeindicator: [],
      dynamic_items: new FormArray([])
    });
  }
  // =======================================================





  // ===================================Setting the default Value========================
  setDefaultValue(defaultValue) {
    console.log("defaultValue", defaultValue);
    this.inventoryForm.patchValue({
      inventory_name: defaultValue.inventory_name,
      brand_name: defaultValue.brand_name,
      inventory_category: defaultValue.inventory_category,
      model: defaultValue.model,
      description: defaultValue.description,
      condition: defaultValue.condition,
      availabiity: defaultValue.availabiity,
      instock: defaultValue.instock,
      status: defaultValue.status,
      inventory_image: defaultValue.inventory_image,
      sku: defaultValue.sku,
      manufacturer: defaultValue.manufacturer,
      application: defaultValue.application,
      unspsc: defaultValue.unspsc,
      latexfreeindicator: defaultValue.latexfreeindicator,


    })
    this.fullImagePath = defaultValue.inventory_image.basepath + defaultValue.inventory_image.image;
    this.imageName = defaultValue.inventory_image.name;
    this.imageType = defaultValue.inventory_image.type;
    // const creds = this.inventoryForm.controls.credentials as FormArray;
    // for (const i2 in defaultValue.credentials) {
    //   //  console.log("->",defaultValue.credentials[i2]);
    //   var res = defaultValue.credentials[i2];
    //   console.log("-------->", Object.keys(res).toString());
    //   this.a_name = Object.keys(res).toString();
    //   this.a_value = Object.values(res).toString();
    //   // this.addFields(this.a_name,this.a_value);
    //   this.temp_array.push({ 'name': this.a_name, 'value': this.a_value });
    // }
    // console.log("44", this.temp_array); console.log(defaultValue.credentials);
    // this.addFields('', '');
  }
  // ===================================================================================


  // ======================submit form=======================
  onSubmit() {


    this.dynamic_items.push(this.createItem());

    console.log(this.inventoryForm.value);

    // Service File Upload Works 
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
    }

    if (this.inventoryForm.invalid) {
      return;
    }
    else {

      //status
      if (this.inventoryForm.value.status) {
        this.inventoryForm.value.status = parseInt("1");
      }
      else {
        this.inventoryForm.value.status = parseInt("0");
      }



      delete this.inventoryForm.value.confirmpassword;



      /* start process to submited data */
      let postData: any = {
        "source": 'inventories',
        "data": Object.assign(this.inventoryForm.value, this.condition),
        "token": this.cookieService.get('jwtToken'),
        "sourceobj": ["brand_name", "inventory_category"],

      };

      this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {

        if (response.status == "success") {
          // this.openDialog(this.successMessage);
          // setTimeout(() => {
          //   this.dialogRef.close();
          // }, 2000);


          this.router.navigateByUrl('inventory/inventory-list/list');;
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

  getBrandName() {
    var data: any;
    data = {
      'source': 'brands',
      'token': this.cookieService.get('jwtToken')
    };
    this.http.httpViaPost("datalist", data).subscribe(response => {
      let result: any;
      result = response;
      this.brand_name_array = result.res;
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


  /** adding dynamic fields **/
  createItem2(): FormGroup {
    return this.formBuilder.group({       
    });
  }


  /** adding dynamic fields **/
  createItem(): FormGroup {
    return this.formBuilder.group({
      [this.attr_name]: this.attr_value
    });
  }


  addItem(): void {
    console.log("i", this.i_count);
    this.dynamic_items = this.inventoryForm.get('dynamic_items') as FormArray;


    if (this.i_count == 0) {
      this.dynamic_items.push(this.createItem2());
      this.dynamic_items = new FormArray([]);
    }
    else
      this.dynamic_items.push(this.createItem());
    this.i_count++;

  }

  /** make attribute**/
  makeAttr(event: any) {
    this.attr_name = event.target.value;
  }

  /** make name **/
  makeValue(event: any) {
    this.attr_value = event.target.value;
  }

  trackByFn(index) {
    return index;
  }
}