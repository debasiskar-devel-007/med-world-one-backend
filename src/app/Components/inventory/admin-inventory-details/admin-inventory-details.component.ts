import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from '../../../services/http-service.service';
import { CookieService } from 'ngx-cookie-service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-admin-inventory-details',
  templateUrl: './admin-inventory-details.component.html',
  styleUrls: ['./admin-inventory-details.component.css']
})
export class AdminInventoryDetailsComponent implements OnInit {
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


  constructor(public activatedRoute: ActivatedRoute, public router: Router,public httpServiceService: HttpServiceService, public cookieService: CookieService, public dialog: MatDialog) {
    let url: any = {};
    url = this.activatedRoute.snapshot.params._id;
    let data: any = {
      "source": "inventories_list_view",
      "condition": {
        "_id_object": url
      },
    };
    this.httpServiceService.httpViaPost('datalist', data).subscribe((result: any) => {

      this.inventoryDetails = result.res[0];
      this.dynamic_attributes = result.res[0].dynamic_attributes;


      let dynamic_attributes1 = [];

      for (let i in this.dynamic_attributes) {

        this.dynamic_attributes1.push({ key: Object.keys(this.dynamic_attributes[i])[0], value: Object.values(this.dynamic_attributes[i])[0] })
        //this.dynamic_attributes1.push((this.dynamic_attributes[i]))
      }
    })
  }

  ngOnInit() {
  }

  /*****Add addQuote function ******/
  addQuote(listInven: any) {
    
    if (this.cookieService.get('user_details') != '' && this.cookieService.get('user_details') != null && this.cookieService.get('user_details') != undefined) {
      let user = JSON.parse(this.cookieService.get('user_details'));
      this.user_id = user._id;
     

      let postData = {
        "source": "purchase_comparison_quote",
        "data": {
          "inventory_details": listInven,
          "user_id": this.user_id,
          "quantity": this.amount,
        },
        "sourceobj": ["user_id", "inventory"],
      };
    
      this.httpServiceService.httpViaPost('addorupdatedata', postData).subscribe((res: any) => {
     
      })

    } else {
      
    }
  }

  /**add and delete quentity */
  addToqty(){
    this.amount=this.amount+1;
  
  }
  removeItem(){
    this.amount=this.amount-1;
    
   }


  /***************************************************** */
}


