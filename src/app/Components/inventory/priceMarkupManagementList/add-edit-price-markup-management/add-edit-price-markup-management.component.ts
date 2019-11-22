import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpServiceService } from 'src/app/services/http-service.service';


export interface DialogData {
  msg: string;
}

@Component({
  selector: 'app-add-edit-price-markup-management',
  templateUrl: './add-edit-price-markup-management.component.html',
  styleUrls: ['./add-edit-price-markup-management.component.css']
})
export class AddEditPriceMarkupManagementComponent implements OnInit {

  public btn_text: any = "SUBMIT";
  public successMessage: any = "Submitted Successfully!!!"
  public defaultData: any;
  public dialogRef: any;
  public priceMarkupForm: FormGroup;
  public countryList: any = [];
  public condition: any;
  public action: any = 'add';
  public header_txt: any = 'Add Price Markup';
  public priceMarkupData: any;
  public name_txt:any="ADD";




  constructor(public formBuilder: FormBuilder, public http: HttpServiceService, public cookieService: CookieService, public router: Router, public activatedRoute: ActivatedRoute, public dialog: MatDialog) {


    this.activatedRoute.params.subscribe(params => {
      if (params['_id'] != null) {
        this.action = "edit";
        this.condition = { id: params._id };
        this.activatedRoute.data.subscribe(resolveData => {
          this.defaultData = resolveData.priceMarkupList.res[0];
        });
      }
      else
        this.action = "add";
    });

  }

  ngOnInit() {


    this.generateForm();
    
    //country list
    let data: any = {
      "source": 'country',
      "token": this.cookieService.get('jwtToken')
    };

    this.http.httpViaPost('datalist ', data).subscribe((response: any) => {

      this.countryList = response.res;
      console.log('+++++>>>>>>', this.countryList);
      this.generateForm();
    })


    //data view from price markup table

    let postdata: any = {
      "source": 'priceMarkup',
      "token": this.cookieService.get('jwtToken'),
      "sourceobj": ["country"]
    };

    this.http.httpViaPost('datalist ', postdata).subscribe((response: any) => {

      this.priceMarkupData = response.res;
      console.log('-------------->>>>>>', this.priceMarkupData)
    })



  }



//__________________custom validation for country check____________//

  public checkuniquecountry(country: string) {
    return (group: FormGroup): { [key: string]: any } => {
      console.log('grp', group);
      let countrycontrol = group.controls['country'];

      if (countrycontrol.value == null || countrycontrol.value.length < 4) {

        countrycontrol.setErrors({ 'incorrect': true });
        console.log('true');
        return {
          countrycontrol: true
        };
      }

      for (let b in this.priceMarkupData) {

        if (this.priceMarkupData[b]._id == countrycontrol.value) {

          countrycontrol.setErrors({ 'incorrect': true });
          console.log('true');
          return {
            countrycontrol: true
          };
        }

      }
    }
  }



  //form for price markup//
  generateForm() {
    this.priceMarkupForm = this.formBuilder.group({
      country: ['', Validators.required],
      setValue: ['', Validators.required],
      notes: []

    });
    // Case 
    switch (this.action) {
      case 'add':
        /* Button text */
        this.btn_text = "SUBMIT";
        this.name_txt="ADD";
        break;
      case 'edit':
        /* Button text */
        this.btn_text = "UPDATE";
        this.name_txt="EDIT";
        this.successMessage = "One row updated";
        this.setDefaultValue(this.defaultData);
        this.header_txt = "Edit Price Markup";
        break;
    }
  }





  // =========================================MODAL functions==========================================
  openDialog(x: any): void {
    this.dialogRef = this.dialog.open(Modal6, {
      width: '250px',
      data: { msg: x }
    });

    this.dialogRef.afterClosed().subscribe(result => {

    });
  }
  // =====================================================================================================



  //set default value

  setDefaultValue(defaultValue:any) {
    console.log('in setDefaultValue ',defaultValue);
    this.priceMarkupForm.patchValue({
      country: defaultValue.country,
      setValue: defaultValue.setValue,
      notes: defaultValue.notes

    })
  }
  //submit button
  onSubmit() {
    let flagval: any = 0;
    for (var x in this.priceMarkupForm.controls) {
      this.priceMarkupForm.controls[x].markAsTouched();
    }

    //flagval=1;
    console.log(this.priceMarkupForm.controls['country'].value);
    // for(var x in this.countryList._id){
    for (let y in this.priceMarkupData) {
      console.log('ccc', this.priceMarkupData[y].country);
      if (this.priceMarkupData[y].country == this.priceMarkupForm.controls['country'].value) {
        if(this.action=='add') flagval = 1;
        //alert(55);
      }

    }
    //}



    if (this.priceMarkupForm.valid && flagval == 0) {
      console.log(this.priceMarkupForm.value)


      //start process for add or update
      let postData: any = {
        "source": 'priceMarkup',
        "data": Object.assign(this.priceMarkupForm.value, this.condition),
        "token": this.cookieService.get('jwtToken'),
        "sourceobj": ["country"]
      };



      this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {
        let result: any;
        result = response;
        console.log('>>>>>>', result)


        if (result.status == "success") {

          this.openDialog(this.successMessage);
          setTimeout(() => {
            this.dialogRef.close();
          }, 2000);

          this.router.navigateByUrl('/inventory/price-markup-management-list/list');
        }

      })

    }
    if (flagval == 1) {
      alert('Price markup for this country is already added....!');
    }
  }
  //blur for validation
  inputBlur(val: any) {
    console.log(val)
    this.priceMarkupForm.controls[val].markAsUntouched();
  }

}



// ============================================MODAL COMPONENT===========================================
@Component({
  selector: 'app-modal',
  templateUrl: 'modal6.html',
})
export class Modal6 {

  constructor(
    public dialogRef: MatDialogRef<Modal6>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
  // ======================================================================================================



