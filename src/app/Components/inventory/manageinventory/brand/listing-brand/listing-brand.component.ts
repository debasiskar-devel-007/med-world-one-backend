import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';


@Component({
  selector: 'app-listing-brand',
  templateUrl: './listing-brand.component.html',
  styleUrls: ['./listing-brand.component.css']
})

export class ListingBrandComponent implements OnInit {

 // ===============================Declarations=========================
 brandData: any = [];
 brandData_skip: any = ["_id","description_html","description","created_at"];
 brandData_modify_header: any = {"brand name":"Brand Name",
"parent category":"Parent Category","priority":"Priority","status":"Status"};
 tableName: any = 'brands';
 UpdateEndpoint: any = "addorupdatedata";
 deleteEndpoint: any = "deletesingledata";
 user_cookie: any='';
 searchingEndpoint: any = "datalist";
 editUrl: any = 'inventory/manage-inventory/brand/edit';
 apiUrl: any = "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/";
 status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
 public search_settings: any =
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
      this.brandData = resolveData.brandList.res;
    });
  }

}
