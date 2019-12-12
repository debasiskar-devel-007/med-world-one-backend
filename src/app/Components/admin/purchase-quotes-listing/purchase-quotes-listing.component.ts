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

  displayed: string[] = ['date', 'medical_partner', 'quoted_by', 'status', 'action','sales_rep'];
  public recentlyAdded:any=[];
    // ===============================Declarations=========================
    // purchaseQListData: any = [];
    // purchaseQListData_skip: any = ["_id","inventory_details","salesrepid","hospital_id","copy_status"];
    // detail_skip_array: any = ["_id","inventory_details","salesrepid","hospital_id"]
    // purchaseQListData_modify_header: any = {};
    // tableName: any = 'quote-details';
    // UpdateEndpoint: any = "addorupdatedata";
    // deleteEndpoint: any = "deletesingledata";
    // searchingEndpoint: any = "datalist";
    // editUrl: any = 'admin/quote-view/';
    // apiUrl: any = '';
    // status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
    // view: any = "quote-details_view";
    // public search_settings: any = {
    //   selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
    //   textsearch: [{ label: "Search By brand name...", field: 'brand_name' }]
    // };
  constructor(public activatedRoute:ActivatedRoute,public http:HttpServiceService,public router: Router) {
    let postData={"source": "quote-details_view"};
    this.http.httpViaPost('datalist',postData).subscribe((response: any) => {
      this.recentlyAdded=response.res;
      console.log(response.res);
    });
   }

  ngOnInit() {
    // this.activatedRoute.data.subscribe(resolveData => {
    //   this.purchaseQListData=resolveData.purchasequotelist.res;
    //  // console.log(resolveData.purchasequotelist.res);
    // });
  }
/** quote details view*/
viewQuoteDetails(quoteid:any,hospiid:any){
  this.router.navigateByUrl('/admin/quote-view/' + quoteid+'/'+hospiid);
//console.log("quote details",quoteid);
}
}
