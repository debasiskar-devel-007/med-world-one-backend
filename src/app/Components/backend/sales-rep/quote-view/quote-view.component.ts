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
public Package_Details:any=[];
public save_inventoery_details:any=[];
public Package_all_total:number;
// public totalSellprice:number=0;
public totalQuotedprice:number=0;
public totalWholesellprice:number=0;
  constructor(public dialog: MatDialog,public activatedRoute:ActivatedRoute,public http:HttpServiceService,public cookieService:CookieService,public _snackBar:MatSnackBar,public router:Router) {
    //console.log("Quote ID",this.activatedRoute.snapshot.params.id);
    //console.log("Hospital ID",this.activatedRoute.snapshot.params.hospitalid);
      // this.tableshow(); 
      let datasource:any='';
     
      // console.log(this.activatedRoute.snapshot.url[0].path,'1');
      // console.log(this.activatedRoute.snapshot.url[1].path,'2');
      // let urlsegments:any=this.router.parseUrl(this.router.routerState.snapshot.url);
     
      let userData = JSON.parse(this.cookieService.get('user_details'));
      this.userId = userData._id;
      this.userType = userData.type;
      if(this.activatedRoute.snapshot.url[1].path=='quote-view'){
        datasource='quoteviewasync';
      }
      if(this.activatedRoute.snapshot.url[1].path=='quote-comparison-view'){
        datasource='purchasequoteviewasync';
      }
      if(this.activatedRoute.snapshot.url[1].path=='inventory-listing-view'){
         datasource='quotelistingasync';
      }
      if(this.activatedRoute.snapshot.url[1].path=='quote-package-view'){
        datasource='packagelistingasync';
     }



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
      this.Package_Details=response.quotedetails[0].package_details;
      for(let i in this.quotedetails){
        if(this.quotedetails[i].wholesaleprice==null) this.quotedetails[i].wholesaleprice=0;
        //this.quotedetails[i].price=null;

        
        if(this.quotedetails[i].price==null)this.quotedetails[i].price=((parseFloat(this.quotedetails[i].wholesaleprice)*(this.purchasemarkup/100))+parseFloat(this.quotedetails[i].wholesaleprice));
        if(this.quotedetails[i].subtotalprice==null)this.quotedetails[i].subtotalprice=((parseFloat(this.quotedetails[i].wholesaleprice)*(this.purchasemarkup/100))+(parseFloat(this.quotedetails[i].wholesaleprice))*this.quotedetails[i].quantity)+parseFloat(this.quotedetails[i].tax);
        if(this.quotedetails[i].tax==null) this.quotedetails[i].tax=0;
        this.totalWholesellprice=this.totalWholesellprice+parseFloat(this.quotedetails[i].wholesaleprice);

        if(this.quotedetails[i].quotedprice_admin==null) this.quotedetails[i].quotedprice_admin=0;
        this.totalQuotedprice=this.totalQuotedprice+this.quotedetails[i].quotedprice_admin;

        // if(this.quotedetails[i].saleprice==null)this.quotedetails[i].saleprice=0;
        // this.totalSellprice=this.totalSellprice+this.quotedetails[i].saleprice;
        if(this.quotedetails[i].quotedprice==null)this.quotedetails[i].quotedprice=0;
      if(this.quotedetails[i].tax_for_other==null)this.quotedetails[i].tax_for_other=0;

        this.totalqty=((this.totalqty)+parseFloat(this.quotedetails[i].quantity));
        this.totalprice=(this.totalprice)+parseFloat((this.quotedetails[i].subtotalprice));
        this.totaltax=(this.totaltax)+parseFloat(this.quotedetails[i].tax);
        this.totalPurchasedPrice=(this.totalPurchasedPrice)+parseFloat(this.quotedetails[i].purchased_price);
        this.savings=this.totalPurchasedPrice-this.totalprice;

              if(this.Package_Details!=null){
                this.Package_all_total=this.Package_Details.package_quantity*this.totalprice;
              } 
                    
            }
           
     }
    });

  }

  calculatevalue(){

    this.totalqty=0;
    this.totalprice=0;
    this.totaltax=0;
    this.totalPurchasedPrice=0;
    this.totalQuotedprice=0;

    for(let i in this.quotedetails){
      if(this.quotedetails[i].wholesaleprice==null) this.quotedetails[i].wholesaleprice=0;

      if(this.quotedetails[i].price==null) this.quotedetails[i].price=((parseFloat(this.quotedetails[i].wholesaleprice)*(this.purchasemarkup/100))+parseFloat(this.quotedetails[i].wholesaleprice));
      this.quotedetails[i].subtotalprice=(this.quotedetails[i].price)*this.quotedetails[i].quantity+parseFloat(this.quotedetails[i].tax);
        this.totalqty=((this.totalqty)+parseFloat(this.quotedetails[i].quantity));

      if(this.quotedetails[i].quotedprice_admin==null) this.quotedetails[i].quotedprice_admin=0;
      this.totalQuotedprice=this.totalQuotedprice+this.quotedetails[i].quotedprice_admin;

      

      if(this.quotedetails[i].tax==null) this.quotedetails[i].tax=0;
      this.totalprice=(this.totalprice)+parseFloat((this.quotedetails[i].subtotalprice));
      this.totaltax=(this.totaltax)+parseFloat(this.quotedetails[i].tax);
      this.totalPurchasedPrice=(this.totalPurchasedPrice)+parseFloat(this.quotedetails[i].purchased_price);
      this.savings=this.totalPurchasedPrice-this.totalprice;
      if(this.Package_Details!=null && this.Package_Details.length>0){
      this.Package_all_total=this.Package_Details.package_quantity*this.totalprice;
      }
    }
   
    //console.log(this.savings);
   }

  ngOnInit() {
    
    if(this.userType!='admin') this.viewQuoteHeader= [ 'name', 'sku', 'category', 'brand', 'qty', 'price','tax','subtotalprice'];
    if(this.activatedRoute.snapshot.url[1].path=='quote-comparison-view'){
      this.viewQuoteHeader.push('purchaseprice');
    }
    // if(this.activatedRoute.snapshot.url[1].path=='quote-package-view'){
    //   this.viewQuoteHeader.push('tax');
    // }
    if(this.activatedRoute.snapshot.url[1].path=='inventory-listing-view'){
      this.viewQuoteHeader=[ 'name', 'company','version','uid', 'qty','tax_admin','quotedprice'];
    }
  }
  
 
  viewQuoteHeader: string[] = [ 'name', 'sku', 'category', 'brand', 'qty', 'price','tax','subtotalprice','wholesale'];
  
/**update quote with price */
  save(){
    var postData:any={};
    /**save purchase quote */
    if(this.activatedRoute.snapshot.url[1].path=='quote-view'){
      let alltotal={
        "totalquantity":this.totalqty,
        "totaltax":this.totaltax,
        "subtotal":this.totalprice,
      }
      postData={
        "source":'quote-details',
        "data":{
          "id":this.activatedRoute.snapshot.params.id,
          "inventory_details":this.quotedetails,
          "total":alltotal
        }
      }
      //console.log(postData);
    }
      /**save comparision quot */
    if(this.activatedRoute.snapshot.url[1].path=='quote-comparison-view'){
      let alltotal={
        "totalquantity":this.totalqty,
        "totaltax":this.totaltax,
        "subtotal":this.totalprice,
        "savings":this.savings,
        "mpprice":this.totalPurchasedPrice,
        "totalwholesellprice":this.totalWholesellprice
      }
      postData={

        "source":'purchase_comparison_quote-details',
        "data":{
          "id":this.activatedRoute.snapshot.params.id,
          "inventory_details":this.quotedetails,
          "total":alltotal
        }
      }
    }
        /**save listing quot */
    if(this.activatedRoute.snapshot.url[1].path=='inventory-listing-view'){
      let alltotal={
        "totalquantity":this.totalqty,
        "totalquotedprice":this.totalQuotedprice
      }

      postData={
        "source":'quote_listing_details',
        "data":{
          "id":this.activatedRoute.snapshot.params.id,
          "inventory_details":this.quotedetails,
          "total":alltotal
        }
      }
    }

    /**save package */
    if(this.activatedRoute.snapshot.url[1].path=='quote-package-view'){
      var alltotal={
        "totalquantity":this.totalqty,
        "totaltax":this.totaltax,
        "subtotal":this.totalprice,
        "package_total":this.Package_all_total
      }
      postData={

        "source":'package_list',
        "data":{
          "id":this.activatedRoute.snapshot.params.id,
          "package_inventoery_details":this.quotedetails,
          "total":alltotal
        }
      }
      }


   // console.log(postData);
    
    this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {
      //console.log(response);
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
       /**package quote for admin rout */
       if(this.activatedRoute.snapshot.url[1].path=='quote-package-view'){
        this.router.navigateByUrl('/admin/package/list');
        }
    }
    })

  }

  /**submit */
  submit(){
    var postData:any={};
     /**submit listing quot */

     if(this.activatedRoute.snapshot.url[1].path=='inventory-listing-view'){
      let alltotal={
        "totalquantity":this.totalqty,
        "totalquotedprice":this.totalQuotedprice
      }
      for(let i in this.quotedetails){
        if(this.quotedetails[i].quotedprice=this.quotedetails[i].quotedprice_admin){
          this.quotedetails[i].quotedprice=this.quotedetails[i].quotedprice_admin;
          this.quotedetails[i].tax_for_other=this.quotedetails[i].tax;
          
        }
      }

      postData={
        "source":'quote_listing_details',
        "data":{
          "id":this.activatedRoute.snapshot.params.id,
          "inventory_details":this.quotedetails,
          "total":alltotal
        }
      }
    }

    //console.log(postData);
    
    this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {
      //console.log(response);
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
       /**package quote for admin rout */
       if(this.activatedRoute.snapshot.url[1].path=='quote-package-view'){
        this.router.navigateByUrl('/admin/package/list');
        }
    }
    })
  }

  /**view details in modal */
  showDetails(ele:any){
    // console.log(ele);
     
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
       panelClass:'viewlistingQuoteModal',
        data: {alldata: ele}
       
      });
  
      dialogRef.afterClosed().subscribe(result => {
        
        
      });
    
  }
  /**cancel */
  cancel(){
    if(this.activatedRoute.snapshot.url[1].path=='inventory-listing-view'){
      if(this.userType=='admin'){
        this.router.navigateByUrl('/admin/managequotes/inventorylistingquote/list');
      }
   }
  }

/**download */
downloadPdf(){
  /**purchase quote */
  if(this.activatedRoute.snapshot.url[1].path=='quote-view'){
    var postData:any={
      "quote_id":this.activatedRoute.snapshot.params.id,
      "source":"quote-details",
      "data":{
        "file_path":""
      }
    }
  
  var post={
  "source":"quote-details",
  "condition":{
  "_id_object":this.activatedRoute.snapshot.params.id
  }
  }
}

/**comparision quote */
if(this.activatedRoute.snapshot.url[1].path=='quote-comparison-view'){
  var postData:any={
    "quote_id":this.activatedRoute.snapshot.params.id,
    "source":"purchase_comparison_quote-details",
    "data":{
      "file_path":""
    }
  }

var post={
"source":"purchase_comparison_quote-details",
"condition":{
"_id_object":this.activatedRoute.snapshot.params.id
}
}
}

/**package quote */
if(this.activatedRoute.snapshot.url[1].path=='quote-package-view'){
  var postData:any={
    "quote_id":this.activatedRoute.snapshot.params.id,
    "source":"package_list",
    "data":{
      "file_path":""
    }
  }

var post={
"source":"package_list",
"condition":{
"_id_object":this.activatedRoute.snapshot.params.id
}
}
}

      /**pdf for  listing quot */
      if(this.activatedRoute.snapshot.url[1].path=='inventory-listing-view'){
        var postData:any={
          "quote_id":this.activatedRoute.snapshot.params.id,
          "source":"quote_listing_details",
          "data":{
            "file_path":""
          }
        }
  
        var post={
          "source":"quote_listing_details",
          "condition":{
          "_id_object":this.activatedRoute.snapshot.params.id
          }
          }
      }

  //console.log(postData);
  this.http.httpViaPost('downloadpdf', postData).subscribe((response: any) => {
    //console.log(response);
    if(response.status==true){
      setTimeout (() => {
        this.http.httpViaPost('datalist', post).subscribe((response: any) => {
          //console.log("datalist",response); 
                    
                   window.location.href=response.res[0].file_path;
                  
        })
      }, 2000)
           
    }
  })
}

/***condition Info */
conditionInfo(condetails:any){
  const dialogRef = this.dialog.open(ConditionDetails, {
    panelClass:'conditionDetails',
     data: {alldata: condetails}
    
   });

   dialogRef.afterClosed().subscribe(result => {
     
     
   });
}
}

/**view details modal */
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


/**condition modal */
@Component({
  selector: 'conditiondetails',
  templateUrl: 'conditionDetails.html',
  styleUrls: ['./quote-view.component.css']
})
export class ConditionDetails {
 
  constructor(
    public dialogRef: MatDialogRef<ConditionDetails>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      //console.log(data);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}