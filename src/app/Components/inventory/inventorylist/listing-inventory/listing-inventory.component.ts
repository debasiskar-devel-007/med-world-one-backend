import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-listing-inventory',
  templateUrl: './listing-inventory.component.html',
  styleUrls: ['./listing-inventory.component.css']
})
export class ListingInventoryComponent implements OnInit {

  user_cookie: any ='';
 // ===============================Declarations=========================
 inventoryListData: any = [];
 inventoryListData_skip: any = ["_id","description_html","description","created_at","image"];
 detail_skip_array:any=["_id"]
 inventoryListData_modify_header: any = {"brand name":"Brand Name",
"parent category":"Parent Category","priority":"Priority","status":"Status"};
 tableName: any = 'inventories';
 UpdateEndpoint: any = "addorupdatedata";
 deleteEndpoint: any = "deletesingledata";
 searchingEndpoint: any = "datalist";
 editUrl: any = 'inventory/inventory-list/edit';
 apiUrl: any = "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/";
 status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
 view:any="inventories_view";
 public search_settings: any = {
     selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
     textsearch: [{ label: "Search By brand name...", field: 'brand_name' }]
   };
 // ====================================================================
   /*Showing Image in the Modal*/
   image_detail_datatype:any = [{
     key: "image",
     value: 'image',
     fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/files/'      // Image path 
   }]


  constructor(private http: HttpServiceService, private cookieService: CookieService,
    private router: Router, public activatedRoute: ActivatedRoute) {
    this.user_cookie = cookieService.get('jwtToken');
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      this.inventoryListData = resolveData.inventoryList.res;
    });
  }

}
