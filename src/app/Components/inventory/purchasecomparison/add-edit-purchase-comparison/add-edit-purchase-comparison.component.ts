import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { InventoryComponent } from 'src/app/Components/frontend/inventory/inventory.component';

@Component({
  selector: 'app-add-edit-purchase-comparison',
  templateUrl: './add-edit-purchase-comparison.component.html',
  styleUrls: ['./add-edit-purchase-comparison.component.css']
})
export class AddEditPurchaseComparisonComponent implements OnInit {


  /** declarations **/
  public hospital_name_array: any = [];
  public purchaseForm: FormGroup;
  public items: FormArray;
  public condition:any;
  public action:any;
  public defaultData:any;
  public btn_text:any;
  public tmp_value:any;



  constructor(private http: HttpServiceService, private cookieService: CookieService,
    public formBuilder: FormBuilder , private router : Router , public activatedRoute : ActivatedRoute) {
      this.activatedRoute.params.subscribe(params => {
        if (params['_id'] != null) {
          this.action = "edit";
          this.condition = { id: params._id };
          this.activatedRoute.data.subscribe(resolveData => {
            this.defaultData = resolveData.data.res[0];
          });
        }
        else
          this.action = "add";
      });

  }

  ngOnInit() {
    /** getting the hospital name **/
    this.getHospitalName();

    /** generate form call **/
    this.generateForm();

    /** by default a single form will be selected **/
    this.addItem();

    switch (this.action) {
      case 'add':
        /* Button text */
        this.btn_text = "SUBMIT";
        break;
      case 'edit':
        /* Button text */
        this.btn_text = "UPDATE";
        // this.successMessage = "One row updated";
        // this.setDefaultValue(this.defaultData);        
        break;
    }
  }

  /** getting t he hospital names **/
  getHospitalName() {
    let data: any = {
      'source': 'users_view',
      'token': this.cookieService.get('jwtToken'),
      'condition': { 'type': 'hospital' }
    }

    this.http.httpViaPost('datalist', data).subscribe((response) => {
      let result = response.res;
      this.hospital_name_array = result;
    });
  }

  /** generate form  **/
  generateForm() {
    this.purchaseForm = this.formBuilder.group({
      items: new FormArray([]),
      hospitalname:[]
    });
  }


  createItem(): FormGroup {
    return this.formBuilder.group({
      productname_sr: [],
      price_sr: [],
      size_sr: [],
      color_sr: [],
      description_sr: [],
      productname_md: [],
      price_md: [],
      size_md: [],
      color_md: [],
      description_md: [],

    });
  }

  addItem(): void {
    this.items = this.purchaseForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }


  /** takeName **/
  takeName(event:any){
    this.tmp_value= event.value;
    console.log("----------------HN",this.tmp_value);
  }

  /** submit function **/
  onSubmit(){

    
   this.purchaseForm.value.hospitalname = this.tmp_value
   console.log("All values",this.purchaseForm.value);

    if (this.purchaseForm.invalid) {
      return;
    }
    else {


      /* start process to submited data */
      let postData: any = {
        "source": 'purchasecomparison',
        "data": Object.assign(this.purchaseForm.value, this.condition),
        "token": this.cookieService.get('jwtToken'),
        "sourceobj": ["hospitalname"],
        
      };

      this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {

        if (response.status == "success") {
            // this.openDialog(this.successMessage);
            // setTimeout(() => {
            //   this.dialogRef.close();
            // }, 2000);


          // this.router.navigateByUrl('inventory/inventory-list/list');;
        } else {
          alert("Some error occurred. Please try again.");
        }
      }, (error) => {
        alert("Some error occurred. Please try again.");
      });
    }
  }

}
