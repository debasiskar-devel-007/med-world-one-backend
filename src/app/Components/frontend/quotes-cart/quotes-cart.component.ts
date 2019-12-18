import { Component, OnInit,Inject} from '@angular/core';
import { HttpServiceService } from '../../../services/http-service.service';
import { CookieService } from 'ngx-cookie-service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MetaService } from '@ngx-meta/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {

}
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
  public selectedValue: string;
  public noteValue:any;
  public ids:any=[];
  public notes:string;
  constructor(public router:Router,public dialog: MatDialog,public cookieService: CookieService, public httpServiceService: HttpServiceService,public _snackBar: MatSnackBar,private readonly meta: MetaService) {

      this.meta.setTitle('MD Stock International - quotes cart');
      this.meta.setTag('og:description', 'MD Stock International is the Medical Equipment & Supplies Partner you want for Top-Quality On-Demand Supplies, Direct-to-Manufacturer Purchases and much more.');
      this.meta.setTag('twitter:description', 'MD Stock International is the Medical Equipment & Supplies Partner you want for Top-Quality On-Demand Supplies, Direct-to-Manufacturer Purchases and much more.');

      this.meta.setTag('og:keyword', 'Medical Equipment $ Supplies Partner, Direct-to-Manufacturer Purchases, Top-Quality On-Demand Supplies, Buy & Sell Medical Equipment');
      this.meta.setTag('twitter:keyword', 'Medical Equipment $ Supplies Partner, Direct-to-Manufacturer Purchases, Top-Quality On-Demand Supplies, Buy & Sell Medical Equipment');

      this.meta.setTag('og:title', 'MD Stock International - quotes cart');
      this.meta.setTag('twitter:title', 'MD Stock International - quotes cart');
      this.meta.setTag('og:type', 'website');
      this.meta.setTag('og:image', 'https://dev.mdstockinternational.com/assets/images/logo.png');
      this.meta.setTag('twitter:image', 'https://dev.mdstockinternational.com/assets/images/logo.png');


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

  plus(i: any) {
    this.amount = this.amount + 1;
    this.inventoryDetailsByUserId[i].quantity += 1;
  }
  minus(i: any) {
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
        //console.log(res);

      })
    }
  }
  /**select onchnage  */
  hospitalName(data: any) {
    this.hospitalId = data;
    //console.log(data);
  }

  /**add notes */
  onSearchChange(searchValue: string): void { 
    this.notes=searchValue;
    //console.log(this.notes);
  }

  /**get quote function */
  getQuote() {
    
    /**if sales */
    if(this.userType=='salesrep'){

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
  
  
  
        let deleteData={
          "source": "quote",
          "ids":this.ids
        }
        //console.log(deleteData);
        this.httpServiceService.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {
          //console.log(response);
          if(response.status="success"){
              this.openDialog();
  
            this.httpServiceService.httpViaPost('deletesingledatamany', deleteData).subscribe((response: any) => {
              
            })
            
  
  
          }
        })
  
  
      }
    }

    /**if hospital */
    if(this.userType=='hospital'){
       
      let postData = {
        "source": "quote-details",
        "data":{
        "inventory_details": this.inventoryDetailsByUserId,
        "hospital_id": this.userId,
        "quoted_by": this.userId,
         "notes":this.notes,
        "status":0
        },
        "sourceobj":["hospital_id","quoted_by"]
      };

      console.log(postData);
      for(let i in this.inventoryDetailsByUserId){
          
          this.ids.push(this.inventoryDetailsByUserId[i]._id);
      }
      //console.log(this.ids);



      let deleteData={
        "source": "quote",
        "ids":this.ids
      }
      //console.log(deleteData);
      this.httpServiceService.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {
        //console.log(response);
        if(response.status="success"){
          this.openDialog();

          this.httpServiceService.httpViaPost('deletesingledatamany', deleteData).subscribe((response: any) => {
           
          })
          


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

  /*******************Open Susses Modal********************************/
  openDialog(): void {
    const dialogRef = this.dialog.open(Dialoggetquote, {
      panelClass: 'Login_confirm',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  /***************************************************** */

}

/** susess Modal*/
@Component({
  selector: 'Dialoggetquote',
  templateUrl: 'success.html',
})
export class Dialoggetquote {

  constructor(
    public dialogRef: MatDialogRef<Dialoggetquote>, public router: Router,
    @Inject(MAT_DIALOG_DATA) public DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  goToinventoryPage(){
    this.router.navigateByUrl('/inventory');
  }
  goTodashboardPage(){
    this.router.navigateByUrl('/dashboard-admin');
  }
}