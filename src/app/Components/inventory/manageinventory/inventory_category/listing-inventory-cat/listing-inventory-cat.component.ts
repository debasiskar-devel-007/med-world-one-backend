import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { environment } from '../../../../../../environments/environment';
import { resolve } from 'url';


@Component({
  selector: 'app-listing-inventory-cat',
  templateUrl: './listing-inventory-cat.component.html',
  styleUrls: ['./listing-inventory-cat.component.css']
})
export class ListingInventoryCatComponent implements OnInit {

  public user_cookie:any='';

 // ===============================Declarations for category=========================
 inventoryCategoryData: any = [];
 public detail_skip_array_cat:any=["_id"];
 inventoryCategoryData_skip: any = ["_id","description_html","description","created_at","priority","brand_count","brand_data"];
 inventoryCategoryData_modify_header: any = {"category name":"Category",
"parent category":"Parent Category","priority":"Priority","status":"Status"};
 tableName: any = 'inventory_category';
 UpdateEndpoint: any = "addorupdatedata";
 deleteEndpoint: any = "deletesingledata";
 searchingEndpoint: any = "datalist";
 editUrl: any = 'inventory/manage-inventory/inventory-category/edit';

apiUrl:any = environment.API_URL;
 status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
 public search_settings: any =
   {
     selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
     textsearch: [{ label: "Search By category name...", field: 'category_name' }]
   };
 // ====================================================================

// ===============================Declarations for brand=========================
public brandData: any = [];
brandData_skip: any = ["_id","description_html","description","created_at"];
public detail_skip_array:any=["_id"];
brandData_modify_header: any = {"brand name":"Brand Name",
"parent category":"Parent Category","priority":"Priority","status":"Status"};
public tableNameBrand: any = "brands";
UpdateEndpointBrand: any = "addorupdatedata";
public deleteEndpointBrand: any = "deletesingledata";
searchingEndpointBrand: any = "datalist";
editUrlBrand: any = 'inventory/manage-inventory/brand/edit';
apiUrlBrand: any =  environment.API_URL;
statusBrand: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
public search_settingsBrand: any =
  {
    selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
    textsearch: [{ label: "Search By brand name...", field: 'brand_name' }]
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

          this.getBrands(); 
  }

  getBrands(){
    let data : any = {
      source:'brands_view',
      token:this.cookieService.get('jwtToken')
    }
    this.http.httpViaPost('datalist',data).subscribe((response)=>{
          this.brandData = response.res;
    });
  }

   

}
