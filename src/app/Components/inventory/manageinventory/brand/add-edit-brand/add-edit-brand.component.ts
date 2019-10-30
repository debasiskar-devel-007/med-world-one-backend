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
  selector: 'app-add-edit-brand',
  templateUrl: './add-edit-brand.component.html',
  styleUrls: ['./add-edit-brand.component.css']
})
export class AddEditBrandComponent implements OnInit {



  // ====================declarations==================
  header_txt: any = "Add a brand";
  btn_text: any = "SUBMIT";
  brandForm: FormGroup;
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
          this.defaultData = resolveData.brandList.res[0];
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
    this.brandForm = this.formBuilder.group({
      brand_name: [],
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
        this.header_txt = "Edit Brand Information";
        break;
    }
  }
  // =====================================




// =========================================MODAL functions==========================================
openDialog(x: any): void {
  this.dialogRef = this.dialog.open(Modal5, {
    width: '250px',
    data: { msg: x }
  });

  this.dialogRef.afterClosed().subscribe(result => {

  });
}
// =====================================================================================================


   // ===================================Setting the default Value========================
 setDefaultValue(defaultValue) {
  this.brandForm.patchValue({
    brand_name:defaultValue.brand_name,
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
      'source': 'brands',
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
    if (this.brandForm.invalid) {
      return;
    }
    else {

      //status
      if (this.brandForm.value.status) {
        this.brandForm.value.status = parseInt("1");
      }
      else {
        this.brandForm.value.status = parseInt("0");
      }



      delete this.brandForm.value.confirmpassword;



      /* start process to submited data */
      let postData: any = {
        "source": 'brands',
        "data": Object.assign(this.brandForm.value, this.condition),
        "token": this.cookieService.get('jwtToken'),
        "sourceobj": ["parent_category"]
      };

      this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {

        if (response.status == "success") {
         
            this.openDialog(this.successMessage);
            setTimeout(() => {
              this.dialogRef.close();
            }, 2000);


          this.router.navigateByUrl('inventory/manage-inventory/brand/list');;
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
  templateUrl: 'modal5.html',
})
export class Modal5 {

  constructor(
    public dialogRef: MatDialogRef<Modal5>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
// ======================================================================================================

