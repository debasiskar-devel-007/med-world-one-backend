import { Component, OnInit ,Inject} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpServiceService } from 'src/app/services/http-service.service';
export interface DialogData {
  msg: string;
}


@Component({
  selector: 'app-add-edit-inventory-cat',
  templateUrl: './add-edit-inventory-cat.component.html',
  styleUrls: ['./add-edit-inventory-cat.component.css']
})
export class AddEditInventoryCatComponent implements OnInit {

  // ====================declarations==================
  header_txt: any = "Add an inventory header";
  btn_text: any = "SUBMIT";
  inventoryCategoryForm: FormGroup;
  condition: any;
  parentcat_array:any = [];
  action:any;
  successMessage:any="Submitted Successfully!!!"
  defaultData:any;
  dialogRef:any;
  // ==================================================
  constructor(private formBuilder: FormBuilder, private cookieService: CookieService,
    private http: HttpServiceService,private router : Router, 
    private activatedRoute: ActivatedRoute,public dialog: MatDialog) {
   

    this.activatedRoute.params.subscribe(params => {
      if (params['_id'] != null) {
        this.action = "edit";
        this.condition = { id: params._id };
        this.activatedRoute.data.subscribe(resolveData => {
          this.defaultData = resolveData.inventoryCatList.res[0];
        });
      }
      else
        this.action = "add";
    });
  }

  ngOnInit() {
     //generating the form
     this.generateForm();

     //getting the parent category
     this.getParentCategory();
 
  }


  // ===========Form Generation=========
  generateForm() {
    this.inventoryCategoryForm = this.formBuilder.group({
      category_name: [],
      parent_category: [],
      description: [],
      priority: [],
      status: []
    });


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
        this.header_txt = "Edit Inventory Category";
        break;
    }
  }
  // =====================================




// =========================================MODAL functions==========================================
openDialog(x: any): void {
  this.dialogRef = this.dialog.open(Modal4, {
    width: '250px',
    data: { msg: x }
  });

  this.dialogRef.afterClosed().subscribe(result => {

  });
}
// =====================================================================================================


   // ===================================Setting the default Value========================
 setDefaultValue(defaultValue) {
  this.inventoryCategoryForm.patchValue({
    category_name:defaultValue.category_name,
    parent_category:defaultValue.parent_category,
    description:defaultValue.description,
    priority:defaultValue.priority,
    status:defaultValue.status
  })
 }
 // ======================================================================================
 

  //getting the parent category
  getParentCategory() {
    var data: any;
    data = {
      'source': 'inventory_category',
      'token': this.cookieService.get('jwtToken')
    };
    this.http.httpViaPost("datalist",data).subscribe(response => {
      let result: any;
      result = response;
      this.parentcat_array = result.res;
    });
  }



  // =======================SUBMIT==========================
  onSubmit() {
    if (this.inventoryCategoryForm.invalid) {
      return;
    }
    else {

      //status
      if (this.inventoryCategoryForm.value.status) {
        this.inventoryCategoryForm.value.status = parseInt("1");
      }
      else {
        this.inventoryCategoryForm.value.status = parseInt("0");
      }



      delete this.inventoryCategoryForm.value.confirmpassword;



      /* start process to submited data */
      let postData: any = {
        "source": 'inventory_category',
        "data": Object.assign(this.inventoryCategoryForm.value, this.condition),
        "token": this.cookieService.get('jwtToken'),
        "sourceobj": ["parent_category"]
      };

      this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {

        if (response.status == "success") {
         
            this.openDialog(this.successMessage);
            setTimeout(() => {
              this.dialogRef.close();
            }, 2000);


          this.router.navigateByUrl('inventory/manage-inventory/inventory-category/list');;
        } else {
          alert("Some error occurred. Please try again.");
        }
      }, (error) => {
        alert("Some error occurred. Please try again.");
      });
    }
  }
  // =======================================================
}



  // ============================================MODAL COMPONENT===========================================
@Component({
  selector: 'app-modal',
  templateUrl: 'modal4.html',
})
export class Modal4 {

  constructor(
    public dialogRef: MatDialogRef<Modal4>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
// ======================================================================================================

