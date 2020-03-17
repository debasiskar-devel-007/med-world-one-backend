import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { environment } from '../../../../../environments/environment';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-listing-inventory',
  templateUrl: './listing-inventory.component.html',
  styleUrls: ['./listing-inventory.component.css']
})
export class ListingInventoryComponent implements OnInit {

  user_cookie: any = '';
  // ===============================Declarations=========================
  inventoryListData: any = [];
  inventoryListData_skip: any = ["_id", "description_html", "description", "created_at",
   "inventory_image", 'image','source','status','quantity','dynamic_attributes','inventory_search','price','brand_id','category_id'];
  detail_skip_array: any = ["_id","category_id"]
  inventoryListData_modify_header: any = {
    "brand name": "Brand Name",
    "parent category": "Parent Category", "priority": "Priority", "status": "Status",
    "inventoy name":"source",'sku':'sku #','name':'Source','inventory name':'Name','wholesaleprice':"Whole Sale Price"
  };
  tableName: any = 'inventories';
  UpdateEndpoint: any = "addorupdatedata";
  deleteEndpoint: any = "deletesingledata";
  searchingEndpoint: any = "datalist";
  editUrl: any = 'inventory/inventory-list/edit';
  apiUrl: any = environment.API_URL;
  status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
  view: any = "inventories_view";
  public search_settings: any = {
    selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
    textsearch: [{ label: "Search By brand name...", field: 'brand_name' }]
  };
  // ====================================================================
  /*Showing Image in the Modal*/
  image_detail_datatype: any = [{
    key: "image",
    value: 'image',
    fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/files/'      // Image path 
  }]


  constructor(private http: HttpServiceService, private cookieService: CookieService,
    private router: Router, public activatedRoute: ActivatedRoute, private readonly meta:MetaService) {
    this.user_cookie = cookieService.get('jwtToken');


    
    this.meta.setTitle('MedWorldOne - Inventory');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'MedWorldOne - Inventory');
    this.meta.setTag('twitter:title', 'MedWorldOne - Inventory');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-fb.png');
    this.meta.setTag('twitter:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-twitter.png');



  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      this.inventoryListData = resolveData.inventoryList.res;
      //console.log(this.inventoryListData);
    });
  }

}
