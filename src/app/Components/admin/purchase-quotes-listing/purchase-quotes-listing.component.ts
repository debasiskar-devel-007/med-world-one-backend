import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../../../services/http-service.service';
@Component({
  selector: 'app-purchase-quotes-listing',
  templateUrl: './purchase-quotes-listing.component.html',
  styleUrls: ['./purchase-quotes-listing.component.css']
})
export class PurchaseQuotesListingComponent implements OnInit {
 public flage:number=0;
  // displayed: string[] = ['date', 'medical_partner', 'sales_rep','quoted_by', 'status', 'action'];
  displayed: string[] = ['date','Quote_ID', 'medical_partner','sales_rep', 'quoted_by', 'status', 'action'];
  public recentlyAdded:any=[];
    

  constructor(public activatedRoute:ActivatedRoute,public http:HttpServiceService,public router: Router) {
    //console.log(this.activatedRoute.snapshot.url[2].path);
    if(this.activatedRoute.snapshot.url[2].path=='inventorylistingquote'){
      this.flage=1;
    }
   }

  ngOnInit() {
    if(this.activatedRoute.snapshot.url[2].path=='inventorylistingquote'){
     this.displayed = ['date','Quote_ID', 'status', 'action'];
    }
        this.activatedRoute.data.subscribe(resolveData => {
      this.recentlyAdded=resolveData.purchasequotelist.res;
     //console.log(resolveData.purchasequotelist.res);
    });
  }
/** quote details view*/
viewQuoteDetails(quoteid:any,hospiid:any){
  if(this.router.routerState.snapshot.url=='/admin/managequotes/purchasequote/list'){
    //console.log("purchase Quote listing view route");
    this.router.navigateByUrl('/admin/quote-view/' + quoteid+'/'+hospiid);
  }
  
  if(this.router.routerState.snapshot.url=='/admin/managequotes/purchasquotelisting/list'){
    //console.log("purchasquotelisting");
    this.router.navigateByUrl('/admin/quote-comparison-view/' + quoteid+'/'+hospiid);
  }
  if(this.activatedRoute.snapshot.url[2].path=='inventorylistingquote'){
    //console.log("inventory-listing-view");
    this.router.navigateByUrl('/admin/inventory-listing-view/' + quoteid+'/'+hospiid);
   }
}

addPurchasequotes(){
  if(this.activatedRoute.snapshot.url[2].path=='inventorylistingquote'){
    this.router.navigateByUrl('/admin/inventory/inventorylistingquote/add');
  }

  if(this.activatedRoute.snapshot.url[2].path=='purchasquotelisting'){
    this.router.navigateByUrl('/admin/inventory/purchase-comparison-search-list');
  }
  if(this.activatedRoute.snapshot.url[2].path=='purchasequote'){
    this.router.navigateByUrl('/inventory');
  }
}

}