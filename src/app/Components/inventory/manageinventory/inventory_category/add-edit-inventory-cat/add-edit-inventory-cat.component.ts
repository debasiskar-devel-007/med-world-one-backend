import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { map, startWith } from 'rxjs/operators';
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
  public header_txt: string = "Add an inventory header";
  public btn_text: string = "SUBMIT";
  public inventoryCategoryForm: FormGroup;
  public condition: any;
  public parentcat_array: any = [];
  public action: any;
  public successMessage: any = "Submitted Successfully!!!"
  public defaultData: any;
  public dialogRef: any;
  public options: any = [];
  public brand_id_list: any = [];
  public filteredOptions: Observable<string[]>;
  myControl = new FormControl();
  public brand_array: any = [];
  public errCode: boolean = false;
  // ==================================================
  constructor(private formBuilder: FormBuilder, private cookieService: CookieService,
    private http: HttpServiceService, private router: Router,
    private activatedRoute: ActivatedRoute, public dialog: MatDialog) {


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

    /** getting the brands **/
    this.getBrands();



    // Case 
    switch (this.action) {
      case 'add':
        /* Button text */
        this.btn_text = "SUBMIT";
        break;
      case 'edit':
        /* Button text */
        this.btn_text = "UPDATE";
        this.header_txt = "Edit"
        this.successMessage = "One row updated!!!";
        this.setDefaultValue(this.defaultData);
        this.header_txt = "Edit Inventory Category";
        break;
    }

    /** setting the brands edit **/
    setTimeout(() => {
      for (let j = 0; j <= this.brand_id_list.length; j++) {
        for (let i = 0; i < this.options.length; i++) {
          if (this.brand_id_list[j] == this.options[i].brand_id)
            this.brand_array.push(this.options[i].brand_name);
        }
      }
    }, 1000);



    setTimeout(() => {
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );

    }, 1000);


  }
  private _filter(value: any): any[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.brand_name.toLowerCase().indexOf(filterValue) === 0);
  }



  /** Form Generation function **/
  generateForm() {
    this.inventoryCategoryForm = this.formBuilder.group({
      category_name: ['', [Validators.required]],
      parent_category: [],
      description: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      status: [],
      brand_id: ['', [Validators.required]]
    });



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
      category_name: defaultValue.category_name,
      parent_category: defaultValue.parent_category,
      description: defaultValue.description,
      priority: defaultValue.priority,
      status: defaultValue.status,
    })
    this.brand_id_list = defaultValue.brand_id;


  }
  // ======================================================================================


  //getting the parent category
  getParentCategory() {
    var data: any;
    data = {
      'source': 'inventory_category',
      'token': this.cookieService.get('jwtToken'),
      "sourceobj": ["parent_category"],
    };
    this.http.httpViaPost("datalist", data).subscribe(response => {
      let result: any;
      result = response;
      this.parentcat_array = result.res;
    });
  }

  /** getting the brands **/
  getBrands() {
    var data: any;
    data = {
      'source': 'brands',
      'token': this.cookieService.get('jwtToken'),
    };
    this.http.httpViaPost("datalist", data).subscribe(response => {
      let result: any;
      result = response.res;
      for (let i = 0; i < result.length; i++) {
        this.options.push({ 'brand_name': result[i].brand_name, 'brand_id': result[i]._id });
      }
    });
  }


  /**  collecting brnads on key up **/
  collect_brands(event: any) {
    if (event.keyCode == 13) {
      this.brand_id_list.push(String(event.target.value));
      this.inventoryCategoryForm.controls['brand_id'].patchValue("");

    }
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i].brand_id == event.target.value)
        this.brand_array.push(this.options[i].brand_name);
    }
  }


  /** collecting brands on click **/
  collect_brands_onclick(brand_id_click: any) {
    this.brand_id_list.push(String(brand_id_click));
    this.inventoryCategoryForm.controls['brand_id'].patchValue("");
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i].brand_id == brand_id_click)
        this.brand_array.push(this.options[i].brand_name);
    }
  }

  /** clear brands  **/
  clearBrand(index, brandnames) {
    this.brand_array.splice(index, 1);
    for (let i = 0; i < this.options.length; i++) {
      if (brandnames == this.options[i].brand_name) {
        this.brand_id_list.splice(this.options[i].brand_id, 1);
      }
    }
  }

  /** blur function **/
  inputBlur(val: any) {
    this.inventoryCategoryForm.controls[val].markAsUntouched();
  }

  // =======================SUBMIT==========================
  onSubmit() {

    /** marking as untouched **/
    for (let x in this.inventoryCategoryForm.controls) {
      this.inventoryCategoryForm.controls[x].markAsTouched();
    }

    /** validation for brands **/
    if (this.brand_array.length == 0)
      this.errCode = true;

    if (this.inventoryCategoryForm.invalid) {
      return;
    }
    else {

      this.inventoryCategoryForm.value.brand_id = this.brand_id_list;

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


          this.router.navigateByUrl('inventory/manage-inventory/inventory-category/list');
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

