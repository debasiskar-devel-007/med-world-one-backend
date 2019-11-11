import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators ,FormArrayName} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpServiceService } from 'src/app/services/http-service.service';


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
// ===================================================



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
    }

  ngOnInit() {

    //generating the form
    this.generateForm();

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
        status:[]
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
    status:defaultValue.status
  })
 }
 // ===================================================================================




  // ======================submit form=======================
  onSubmit()
  {
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
