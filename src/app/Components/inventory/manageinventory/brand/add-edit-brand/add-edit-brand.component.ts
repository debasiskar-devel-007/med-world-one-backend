import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { MetaService } from '@ngx-meta/core';
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
  action: any;
  successMessage: any = "Submitted Successfully!!!"
  defaultData: any;
  dialogRef: any;
  // ==================================================
  constructor(private formBuilder: FormBuilder, private cookieService: CookieService, private http: HttpServiceService, private router: Router, private activatedRoute: ActivatedRoute, public dialog: MatDialog, private readonly meta:MetaService) {


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

    this.meta.setTitle('MedWorldOne - Inventory Add Edit Brand');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'MedWorldOne - Inventory Add Edit Brand');
    this.meta.setTag('twitter:title', 'MedWorldOne - Inventory Add Edit Brand');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-fb.png');
    this.meta.setTag('twitter:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-twitter.png');

  }

  ngOnInit() {
    //generating the form
    this.generateForm();


  }


  // ===========Form Generation=========
  generateForm() {
    this.brandForm = this.formBuilder.group({
      brand_name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      priority: ['', [Validators.required]],
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
      brand_name: defaultValue.brand_name,
      description: defaultValue.description,
      priority: defaultValue.priority,
      status: defaultValue.status
    })
  }
  // ======================================================================================




  /** blur function **/
  inputBlur(val: any) {
    this.brandForm.controls[val].markAsUntouched();
  }


  // =======================SUBMIT==========================
  onSubmit() {


    /** marking as untouched **/
    for (let x in this.brandForm.controls) {
      this.brandForm.controls[x].markAsTouched();
    }


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

