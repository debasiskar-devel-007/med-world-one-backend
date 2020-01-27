import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from '../../../services/http-service.service';
import { CookieService } from 'ngx-cookie-service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MetaService } from '@ngx-meta/core';
export interface DialogData {
}

@Component({
  selector: 'app-inventory-details',
  templateUrl: './inventory-details.component.html',
  styleUrls: ['./inventory-details.component.css']
})
export class InventoryDetailsComponent implements OnInit {
  public inventoryDetails: any = {};
  public dynamic_attributes: any;
  public dynamic_attributes1: any = [];
  public user_id: any;
  public amount:number=1;
  public isDesable:boolean=false;

  public show:boolean = false;
  public buttonName:any = '+ see more details ';

  viewDetails() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)
      this.buttonName = "- see Less details ";
    else
      this.buttonName = "+ see more details ";
  }


  constructor(public activatedRoute: ActivatedRoute, public router: Router,public httpServiceService: HttpServiceService, public cookieService: CookieService, public dialog: MatDialog, private readonly meta: MetaService) {

      this.meta.setTitle('MD Stock International - Inventory Details');
      this.meta.setTag('og:description', 'Find Hospital and Laboratory Equipment, easily and conveniently, from an Inventory listing that comprises of thousands of different items from various top brands in the industry.');
      this.meta.setTag('twitter:description', 'Find Hospital and Laboratory Equipment, easily and conveniently, from an Inventory listing that comprises of thousands of different items from various top brands in the industry.');

      this.meta.setTag('og:keyword', 'Inventory Listing for Hospital Equipment, Find Used Medical Equipment, Premium Medical Equipment Inventory');
      this.meta.setTag('twitter:keyword', 'Inventory Listing for Hospital Equipment, Find Used Medical Equipment, Premium Medical Equipment Inventory');

      this.meta.setTag('og:title', 'MD Stock International - Inventory Details');
      this.meta.setTag('twitter:title', 'MD Stock International - Inventory Details');
      this.meta.setTag('og:type', 'website');
      this.meta.setTag('og:image', 'https://dev.mdstockinternational.com/assets/images/logo.png');
      this.meta.setTag('twitter:image', 'https://dev.mdstockinternational.com/assets/images/logo.png');


    let url: any = {};
    url = this.activatedRoute.snapshot.params.id;
    let data: any = {
      "source": "inventories_list_view_async",
      "condition": {
        "_id_object": url
      },
    };
    //console.warn(data);

    this.httpServiceService.httpViaPost('datalist', data).subscribe((result: any) => {
      //console.warn(result);
      this.inventoryDetails = result.res[0];
      this.dynamic_attributes = result.res[0].dynamic_attributes;


      let dynamic_attributes1 = [];

      for (let i in this.dynamic_attributes) {

        this.dynamic_attributes1.push({ key: Object.keys(this.dynamic_attributes[i])[0], value: Object.values(this.dynamic_attributes[i])[0] })
        //this.dynamic_attributes1.push((this.dynamic_attributes[i]))
      }
      //console.log('this.dynamic_attributes1',this.dynamic_attributes1);
    })
  }

  ngOnInit() {
  }

  /*****Add addQuote function ******/
  addQuote(invenId: any) {
    if (this.cookieService.get('user_details') != '' && this.cookieService.get('user_details') != null && this.cookieService.get('user_details') != undefined) {
      let user = JSON.parse(this.cookieService.get('user_details'));
      this.user_id = user._id;
      // console.log("user_id"+' '+this.user_id);
      // console.log("inventory_id"+' '+invenId);
      // console.log("quantity"+' '+1);

      let postData = {
        "source": "quote",
        "data": {
          "inventory": invenId,
          "user_id": this.user_id,
          "quantity": this.amount,
        },
        "sourceobj": ["user_id", "inventory"],
      };
      //console.log(postData);
      this.httpServiceService.httpViaPost('addorupdatedata', postData).subscribe((res: any) => {
        //console.log(res);
      })

    } else {
      // console.log("Please Log IN");
      this.openDialog();
      //  this.router.navigateByUrl('/login'+this.router.url);
       //console.log('/login'+this.router.url)
    }
  }

  /**add and delete quentity */
  addToqty(){
    this.amount=this.amount+1;
    // console.log(this.amount)
  }
  removeItem(){
    this.amount=this.amount-1;
    // console.log(this.amount)
   }

  /*******************Open Login Modal ********************************/
  openDialog(): void {
    const dialogRef = this.dialog.open(Dialogloginn, {
      width: '550px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  /***************************************************** */
}


/** Login Modal*/
@Component({
  selector: 'Dialoglogin',
  templateUrl: '../inventory/login.html',
})
export class Dialogloginn {

  constructor(
    public dialogRef: MatDialogRef<Dialogloginn>, public router: Router,
    @Inject(MAT_DIALOG_DATA) public DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  acceptToLoginPage() {
    this.router.navigateByUrl('/login' + this.router.url);
    this.onNoClick();
  }

}
