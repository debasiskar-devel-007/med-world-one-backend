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

  // displayed: string[] = ['date', 'medical_partner', 'sales_rep','quoted_by', 'status', 'action'];
  displayed: string[] = ['date','Quote_ID', 'medical_partner','sales_rep', 'quoted_by', 'status', 'action'];
  public recentlyAdded:any=[];
    

  constructor(public activatedRoute:ActivatedRoute,public http:HttpServiceService,public router: Router) {
   }

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      this.recentlyAdded=resolveData.purchasequotelist.res;
     console.log(resolveData.purchasequotelist.res);
    });
  }
/** quote details view*/
viewQuoteDetails(quoteid:any,hospiid:any){
  this.router.navigateByUrl('/admin/quote-view/' + quoteid+'/'+hospiid);
//console.log("quote details",quoteid);
}
}
