import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { environment } from '../../../../../environments/environment.dev' 

@Component({
  selector: 'app-listing-price-markup-management',
  templateUrl: './listing-price-markup-management.component.html',
  styleUrls: ['./listing-price-markup-management.component.css']
})
export class ListingPriceMarkupManagementComponent implements OnInit {

  public user_cookie:any='';

  // ===============================Declarations for price markup=========================
public priceMarkupData: any = [];
priceMarkupData_skip: any = ["_id","description_html","description","created_at","notes"];
public detail_skip_array:any=["_id"];
priceMarkupData_modify_header: any = {
  "setValue":"Percentage Mark Up(%)",
  "country":"Country",
  "date_added":"Date"
};
public tableName: any = "priceMarkup";
UpdateEndpoint: any = "addorupdatedata";
public deleteEndpoint: any = "deletesingledata";
searchingEndpoint: any = "datalist";
editUrl: any = '/inventory/price-markup-management-list/edit';
public apiUrl: any;
public search_settings: any =
  {
    textsearch: [{ }]
  };
// ====================================================================


  constructor(public http: HttpServiceService, public cookieService: CookieService,
    public router: Router, public activatedRoute: ActivatedRoute) { 
    this.user_cookie = cookieService.get('jwtToken');
    this.apiUrl = http.baseUrl;
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      this.priceMarkupData=resolveData.priceMarkupList.res;
  })

}
}
