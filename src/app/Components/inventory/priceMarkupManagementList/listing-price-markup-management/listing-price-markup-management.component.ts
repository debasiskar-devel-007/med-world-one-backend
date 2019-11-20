import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-listing-price-markup-management',
  templateUrl: './listing-price-markup-management.component.html',
  styleUrls: ['./listing-price-markup-management.component.css']
})
export class ListingPriceMarkupManagementComponent implements OnInit {

  public user_cookie:any='';

  // ===============================Declarations for price markup=========================
public priceMarkupData: any = [];
priceMarkupData_skip: any = ["_id","description_html","description","created_at"];
public detail_skip_array:any=["_id"];
priceMarkupData_modify_header: any = {
"COUNTRY":'Country Name',
"SETVALUE":"Value",
"DATEADDED":"Date"
};
public tableName: any = "priceMarkup";
UpdateEndpoint: any = "addorupdatedata";
public deleteEndpoint: any = "deletesingledata";
searchingEndpoint: any = "datalist";
editUrl: any = 'inventory/price-markup-management-list/edit';
apiUrl: any = "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/";
public search_settings: any =
  {
    textsearch: [{ label: "Search By country name...", field: 'Country' }]
  };
// ====================================================================


  constructor(private http: HttpServiceService, private cookieService: CookieService,
    private router: Router, public activatedRoute: ActivatedRoute) { 
    this.user_cookie = cookieService.get('jwtToken');
    console.log("tokennnnnnnnnnn",this.user_cookie);
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      console.log('>>>>>>>>>>>',resolveData.priceMarkupList.res)
      this.priceMarkupData=resolveData.priceMarkupList.res;
  })

}
}
