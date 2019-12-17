import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../../../services/http-service.service';
import { CookieService } from 'ngx-cookie-service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MetaService } from '@ngx-meta/core';
@Component({
  selector: 'app-purchasecomparisoncart',
  templateUrl: './purchasecomparisoncart.component.html',
  styleUrls: ['./purchasecomparisoncart.component.css']
})
export class PurchasecomparisoncartComponent implements OnInit {
  public userId:any;
  public inventoryDetailsByUserId:any=[];
  public notes:any;
  public ids:any;
  public hospitalId:any;
  public selectedValue: string;
  public userType:any;
  constructor(public router:Router,public cookieService: CookieService, public httpServiceService: HttpServiceService,public _snackBar: MatSnackBar,
    public readonly meta: MetaService) {
      let userData = JSON.parse(this.cookieService.get('user_details'));
      this.userId = userData._id;
      this.userType = userData.type;
      //console.log(this.userId,this.userType);
     
        let data = {
          "source": "purchase_comparison_quote_view",
          "condition": {
            "user_id_object": this.userId
          }
        }
        this.httpServiceService.httpViaPost('datalist', data).subscribe((response: any) => {
          this.inventoryDetailsByUserId = response.res;
          console.log(response);
        });
      
     }

  ngOnInit() {
  }

  plus(i: any) {
    this.inventoryDetailsByUserId[i].quantity += 1;
  }
  minus(i: any) {
   
    if (this.inventoryDetailsByUserId[i].quantity > 1) this.inventoryDetailsByUserId[i].quantity -= 1;
  }

   /**add notes */
   onSearchChange(searchValue: string): void { 
    this.notes=searchValue;
    //console.log(this.notes);
  }

  /**remove inventory */
  remove(id:any,indx:any){
    //console.log(id,indx);
    let data={"source": "purchase_comparison_quote",
                "id":id            
  }
    this.httpServiceService.httpViaPost('deletesingledata', data).subscribe((response: any) => {
        //console.log(response);
        if(response.status=="success"){
          this.inventoryDetailsByUserId.splice(indx, indx + 1);
        }
      })
  }

    /**select onchnage  */
    hospitalName(data: any) {
      this.hospitalId = data;
      //console.log(data);
    }
    /**get quote function */
    getQuote() {
       
          let postData = {
            "source": "quote-details",
            "data":{
            "inventory_details": this.inventoryDetailsByUserId,
            "hospital_id": this.hospitalId,
            "quoted_by": this.userId,
            "notes":this.notes,
            "status":0
            },
            "sourceobj":["hospital_id","quoted_by"]
          };
    
          //console.log(postData);
          for(let i in this.inventoryDetailsByUserId){
              
              this.ids.push(this.inventoryDetailsByUserId[i]._id);
          }
          //console.log(this.ids);
    
        
          // let deleteData={
          //   "source": "quote",
          //   "ids":this.ids
          // }
          //console.log(deleteData);
          // this.httpServiceService.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {
          //   //console.log(response);
          //   if(response.status="success"){
    
          //     // this.httpServiceService.httpViaPost('deletesingledatamany', deleteData).subscribe((response: any) => {
          //     //   if(response.status="success"){
          //     //     this._snackBar.open('Your Quote Submitted Successfully','', {
          //     //       duration: 3000,
          //     //     });
          //     //     this.router.navigateByUrl('/inventory');
          //     //   }
          //     // })  
    
          //   }
          // })
    
  
        
    
  

    }
}
