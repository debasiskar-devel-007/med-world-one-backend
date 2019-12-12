import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-purchase-quotes-listing',
  templateUrl: './purchase-quotes-listing.component.html',
  styleUrls: ['./purchase-quotes-listing.component.css']
})
export class PurchaseQuotesListingComponent implements OnInit {


    // ===============================Declarations=========================
    purchaseQListData: any = [];
    purchaseQListData_skip: any = ["_id","inventory_details","salesrepid","hospital_id"];
    detail_skip_array: any = ["_id","inventory_details","salesrepid","hospital_id"]
    purchaseQListData_modify_header: any = {};
    tableName: any = 'quote-details';
    UpdateEndpoint: any = "addorupdatedata";
    deleteEndpoint: any = "deletesingledata";
    searchingEndpoint: any = "datalist";
    editUrl: any = '';
    apiUrl: any = '';
    status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
    view: any = "quote-details_view";
    // public search_settings: any = {
    //   selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
    //   textsearch: [{ label: "Search By brand name...", field: 'brand_name' }]
    // };
  constructor(public activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      this.purchaseQListData=resolveData.purchasequotelist.res;
      console.log(resolveData.purchasequotelist.res);
    });
  }

}
