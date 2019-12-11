import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../../services/http-service.service';
import { CookieService } from 'ngx-cookie-service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-quotes-cart',
  templateUrl: './quotes-cart.component.html',
  styleUrls: ['./quotes-cart.component.css']
})
export class QuotesCartComponent implements OnInit {
  public inventoryDetailsByUserId: any = [];
  public qouteCount: number;
  public amount: number = 1;
  public userId: any;
  public userType: any;
  public hospitalDetails: any = [];
  public hospitalId: any;
  selectedValue: string;

  constructor(public cookieService: CookieService, public httpServiceService: HttpServiceService,public _snackBar: MatSnackBar) {
    let userData = JSON.parse(this.cookieService.get('user_details'));
    this.userId = userData._id;
    this.userType = userData.type;
    //console.log(this.userId,this.userType);
    if (this.userType == 'salesrep') {
      let data = {
        "source": "users_view",
        "condition": {
          "salesrepselect_object": this.userId
        }
      }
      this.httpServiceService.httpViaPost('datalist', data).subscribe((response: any) => {

        this.hospitalDetails = response.res;
        //console.log(this.hospitalDetails);
      })
    }
    this.qouteDetails();
  }

  ngOnInit() {
  }

  plus(item: any, i: any) {
    this.amount = this.amount + 1;
    this.inventoryDetailsByUserId[i].quantity += 1;
  }
  minus(item: any, i: any) {
    this.amount = this.amount - 1;
    if (this.inventoryDetailsByUserId[i].quantity > 1) this.inventoryDetailsByUserId[i].quantity -= 1;
  }

  /**fetch user inventory details */
  qouteDetails() {
    if (this.cookieService.get('user_details') != '' && this.cookieService.get('user_details') != null && this.cookieService.get('user_details') != undefined) {
      let user = JSON.parse(this.cookieService.get('user_details'));
      let postData = {
        "source": "quote_view",
        "condition": {
          "user_id_object": user._id
        },
      };
      this.httpServiceService.httpViaPost('datalist', postData).subscribe((res: any) => {
        this.inventoryDetailsByUserId = res.res;
        this.qouteCount = res.resc;
        console.log(res);

      })
    }
  }
  /**select onchnage  */
  hospitalName(data: any) {
    this.hospitalId = data;
    //console.log(data);
  }


  /**get quote function */
  getQuote() {
    /**if sales */
    if (this.userType=='salesrep' && this.hospitalId == undefined) {
      this._snackBar.open('please select hospital','', {
        duration: 1000,
      });
    } 
    else {
      let postData = {
        "source": "quote-details",
        "data":{
        "inventory_details": this.inventoryDetailsByUserId,
        "hospital_id": this.hospitalId,
        "quoted_by": this.userId
        }
      };
      //console.log(data);
      this.httpServiceService.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {
        console.log(response);
        if(response.status="success"){
          this._snackBar.open('Your Quote Submitted Successfully','', {
            duration: 2000,
          });
        }
      })
    }

  }


  /**remove inventory */
  remove(id:any,indx:any){
    //console.log(id,indx);
    let data={"source": "quote",
                "id":id            
  }
    this.httpServiceService.httpViaPost('deletesingledata', data).subscribe((response: any) => {
        //console.log(response);
        if(response.status=="success"){
          this.inventoryDetailsByUserId.splice(indx, indx + 1);
        }
      })
  }

}
