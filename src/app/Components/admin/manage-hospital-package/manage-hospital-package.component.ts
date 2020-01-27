import { Component, OnInit ,Inject} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface DialogData {
  data: any;
  alldata: any
}
@Component({
  selector: 'app-manage-hospital-package',
  templateUrl: './manage-hospital-package.component.html',
  styleUrls: ['./manage-hospital-package.component.css']
})
export class ManageHospitalPackageComponent implements OnInit {
public packageHospitalForm:FormGroup;
public deplist:any;
public medicalDevice:any;
public dynamic_attributes: any;
  public dynamic_attributes1:any=[];
public disInventory:any;
public medDevice:any;
public disposableInventory:any;
public PackageInventoryDetails:any=[];
public APiInventoeryListDetails:any=[];
public disabled = false;
public disposalDevice:any=[];
public arrayIndex:number;
public flag:number=0;

  constructor(public router:Router,public formBuilder: FormBuilder, public http: HttpServiceService,
    public cookieService: CookieService,public activatedRoute:ActivatedRoute,public dialog: MatDialog,public _snackBar: MatSnackBar) {
      this.packageHospitalForm=this.formBuilder.group({
        package_name:['',Validators.required],
        department:['',Validators.required],
        package_description:['',Validators.required]
      });


      /**department fetch */

      let post={
        "source": 'department',
      }
      this.http.httpViaPost('datalist',post).subscribe((res:any)=>{
        this.deplist=res.res;
        //console.warn(res);
      })
    }

  ngOnInit() {

  }

  /**search medical device form other api */
  medicalDeviceSearch(medDevice:any){

   // console.log(medDevice)
    let postData: any = {
      "api": medDevice
    }
    this.http.httpViaPost('getinventoryfromapi', postData).subscribe((response: any) => {
      //console.warn(response);
      if (response.status == true && response.messgae == 'Successfully send .') {
        this.PackageInventoryDetails=[];
        this.medDevice=response.res.body.hits.hits;
        this.flag=1;
        //console.warn("search",response.res.body.hits.hits)
      }
    })
  }
/**delete inventory */
remove(indx:any){

  this.disposalDevice.splice(indx, indx + 1);
  //console.log(this.PackageInventoryDetails);
}
delete(index: number) {

  this.APiInventoeryListDetails.splice(index, index + 1);
}


  /**Search Disposable Inventory */
  inventorySearch(disposal:any){

    //console.log(disposal);
    let postData: any = {
      "source":'inventories_list_view_async',
      "condition":{"inventory_search": disposal.toLowerCase()}

    }
    this.http.httpViaPost('search', postData).subscribe((response: any) => {
      //console.warn("disposal search list",response);
      if (response.status =='success') {
        this.medDevice=[];
        this.PackageInventoryDetails=response.data;
        this.flag=1;
      }else{this.flag=0;}
    })
  }



  /**ad list inventory details */
  Adddisposal(value:any){
    //console.log('inventory choice',value);
    value.quantity=1;
    value.tied_to_bed=0;
    this.disposalDevice.push(value);
    //console.log(this.PackageInventoryDetails);
  }

 /**viewDetails */
 viewDetails(inventoryDetails: any) {
  const dialogRef = this.dialog.open(hospitalPackagedetails, {
    panelClass: 'viewlistingQuoteModal',
    data: { alldata: inventoryDetails }

  });

  dialogRef.afterClosed().subscribe(result => {
  });
}
  /**inventory Add */
  inventoryAdd(item: any) {
    //console.log(item);

     let itm:any=item._source;
     itm.quantity=1;
     itm.tied_to_bed=0;
     itm.purchaseyear='';
     itm.cosmetic_condition='';
     itm.selling_timeframe='';
     itm.original_cost=0;
     itm.additional_information='';
     itm.listing_image=[];
     // item.saleprice = 1;

     this.APiInventoeryListDetails.push(itm);
    // console.log(this.APiInventoeryListDetails);

   }

    /** blur function **/
    inputBlur(val: any) {
      this.packageHospitalForm.controls[val].markAsUntouched();
    }
    cancel(){
      this.packageHospitalForm.reset();
      this.disposalDevice=[];
      this.APiInventoeryListDetails=[];
    }
  onSubmit(){
    for (let x in this.packageHospitalForm.controls) {
      this.packageHospitalForm.controls[x].markAsTouched();
    }
    for (let i in this.APiInventoeryListDetails) {
      if(this.APiInventoeryListDetails[i].publicDeviceRecordKey!=null) delete this.APiInventoeryListDetails[i].publicDeviceRecordKey
      if(this.APiInventoeryListDetails[i].publicVersionStatus!=null) delete this.APiInventoeryListDetails[i].publicVersionStatus
      if(this.APiInventoeryListDetails[i].deviceRecordStatus!=null) delete this.APiInventoeryListDetails[i].deviceRecordStatus
      if(this.APiInventoeryListDetails[i].deviceCommDistributionEndDate!=null) delete this.APiInventoeryListDetails[i].deviceCommDistributionEndDate
      if(this.APiInventoeryListDetails[i].publicVersionNumber!=null) delete this.APiInventoeryListDetails[i].publicVersionNumber
      if(this.APiInventoeryListDetails[i].devicePublishDate!=null) delete this.APiInventoeryListDetails[i].devicePublishDate
      if(this.APiInventoeryListDetails[i].deviceSizes!=null) delete this.APiInventoeryListDetails[i].deviceSizes
      if(this.APiInventoeryListDetails[i].complete_suggest!=null) delete this.APiInventoeryListDetails[i].complete_suggest
      if(this.APiInventoeryListDetails[i].deviceClass!=null) delete this.APiInventoeryListDetails[i].deviceClass
      if(this.APiInventoeryListDetails[i].implantFlag!=null) delete this.APiInventoeryListDetails[i].implantFlag
      if(this.APiInventoeryListDetails[i].publicVersionDate!=null) delete this.APiInventoeryListDetails[i].publicVersionDate

    }
    //console.log(this.packageHospitalForm.controls);
    //console.log(this.disposalDevice);
    //console.log(this.APiInventoeryListDetails);
    let postData: any = {
      "source":'package_hospital_details',
      "data":{
      "package_details":this.packageHospitalForm.value,
      "medical_device":this.APiInventoeryListDetails,
      "disposal_device":this.disposalDevice
      }
    }
    //console.log(postData);
    if(this.packageHospitalForm.valid){
      this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {
        //console.warn(response);
        if (response.status =='success') {

        this._snackBar.open('Package Submitted Successfully', '', {
          duration: 2000,
        });
        this.packageHospitalForm.reset();
        this.disposalDevice=[];
        this.APiInventoeryListDetails=[];
        this.router.navigateByUrl('/admin/manage-hospital-package/list');
        }
      })
    }

  }

  checkSelected(i:any){
  //  console.log(i);
  this.arrayIndex=i;
  }

  disposalViewDetails(item:any){
    //console.log("disposal view details",item);
  const dialogRef = this.dialog.open(disposalDetails, {
    panelClass: 'dispoviewModal',
    data: { alldata: item }

  });

  dialogRef.afterClosed().subscribe(result => {
  });
  }
}


/**view details modal */
@Component({
  selector: 'listingquotedetails',
  templateUrl: '../../inventory/inventorylistingquotefromapi/listingquotefromapi.html',
  styleUrls: ['../../inventory/inventorylistingquotefromapi/inventorylistingquotefromapi.component.css']
})
export class hospitalPackagedetails {

  constructor(
    public dialogRef: MatDialogRef<hospitalPackagedetails>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    //console.log(data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
/**disposalDetails */
@Component({
  selector: 'listingquotedetails',
  templateUrl: './disposaldetails.html',
  styleUrls: ['./manage-hospital-package.component.css']
})
export class disposalDetails {
  public dynamic_attributes: any;
  public dynamic_attributes1:any=[];
  constructor(
    public dialogRef: MatDialogRef<disposalDetails>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    //console.log(">>>",data);
    this.dynamic_attributes=data.alldata.dynamic_attributes;
    //console.log(">>>",this.dynamic_attributes);

    for (let i in this.dynamic_attributes) {

      this.dynamic_attributes1.push({ key: Object.keys(this.dynamic_attributes[i])[0], value: Object.values(this.dynamic_attributes[i])[0] })
      //this.dynamic_attributes1.push((this.dynamic_attributes[i]))
    }
     //console.log('this.dynamic_attributes1',this.dynamic_attributes1);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
