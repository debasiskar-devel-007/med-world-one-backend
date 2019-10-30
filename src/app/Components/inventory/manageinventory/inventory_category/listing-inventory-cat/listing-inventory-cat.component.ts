import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-listing-inventory-cat',
  templateUrl: './listing-inventory-cat.component.html',
  styleUrls: ['./listing-inventory-cat.component.css']
})
export class ListingInventoryCatComponent implements OnInit {

 // ===============================Declarations=========================
 inventoryCategoryData: any = [];
 inventoryCategoryData_skip: any = ["_id","description_html","description","created_at"];
 inventoryCategoryData_modify_header: any = {"category name":"Category Name",
"parent category":"Parent Category","priority":"Priority","status":"Status"};
 tableName: any = 'inventory_category';
 UpdateEndpoint: any = "addorupdatedata";
 deleteEndpoint: any = "deletesingledata";
 user_cookie: any;
 searchingEndpoint: any = "datalist";
 editUrl: any = 'inventory/manage-inventory/inventory-category/edit';
 apiUrl: any = "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/";
 status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
 public search_settings: any =
   {
     selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
     textsearch: [{ label: "Search By category name...", field: 'category_name' }]
   };
 // ====================================================================
   /*Showing Image in the Modal*/
   pendingmodelapplicationarray_detail_datatype: [{
     key: "image",
     value: 'image',
     fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/files/'             // Image path 
   }]


  constructor(private http: HttpServiceService, private cookieService: CookieService,
    private router: Router, public activatedRoute: ActivatedRoute) {
    this.user_cookie = cookieService.get('jwtToken');
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      this.inventoryCategoryData = resolveData.inventoryCatList.res;
    });
  }

}
