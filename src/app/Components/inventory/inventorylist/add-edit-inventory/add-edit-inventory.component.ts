import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators ,FormArrayName} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { InventoryComponent } from 'src/app/Components/frontend/inventory/inventory.component';
// import { deflate } from 'zlib';


@Component({
  selector: 'app-add-edit-inventory',
  templateUrl: './add-edit-inventory.component.html',
  styleUrls: ['./add-edit-inventory.component.css']
})
export class AddEditInventoryComponent implements OnInit {


// ======================declarations=================
   brand_name_array : any = [];
   inventoryForm : FormGroup;
   inventory_category_array : any = [];
   header_txt:any="Add Inventory";
   btn_text:any="SUBMIT";
   condition:any;
   action:any;
   defaultData:any;
   successMessage:any="Submitted Successfully!!!";
   yom_flag:boolean=false;
   ErrCode: boolean;
   public fullImagePath:any;
   public imageName:any;
   public imageType:any;
   public img_flag:any=false;

// ===================================================

//image upload 
public configData: any = {
  baseUrl: "http://3.15.236.141:5005/",
  endpoint: "uploads",
  size: "51200", // kb
  format: ["jpg", "jpeg", "png", "bmp", "zip", 'html'], // use all small font
  type: "inventory-picture",
  path: "files",
  prefix: "inventory_picture_"
}

  constructor(private formBuilder: FormBuilder, private cookieService: CookieService,
    private http: HttpServiceService,private router : Router, 
    private activatedRoute: ActivatedRoute,public dialog: MatDialog) { 
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
  generateForm()
  {
      this.inventoryForm = this.formBuilder.group({
        inventory_name:[],
        brand_name:[],
        inventory_category:[],
        model:[],
        description:[],
        condition:['New',],
        yom:[],

        availabiity:[],
        instock:[],
        status:[],
        inventory_image:[]
      });
  }
  // =======================================================
   



// ===================================Setting the default Value========================
setDefaultValue(defaultValue) {
  this.inventoryForm.patchValue({
    inventory_name:defaultValue.inventory_name,
    brand_name:defaultValue.brand_name,
    inventory_category:defaultValue.inventory_category,
    model:defaultValue.model,
    description:defaultValue.description,
    condition:defaultValue.condition,
    availabiity:defaultValue.availabiity,
    instock:defaultValue.instock,
    status:defaultValue.status,
    inventory_image:defaultValue.inventory_image
    
  })
  this.fullImagePath=defaultValue.inventory_image.basepath + defaultValue.inventory_image.image;
  this.imageName=defaultValue.inventory_image.name;
  this.imageType=defaultValue.inventory_image.type;
  
 }
 // ===================================================================================




  // ======================submit form=======================
  onSubmit()
  {


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
    console.log('>>>>>>>>>>>>>>',this.inventoryForm.value.inventory_image)
    console.log("--------------->",this.inventoryForm.value);
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
        "sourceobj": ["brand_name","inventory_category"],
        
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
    this.http.httpViaPost("datalist",data).subscribe(response => {
      let result: any;
      result = response;
      this.brand_name_array = result.res;
    });
  }

  // clear image in InventoryComponent//
  clear_image(){
  this.img_flag=false;
}


    //getting the brand name
   
    getInventoryCategory() {
      var data: any;
      data = {
        'source': 'inventory_category',
        'token': this.cookieService.get('jwtToken')
      };
      this.http.httpViaPost("datalist",data).subscribe(response => {
        let result: any;
        result = response;
        this.inventory_category_array = result.res;
      });
    }

    /*create_field*/
    create_field(){
      this.inventoryForm.addControl('newcontrol',new FormControl('',Validators.required));
    }
}
