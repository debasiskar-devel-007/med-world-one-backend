import { Component, OnInit,Inject } from '@angular/core';
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
public successMessage:any="Submitted Successfully!!!"
 public defaultData:any;
 public  dialogRef:any;
  public priceMarkupForm:FormGroup;
public countryList:any=[];
public condition:any;
public action:any='add';
public header_txt:any='Add Price Markup'


  constructor(public formBuilder: FormBuilder,public http:HttpServiceService,public  cookieService: CookieService,public router:Router,public activatedRoute:ActivatedRoute,public dialog: MatDialog) {

    this.generateForm();
   
    this.activatedRoute.params.subscribe(params => {
      if (params['_id'] != null) {
        this.action = "edit";
        this.condition = { _id: params._id };
        this.activatedRoute.data.subscribe(resolveData => {
          this.defaultData = resolveData.priceMarkupList.res[0];
        });
      }
      else
        this.action = "add";
    });

   }

  ngOnInit() {


//country list
    let data: any = {
      "source": 'country',
      "token": this.cookieService.get('jwtToken')
    };
  
    this.http.httpViaPost('datalist ', data).subscribe((response: any) => {
     
      this.countryList=response.res;
      console.log('+++++>>>>>>',this.countryList)
    })

    


    
  }
//form for price markup//
  generateForm(){
    this.priceMarkupForm=this.formBuilder.group({
      Country:[],
      setValue:[],
      Notes: []

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

  setDefaultValue(defaultValue) {
    this.priceMarkupForm.patchValue({
      Country:defaultValue.country,
      setValue:defaultValue.setValue,
      Notes:defaultValue.Notes,

    })
  }
  //submit button
  onSubmit() {
    if(this.priceMarkupForm.valid){
      console.log(this.priceMarkupForm.value)


      //start process for add or update
      let postData: any = {
        "source": 'priceMarkup',
        "data": Object.assign(this.priceMarkupForm.value, this.condition),
        "token": this.cookieService.get('jwtToken')
      };

      this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {
        let result:any;
        result=response;
        console.log('>>>>>>',result)


        if (result.status == "success") {
         
            this.openDialog(this.successMessage);
            setTimeout(() => {
              this.dialogRef.close();
            }, 2000);

        this.router.navigateByUrl('/inventory/price-markup-management-list/list');
        }
      
        })

    }
  }

  //city list Json
  // getCountryList() {
  //   this.http.getJsonObject('assets/json/country.json').subscribe((res) => {
  //     let result: any = {};
  //     result = res;
  //     this.countryList = result;
  //   })
  // }

  
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
  


