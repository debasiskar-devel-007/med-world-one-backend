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
  public ids:any=[];
  public hospitalId:any;
  public selectedValue: string;
  public userType:any;
  public hospitalDetails: any = [];
  constructor(public router:Router,public cookieService: CookieService, public httpServiceService: HttpServiceService,public _snackBar: MatSnackBar,
    private readonly meta: MetaService) {
      let userData = JSON.parse(this.cookieService.get('user_details'));
      this.userId = userData._id;
      this.userType = userData.type;

     if(this.userType=='admin'){
      let data = {
        "source": "users_view_hospital_withrepdetails"
      }
      this.httpServiceService.httpViaPost('datalist', data).subscribe((response: any) => {
        //console.log(response);
        this.hospitalDetails=response.res;
      });
     }

     if(this.userType=='salesrep'){
      let data = {
        "source": "users_view_hospital_withrepdetails",
        "condition":{
          "salesrepid_object":this.userId
        }
      }
      this.httpServiceService.httpViaPost('datalist', data).subscribe((response: any) => {
        //console.log(response);
        this.hospitalDetails=response.res;
      });
     }
        
        this.qouteDetails();

        this.meta.setTitle('MedWorldOne - Purchase Comparison Cart List');
        this.meta.setTag('og:description', '');
        this.meta.setTag('twitter:description', '');
    
        this.meta.setTag('og:keyword', '');
        this.meta.setTag('twitter:keyword', '');
    
        this.meta.setTag('og:title', 'MedWorldOne - Purchase Comparison Cart List');
        this.meta.setTag('twitter:title', 'MedWorldOne - Purchase Comparison Cart List');
        this.meta.setTag('og:type', 'website');
        this.meta.setTag('og:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-fb.png');
        this.meta.setTag('twitter:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-twitter.png');

        
     }

  ngOnInit() {
  }
  /**get quote details respect user id */
  qouteDetails(){
    let data = {
      "source": "purchase_comparison_quote_view",
      "condition": {
        "user_id_object": this.userId
      }
    }
    this.httpServiceService.httpViaPost('datalist', data).subscribe((response: any) => {
      let result:any
      result=response.res;
      for(let i in result){
        result[i].quantity=1;
      }
      
      this.inventoryDetailsByUserId = result;
    //console.log(this.inventoryDetailsByUserId);
    });
  }


  plus(i: any) {

    if(this.inventoryDetailsByUserId[i].quantity==null)this.inventoryDetailsByUserId[i].quantity=1;
    this.inventoryDetailsByUserId[i].quantity += 1;
  }
  minus(i: any) {
   
    if (this.inventoryDetailsByUserId[i].quantity > 1) this.inventoryDetailsByUserId[i].quantity -= 1;
  }

   /**add notes */
   note(searchValue: string): void { 
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

          if (this.userType=='admin' && this.hospitalId == undefined) {
          this._snackBar.open('please select hospital','', {
            duration: 1000,
          });
         return;
        } 
        if (this.userType=='salesrep' && this.hospitalId == undefined) {
          this._snackBar.open('please select hospital','', {
            duration: 1000,
          });
         return;
        } 
        if (this.userType=='hospital') {
          this.hospitalId=this.userId;
        
        }

          let postData = {
            "source": "purchase_comparison_quote-details",
            "data":{
            "inventory_details": this.inventoryDetailsByUserId,
            "hospital_id": this.hospitalId,
            "quoted_by": this.userId,
            "notes":this.notes,
            "status":1
            },
            "sourceobj":["hospital_id","quoted_by"]
          };
    
          //console.log(postData);
          
          for(let i in this.inventoryDetailsByUserId){
              
              this.ids.push(this.inventoryDetailsByUserId[i]._id);
          }
          //console.log(this.ids);
        
          let deleteData={
            "source": "purchase_comparison_quote",
            "ids":this.ids
          }
          //console.log(deleteData);
          this.httpServiceService.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {
            //console.log(response);
            if(response.status="success"){
    
              this.httpServiceService.httpViaPost('deletesingledatamany', deleteData).subscribe((response: any) => {
                if(response.status="success"){
                  this._snackBar.open('Your Quote Submitted Successfully','', {
                    duration: 3000,
                  });
                  this.router.navigateByUrl('/admin/inventory/purchase-comparison-search-list');
                }
              })  
    
            }
          })
     

    }
}
