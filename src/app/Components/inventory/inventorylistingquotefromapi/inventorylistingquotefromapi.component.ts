import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MetaService } from '@ngx-meta/core';
export interface DialogData {
  data: any;
  alldata: any
}
@Component({
  selector: 'app-inventorylistingquotefromapi',
  templateUrl: './inventorylistingquotefromapi.component.html',
  styleUrls: ['./inventorylistingquotefromapi.component.css']
})
export class InventorylistingquotefromapiComponent implements OnInit {
  public inventoryfromApiForm: FormGroup;
  public userId: number;
  public userType: string;
  public inven: any = [];
  public InventoryDetailsFromApi: any = [];
  public InventoeryListDetails: any = [];
  public hospitalId: any;
  public hospitalDetails: any = [];
  public selectedValue: any;
  public flag: number = 0;
  public quote_id: number;
  public notes:string='';
  public invendetailsbyId:any;
  public searchCount:number;
  public searchString:string;

  constructor(public formBuilder: FormBuilder, public cookieService: CookieService, public http: HttpServiceService, public router: Router,
    public activatedRoute: ActivatedRoute, public _snackBar: MatSnackBar, public dialog: MatDialog, private readonly meta: MetaService) {
    let userData = JSON.parse(this.cookieService.get('user_details'));
    this.userId = userData._id;
    this.userType = userData.type;
    //console.log(this.userType,this.userId);
    this.generateForm();
    if (this.userType == 'admin') {
      let data = {
        "source": "users_view_hospital_withrepdetails"
      }
      this.http.httpViaPost('datalist', data).subscribe((response: any) => {
        //console.log(response);
        this.hospitalDetails = response.res;
      });
    }

    if (this.userType == 'salesrep') {
      let data = {
        "source": "users_view_hospital_withrepdetails",
        "condition": {
          "salesrepid_object": this.userId
        }
      }
      this.http.httpViaPost('datalist', data).subscribe((response: any) => {
        //console.log(response);
        this.hospitalDetails = response.res;
      });
    }
    if (this.userType == 'hospital') {
      let data: any;
      data = {
        'source': 'users_view',
        'condition': {
          '_id_object': this.userId
        }
      }
      this.http.httpViaPost('datalist', data).subscribe((response: any) => {
        //console.log(response);
        this.hospitalDetails = response.res;
      });
    }
    // for quote id
    this.http.httpViaPost('userid', undefined).subscribe((response: any) => {
      //console.log(response.userID);
      this.quote_id = response.userID;
    })
    if(this.activatedRoute.snapshot.params.listingquoteid){
       this.fetchAddedInventoryDetailsbyinventoryId();
    }


    this.meta.setTitle('MedWorldOne - Inventory Listing Quote From Api');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'MedWorldOne - Inventory Listing Quote From Api');
    this.meta.setTag('twitter:title', 'MedWorldOne - Inventory Listing Quote From Api');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-fb.png');
    this.meta.setTag('twitter:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-twitter.png');



  }

  ngOnInit() {
  }
  /**genarate form  inventoryfromApiForm*/
  generateForm() {
    this.inventoryfromApiForm = this.formBuilder.group({
      id: [null],
      inventory_name: [''],
    });
  }
 /**Fetch inventory details by quote id*/
 fetchAddedInventoryDetailsbyinventoryId() {
  let postData = {
    "source": "quote_listing_details_view",
    "condition": {
      "_id_object": this.activatedRoute.snapshot.params.listingquoteid
    }
  }
  this.http.httpViaPost('datalist', postData).subscribe((response: any) => {
    //console.log("fetch by id invenID", response.res);
    this.invendetailsbyId = response.res;
    this.InventoeryListDetails= response.res[0].inventory_details;
    //console.log(this.invendetailsbyId);
    this.notes=response.res[0].notes;
  })
  

}

  /**search  product */
  searchproduct() {

    let postData: any = {
      "api": this.inventoryfromApiForm.value.inventory_name
    }
    this.http.httpViaPost('getinventoryfromapi', postData).subscribe((response: any) => {
      //console.warn(response);
      if (response.status == true && response.messgae == 'Successfully send .') {
        //console.warn("search",response.res.body.hits.hits._source);

        this.inven = response.res.body.hits.hits;
        this.searchCount=response.res.body.hits.total;
        this.searchString=response.res.body.suggest.didYouMean[0].text;
          this.flag=1;
      }
    })
  }
  

  /**inventory Add */
  inventoryAdd(item: any) {
   // console.log(item);
    
    let itm:any=item._source;
    itm.quantity=1;
    itm.purchaseyear='';
    itm.cosmetic_condition='';
    itm.selling_timeframe='';
    itm.original_cost=0;
    itm.additional_information='';
    itm.listing_image=[];
    // item.saleprice = 1;

    this.InventoeryListDetails.push(itm);
    //console.log(this.InventoeryListDetails);

  }

  delete(index: number) {
    this.InventoeryListDetails.splice(index, index + 1);
  }

  /**select onchnage  */
  hhospitalName(data: any) {
    this.hospitalId = data;
    //console.log(data);
  }

  /**viewDetails */
  viewDetails(inventoryDetails: any) {
    //console.log(inventoryDetails);
    const dialogRef = this.dialog.open(listingquotedetails, {
      panelClass: 'viewlistingQuoteModal',
      data: { alldata: inventoryDetails }

    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
    /**add notes */
    note(searchValue: string): void {
      this.notes=searchValue;
      //console.log(this.notes);
    }
  /**get quote function */
  getquote() {
    //console.warn(this.InventoeryListDetails);
    if (this.hospitalId == undefined && this.hospitalId == null) {
      this._snackBar.open('Please Select a Medical Partner', '', {
        duration: 2000,
      });
      return;
    }
    
    var postData: any = {};

    for (let i in this.InventoeryListDetails) {
      if(this.InventoeryListDetails[i].publicDeviceRecordKey!=null) delete this.InventoeryListDetails[i].publicDeviceRecordKey
      if(this.InventoeryListDetails[i].publicVersionStatus!=null) delete this.InventoeryListDetails[i].publicVersionStatus
      if(this.InventoeryListDetails[i].deviceRecordStatus!=null) delete this.InventoeryListDetails[i].deviceRecordStatus
      if(this.InventoeryListDetails[i].deviceCommDistributionEndDate!=null) delete this.InventoeryListDetails[i].deviceCommDistributionEndDate
      if(this.InventoeryListDetails[i].publicVersionNumber!=null) delete this.InventoeryListDetails[i].publicVersionNumber
      if(this.InventoeryListDetails[i].devicePublishDate!=null) delete this.InventoeryListDetails[i].devicePublishDate
      if(this.InventoeryListDetails[i].deviceSizes!=null) delete this.InventoeryListDetails[i].deviceSizes
      if(this.InventoeryListDetails[i].complete_suggest!=null) delete this.InventoeryListDetails[i].complete_suggest
      if(this.InventoeryListDetails[i].deviceClass!=null) delete this.InventoeryListDetails[i].deviceClass
      if(this.InventoeryListDetails[i].implantFlag!=null) delete this.InventoeryListDetails[i].implantFlag
      if(this.InventoeryListDetails[i].publicVersionDate!=null) delete this.InventoeryListDetails[i].publicVersionDate

    }

    if(this.activatedRoute.snapshot.params.listingquoteid){
       postData = {
      "source": "quote_listing_details",
      "data": {
        "id": this.invendetailsbyId[0]._id,
        "inventory_details": this.InventoeryListDetails,
        "status": 1,
      }
    }
  }else{
    postData = {
      "source": "quote_listing_details",
      "data": {
        "inventory_details":this.InventoeryListDetails,
        "hospital_id": this.hospitalId,
        "user_id": this.userId,
        "notes":this.notes,
        "quote_id": this.quote_id,
        "status": 1
      },
      "sourceobj": ["hospital_id", "quoted_by", "user_id"]
    };
  }

   
  //console.warn(postData);

    this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {
      //console.log(response);
      if (response.status = "success") {
        this.InventoeryListDetails = [];
        this._snackBar.open('Thank You For Submitting A Inventory Listing Quote From Api Quote.', '', {
          duration: 2000,
        });
        /**salesrep route */
        if (this.userType == 'salesrep') {
          this.router.navigateByUrl('/salesrep/managequotes/inventorylistingquote/list');
        }
        /**hospital route */
        if (this.userType == 'hospital') {
          this.router.navigateByUrl('/hospital/managequotes/inventorylistingquote/list');
        }
        /**admin route */
        if (this.userType == 'admin') {
          this.router.navigateByUrl('/admin/managequotes/inventorylistingquote/list');
        }
      }
    });
  }

/**save quote */
savequote(){
    //console.warn(this.InventoeryListDetails);
    if (this.hospitalId == undefined && this.hospitalId == null) {
      this._snackBar.open('Please Select a Medical Partner', '', {
        duration: 2000,
      });
      return;
    }
    for (let i in this.InventoeryListDetails) {
      if(this.InventoeryListDetails[i].publicDeviceRecordKey!=null) delete this.InventoeryListDetails[i].publicDeviceRecordKey
      if(this.InventoeryListDetails[i].publicVersionStatus!=null) delete this.InventoeryListDetails[i].publicVersionStatus
      if(this.InventoeryListDetails[i].deviceRecordStatus!=null) delete this.InventoeryListDetails[i].deviceRecordStatus
      if(this.InventoeryListDetails[i].deviceCommDistributionEndDate!=null) delete this.InventoeryListDetails[i].deviceCommDistributionEndDate
      if(this.InventoeryListDetails[i].publicVersionNumber!=null) delete this.InventoeryListDetails[i].publicVersionNumber
      if(this.InventoeryListDetails[i].devicePublishDate!=null) delete this.InventoeryListDetails[i].devicePublishDate
      if(this.InventoeryListDetails[i].deviceSizes!=null) delete this.InventoeryListDetails[i].deviceSizes
      if(this.InventoeryListDetails[i].complete_suggest!=null) delete this.InventoeryListDetails[i].complete_suggest
      if(this.InventoeryListDetails[i].deviceClass!=null) delete this.InventoeryListDetails[i].deviceClass
      if(this.InventoeryListDetails[i].implantFlag!=null) delete this.InventoeryListDetails[i].implantFlag
      if(this.InventoeryListDetails[i].deviceCommDistributionEndDate!=null) delete this.InventoeryListDetails[i].deviceCommDistributionEndDate
      if(this.InventoeryListDetails[i].publicVersionDate!=null) delete this.InventoeryListDetails[i].publicVersionDate

    }

    var postData = {
      "source": "quote_listing_details",
      "data": {
        "inventory_details": this.InventoeryListDetails,
        "hospital_id": this.hospitalId,
        "user_id": this.userId,
        "notes":this.notes,
        "quote_id": this.quote_id,
        "status": 0
      },
      "sourceobj": ["hospital_id", "quoted_by", "user_id"]
    };
    //console.log("save listing quote",postData);
    this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {
      //console.log(response);
      if (response.status = "success") {
        this.InventoeryListDetails = [];
        this._snackBar.open('Thank You For Submitting A Inventory Listing Quote From Api Quote.', '', {
          duration: 2000,
        });
        /**salesrep route */
        if (this.userType == 'salesrep') {
          this.router.navigateByUrl('/salesrep/managequotes/inventorylistingquote/list');
        }
        /**hospital route */
        if (this.userType == 'hospital') {
          this.router.navigateByUrl('/hospital/managequotes/inventorylistingquote/list');
        }
        /**admin route */
        if (this.userType == 'admin') {
          this.router.navigateByUrl('/admin/managequotes/inventorylistingquote/list');
        }
      }
    });
}
/**add condition in modal */
addCondition(inventoryDetails:any){
  const dialogRef = this.dialog.open(addCondition, {
    panelClass: 'addconditiionModal',
    data: { alldata: inventoryDetails }
  });

  dialogRef.afterClosed().subscribe(result => {
    //console.log(">>>>", result);
  });
}
}

/**view details modal */
@Component({
  selector: 'listingquotedetails',
  templateUrl: 'listingquotefromapi.html',
  styleUrls: ['./inventorylistingquotefromapi.component.css']
})
export class listingquotedetails {

  constructor(
    public dialogRef: MatDialogRef<listingquotedetails>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    //console.log(data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

/**add condition modal */
@Component({
  selector: 'add-COndition',
  templateUrl: 'addconditionlink.html',
  styleUrls: ['./inventorylistingquotefromapi.component.css']
})
export class addCondition {
 //image upload 
 public configData: any = {
  baseUrl: "https://fileupload.influxhostserver.com/",
  endpoint: "uploads",
  size: "51200", // kb
  format: ["jpg", "jpeg", "png"], // use all small font
  type: "inventory-file",
  path: "files",
  prefix: "_inventory-file",
  formSubmit: false,
  conversionNeeded: 0,
  bucketName: "crmfiles.influxhostserver"
}

  public viewImages: any;
  constructor(
    public dialogRef: MatDialogRef<addCondition>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    //console.log(data);
  }
 
  img(){

  for (const loop in this.configData.files) {
    this.data.alldata.listing_image=
    this.data.alldata.listing_image.concat([
         this.configData.files[loop].upload.data.basepath + '/' + this.configData.path + '/' + this.configData.files[loop].upload.data.data.fileservername
    ]);
  }
      //console.log(this.data);
    this.onNoClick();
     
  }
  cancel(){
    // this.data.alldata.purchaseyear='';
    // this.data.alldata.cosmetic_condition='';
    // this.data.alldata.selling_timeframe='';
    // this.data.alldata.original_cost=0;
    // this.data.alldata.additional_information='';
    // this.data.alldata.listing_image=[];
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

