import { Component, OnInit ,Inject} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../../../../services/http-service.service';
import { CookieService } from 'ngx-cookie-service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  data: any;
  alldata:any
}

@Component({
  selector: 'app-quote-view',
  templateUrl: './quote-view.component.html',
  styleUrls: ['./quote-view.component.css']
})
export class QuoteViewComponent implements OnInit {
public quotedetails:any=[];
public quoteinfo:any={};
public userId:any;
public userType:any;
public totalqty:number=0;
public totaltax:number=0;
public totalprice:number=0;
public purchasemarkup:number=0;
public notes:string;
public quoteId:number;
public dateAdded:number;
public totalPurchasedPrice:number=0;
public savings:number=0;
  constructor(public dialog: MatDialog,public activatedRoute:ActivatedRoute,public http:HttpServiceService,public cookieService:CookieService,public _snackBar:MatSnackBar,public router:Router) {
    //console.log("Quote ID",this.activatedRoute.snapshot.params.id);
    //console.log("Hospital ID",this.activatedRoute.snapshot.params.hospitalid);
      // this.tableshow(); 
      let datasource:any='';
      // console.log(this.activatedRoute.params);
      // console.log(this.activatedRoute.snapshot.url[0].path,'1');
      // console.log(this.activatedRoute.snapshot.url[1].path,'2');
      // let urlsegments:any=this.router.parseUrl(this.router.routerState.snapshot.url);
      // console.log('urlsegments',urlsegments);
      if(this.activatedRoute.snapshot.url[1].path=='quote-view'){
        datasource='quoteviewasync';
      }
      if(this.activatedRoute.snapshot.url[1].path=='quote-comparison-view'){
        datasource='purchasequoteviewasync';
      }
      if(this.activatedRoute.snapshot.url[1].path=='inventory-listing-view'){
         datasource='quotelistingasync';
      }


    let userData = JSON.parse(this.cookieService.get('user_details'));
    this.userId = userData._id;
    this.userType = userData.type;


    let postData:any={
        "hospital_id":this.activatedRoute.snapshot.params.hospitalid,
        "id":this.activatedRoute.snapshot.params.id
    }
    this.http.httpViaPost(datasource, postData).subscribe((response: any) => {
    
    //console.log(response);
     if(response.status="success"){
      //console.log("quotedetails",response.quotedetails[0].inventory_details);
      //console.log("quoteinfo",response.quoteinfo[0]);
      this.quoteinfo=response.quoteinfo[0];
      this.purchasemarkup=response.countrysetvalue;
      this.quotedetails=response.quotedetails[0].inventory_details;
      this.notes=response.quotedetails[0].notes;
      this.quoteId=response.quotedetails[0].quote_id;
      this.dateAdded=response.quotedetails[0].date;
      for(let i in this.quotedetails){
        if(this.quotedetails[i].wholesaleprice==null) this.quotedetails[i].wholesaleprice=0;
        //this.quotedetails[i].price=null;


        
        if(this.quotedetails[i].price==null)this.quotedetails[i].price=((parseFloat(this.quotedetails[i].wholesaleprice)*(this.purchasemarkup/100))+parseFloat(this.quotedetails[i].wholesaleprice));
        if(this.quotedetails[i].subtotalprice==null)this.quotedetails[i].subtotalprice=((parseFloat(this.quotedetails[i].wholesaleprice)*(this.purchasemarkup/100))+(parseFloat(this.quotedetails[i].wholesaleprice))*this.quotedetails[i].quantity)+parseFloat(this.quotedetails[i].tax);
        if(this.quotedetails[i].tax==null) this.quotedetails[i].tax=0;
        this.totalqty=((this.totalqty)+parseFloat(this.quotedetails[i].quantity));
        this.totalprice=(this.totalprice)+parseFloat((this.quotedetails[i].subtotalprice));
        this.totaltax=(this.totaltax)+parseFloat(this.quotedetails[i].tax);
        this.totalPurchasedPrice=(this.totalPurchasedPrice)+parseFloat(this.quotedetails[i].purchased_price);
        this.savings=this.totalPurchasedPrice-this.totalprice;
      }
     }
    });

  }

  calculatevalue(){

    this.totalqty=0;
    this.totalprice=0;
    this.totaltax=0;
    this.totalPurchasedPrice=0;

    for(let i in this.quotedetails){
      if(this.quotedetails[i].wholesaleprice==null) this.quotedetails[i].wholesaleprice=0;

      if(this.quotedetails[i].price==null) this.quotedetails[i].price=((parseFloat(this.quotedetails[i].wholesaleprice)*(this.purchasemarkup/100))+parseFloat(this.quotedetails[i].wholesaleprice));
      this.quotedetails[i].subtotalprice=(this.quotedetails[i].price)*this.quotedetails[i].quantity+parseFloat(this.quotedetails[i].tax);
        this.totalqty=((this.totalqty)+parseFloat(this.quotedetails[i].quantity));
      //this.totalqty=((this.totalqty)+parseFloat(this.quotedetails[i].quantity));
      if(this.quotedetails[i].tax==null) this.quotedetails[i].tax=0;
      this.totalprice=(this.totalprice)+parseFloat((this.quotedetails[i].subtotalprice));
      this.totaltax=(this.totaltax)+parseFloat(this.quotedetails[i].tax);
      this.totalPurchasedPrice=(this.totalPurchasedPrice)+parseFloat(this.quotedetails[i].purchased_price);
      this.savings=this.totalPurchasedPrice-this.totalprice;
    }
    //console.log(this.savings);
   }

  ngOnInit() {
    
    if(this.userType!='admin') this.viewQuoteHeader= [ 'name', 'sku', 'category', 'brand', 'qty', 'price','subtotalprice'];
    if(this.activatedRoute.snapshot.url[1].path=='quote-comparison-view'){
      this.viewQuoteHeader.push('purchaseprice');
    }
    if(this.activatedRoute.snapshot.url[1].path=='inventory-listing-view'){
      this.viewQuoteHeader=[ 'name', 'sku', 'category', 'brand', 'qty', 'saleprice',];
    }
  }
  
 
  viewQuoteHeader: string[] = [ 'name', 'sku', 'category', 'brand', 'qty', 'price','tax','subtotalprice','wholesale'];
  


/**update quote with price */
  save(){

    let source:any='';

    if(this.activatedRoute.snapshot.url[1].path=='quote-view'){
      source='quote-details';
    }
    if(this.activatedRoute.snapshot.url[1].path=='quote-comparison-view'){
      source='purchase_comparison_quote-details';
      //console.log(this.quotedetails);
    }
    if(this.activatedRoute.snapshot.url[1].path=='inventory-listing-view'){
      source='quote_listing_details';
    }
    let postData={

      "source":source,
      "data":{
        "id":this.activatedRoute.snapshot.params.id,
        "inventory_details":this.quotedetails
      }
    }
    //console.log(postData);
    
    this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {
      if(response.status="success"){
      this._snackBar.open('Data Updated','', {
        duration: 2000,
      });
      /**purchase quote */
      if(this.router.routerState.snapshot.url=='/admin/quote-view'){
        this.router.navigateByUrl('/admin/managequotes/purchasequote/list');
      }

      if(this.router.routerState.snapshot.url=='/admin/quote-comparison-view'){
        this.router.navigateByUrl('/admin/managequotes/purchasquotelisting/list');
      }
      /**inventory listing quote */
      if(this.activatedRoute.snapshot.url[1].path=='inventory-listing-view'){
        this.router.navigateByUrl('/admin/managequotes/inventorylistingquote/list');
      }
    }
    })

  }


  showDetails(ele:any){
    // console.log(ele);
     
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
       panelClass:'viewquoteModal',
        data: {alldata: ele}
       
      });
  
      dialogRef.afterClosed().subscribe(result => {
        
        
      });
    
  }



}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: ['./quote-view.component.css']
})
export class DialogOverviewExampleDialog {
 
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      //console.log(data);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}