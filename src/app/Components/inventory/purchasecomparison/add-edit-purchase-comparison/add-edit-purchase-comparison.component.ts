import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { MatSnackBar } from '@angular/material';

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
  public condition: any;
  public action: any;
  public defaultData: any;
  public btn_text: any;
  public tmp_value: any;
  public reportName: string;
  public user_data: any;
  public id: any;
  public role:any;
  public headerFlag:any;
  public salerep_id:any;
  public salesRepName:any;





  constructor(private http: HttpServiceService, private cookieService: CookieService,
    public formBuilder: FormBuilder, private router: Router, public activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar) {
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

    /** getting the user id **/
    let allData: any = {};
    allData = cookieService.getAll()
    this.user_data = JSON.parse(allData.user_details);
    this.id = this.user_data.id;
    this.role = this.user_data;
    this.salesRepName = this.user_data.firstname + ' ' +this.user_data.lastname;
  }

  ngOnInit() {

    /** getting the header flag **/
    this.headerFlag = this.activatedRoute.snapshot.url[0].path;

    if(this.headerFlag == 'salesrep')
    this.salerep_id = this.id;
    else
    this.salerep_id = undefined;


    /** getting the hospital name **/
    this.getHospitalNames();


    

    /** generate form call **/
    this.generateForm();

    /** by default a single form will be selected **/
    this.addItem();


    /** Switch case**/
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

  /** getting the hospital names for admin **/
  getHospitalNames() {
    let data: any = {
      'source': 'users_view',
      'token': this.cookieService.get('jwtToken'),
      'condition': {
        'type': 'hospital',
        'salesrepselect_object': this.salerep_id
      }
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
      hospital_id: [],
      report_name: [],
      is_draft: [],
      user_id: []
    });
  }


  /**  Form Array **/
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


  /** adding item to form array **/
  addItem(): void {
    this.items = this.purchaseForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }


  /** takeName **/
  takeName(event: any) {
    this.tmp_value = event.value;
  }

  /** taking the report name **/
  takereport_name(event: any) {
    this.reportName=event.target.value;
  }

  /** set draft **/
  setDraft() {
    this.purchaseForm.value.is_draft = 1;
  }

  /** submit function **/
  onSubmit() {

    this.purchaseForm.value.hospital_id = this.tmp_value;
    this.purchaseForm.value.report_name = this.reportName;
    this.purchaseForm.value.user_id = this.id;
    

    if (this.purchaseForm.invalid) {
      return;
    }
    else {


      /* start process to submited data */
      let postData: any = {
        "source": 'purchasecomparison',
        "data": Object.assign(this.purchaseForm.value, this.condition),
        "token": this.cookieService.get('jwtToken'),
        "sourceobj": ["hospital_id", "user_id"],

      };

      this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {

        if (response.status == "success") {
          let action: any = "Ok";
           this.snackBar.open('Report Added!!!', action, {
             duration: 1000,
           });

           setTimeout(() => {
            if(this.headerFlag=='admin')
            this.router.navigateByUrl('/admin/inventory/purchase-comparison/list');
            else
            this.router.navigateByUrl('/salesrep/purchase-comparison/list');
           }, 1000);
           

 
        } else {
          alert("Some error occurred. Please try again.");
        }
      }, (error) => {
        alert("Some error occurred. Please try again.");
      });
    }
  }

}
