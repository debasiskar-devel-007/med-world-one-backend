import { Component, OnInit,Inject} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../../../services/http-service.service';
import { CookieService } from 'ngx-cookie-service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  public inventoryCatagoryList: any={};
  public categoryList: any = [];
  public brandList: any = [];
  public user_id:any;
  constructor(public dialog: MatDialog,public cookieService:CookieService,public activatedRoute: ActivatedRoute, public router: Router, public httpServiceService: HttpServiceService) { }


  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      this.inventoryCatagoryList = resolveData.inventoryList.inventory;
      this.categoryList = resolveData.inventoryList.category;
      this.brandList = resolveData.inventoryList.brands;
      //  console.log(resolveData.inventoryList.category);
      //console.log(resolveData.inventoryList.inventory);
      //  console.log(resolveData.inventoryList.brands);
    });
  }

  /**view details page with respective id */
  viewDetails(val: any) {
    this.router.navigateByUrl('/inventory-details/' + val);
  }

  /**search Catagory Function */
  searchCatagory(catId: any) {
    console.log("search Catagory ID" + '   ' + catId);
    let postData = {
      "source": "inventory_category_view",
      condition: { "parent_object": catId }
    };
    this.httpServiceService.httpViaPost('datalist', postData).subscribe((res: any) => { console.log(res) })
  }


  /**search Brand Function */
  searchBrand(brandId: any) {
    // console.log("search brand ID" + '   ' + brandId);
    let postData = {
      "source": "inventories_list_view",
      condition: { "brand_id_object":brandId}
    };
    this.httpServiceService.httpViaPost('datalist', postData).subscribe((res: any) => {
       this.inventoryCatagoryList = res.res;
      // console.log(res);
    })
  }


  /**inventory search */
  search(event: any) {
    // console.log("search by Inventory name"+'   '+event.toLowerCase( ));
    let postData = {
      "source": "inventories_list_view",
      condition: { "inventory_search_regex": event.toLowerCase() }
    };
    this.httpServiceService.httpViaPost('datalist', postData).subscribe((res: any) => {
      this.inventoryCatagoryList = res.res;
      //console.log(res)
    })
  }




/*****Add addQuote function ******/
addQuote(invenId: any){
if(this.cookieService.get('user_details')!='' && this.cookieService.get('user_details')!=null &&  this.cookieService.get('user_details')!= undefined ){
  let user=JSON.parse(this.cookieService.get('user_details'));
  this.user_id=user._id;
  // console.log("user_id"+' '+this.user_id);
  // console.log("inventory_id"+' '+invenId);
  // console.log("quantity"+' '+1);

    let postData={ "source": "quote",
  "data": {
    "inventory":invenId,
    "user_id":this.user_id,
    "quantity":1,
  },
  "sourceobj":["user_id","inventory"],
};
 this.httpServiceService.httpViaPost('addorupdatedata',postData).subscribe((res:any)=>{
  console.log(res);
 })
 
}else{
  // console.log("Please Log IN");
  this.openDialog();
  //  this.router.navigateByUrl('/login'+this.router.url);
  //  console.log('/login'+this.router.url)
}

}




/*******************Open Login Modal ********************************/
openDialog(): void {
  const dialogRef = this.dialog.open(Dialoglogin, {
    width: '550px',
  });

  dialogRef.afterClosed().subscribe(result => {
  });
}
/***************************************************** */


}

/** Login Modal*/
@Component({
  selector: 'Dialoglogin',
  templateUrl: 'login.html',
})
export class Dialoglogin {

  constructor(
    public dialogRef: MatDialogRef<Dialoglogin>,public router: Router,
    @Inject(MAT_DIALOG_DATA)public DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  acceptToLoginPage(){
    this.router.navigateByUrl('/login'+this.router.url);
    this.onNoClick();
  }

}