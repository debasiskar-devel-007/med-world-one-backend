import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  public notes:string;
  public invendetailsbyId:any;

  constructor(public formBuilder: FormBuilder, public cookieService: CookieService, public http: HttpServiceService, public router: Router,
    public activatedRoute: ActivatedRoute, public _snackBar: MatSnackBar, public dialog: MatDialog) {
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

          this.flag=1;
      }
    })
  }


  /**inventory Add */
  inventoryAdd(item: any) {
   // console.log(item);
    item.quantity = 1;
    item.saleprice = 1;

    this.InventoeryListDetails.push(item);
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
    //console.log(invenId);
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
   
         var listingDetails = {
        "device_name": this.InventoeryListDetails[i]._source.brandName +'('+this.InventoeryListDetails[i]._source.identifiers.identifier.deviceId+')',
        "companyName": this.InventoeryListDetails[i]._source.companyName,
        "brandname": this.InventoeryListDetails[i]._source.brandName,
        "device_id": this.InventoeryListDetails[i]._source.identifiers.identifier.deviceId,
        "quantity": this.InventoeryListDetails[i].quantity,
        "saleprice": this.InventoeryListDetails[i].saleprice
      };
      Finallistinginventory.push(listingDetails);
      
     
    }
    var Finallistinginventory = [];

    if(this.activatedRoute.snapshot.params.listingquoteid){
       postData = {
      "source": "quote_listing_details",
      "data": {
        "id": this.invendetailsbyId[0]._id,
        "inventory_details": Finallistinginventory,
        "status": 1,
      }
    }
  }else{
    postData = {
      "source": "quote_listing_details",
      "data": {
        "inventory_details": Finallistinginventory,
        "hospital_id": this.hospitalId,
        "user_id": this.userId,
        "notes":this.notes,
        "quote_id": this.quote_id,
        "status": 1
      },
      "sourceobj": ["hospital_id", "quoted_by", "user_id"]
    };
  }

   
  console.warn(postData);
  return;
    this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {
      //console.log(response);
      if (response.status = "success") {
        this.InventoeryListDetails = [];
        this._snackBar.open('Thank You For Submitting A Listing Inventory Quote.', '', {
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
    var Finallistinginventory = [];
    for (let i in this.InventoeryListDetails) {
      var listingDetails = {
        "device_name": this.InventoeryListDetails[i]._source.brandName +'('+this.InventoeryListDetails[i]._source.identifiers.identifier.deviceId+')',
        "companyName": this.InventoeryListDetails[i]._source.companyName,
        "brandname": this.InventoeryListDetails[i]._source.brandName,
        "device_id": this.InventoeryListDetails[i]._source.identifiers.identifier.deviceId,
        "quantity": this.InventoeryListDetails[i].quantity,
        "saleprice": this.InventoeryListDetails[i].saleprice
      };
      Finallistinginventory.push(listingDetails);
    }

    var postData = {
      "source": "quote_listing_details",
      "data": {
        "inventory_details": Finallistinginventory,
        "hospital_id": this.hospitalId,
        "user_id": this.userId,
        "notes":this.notes,
        "quote_id": this.quote_id,
        "status": 0
      },
      "sourceobj": ["hospital_id", "quoted_by", "user_id"]
    };
    console.log("save listing quote",postData);
    this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {
      //console.log(response);
      if (response.status = "success") {
        this.InventoeryListDetails = [];
        this._snackBar.open('Thank You For Submitting A Listing Inventory Quote.', '', {
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