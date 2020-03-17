
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { MetaService } from '@ngx-meta/core';


@Component({
  selector: 'app-listing-language',
  templateUrl: './listing-language.component.html',
  styleUrls: ['./listing-language.component.css']
})
export class ListingLanguageComponent implements OnInit {
  
  
  user_cookie:any;

  languageListData: any = [];
  languageListData_skip: any = ["description_html","created_at","_id","id","updated_at"];
  detail_skip_array:any=["_id"]
  languageListData_modify_header: any = {};
  tableName: any = 'languages';
  UpdateEndpoint: any = "addorupdatedata";
  deleteEndpoint: any = "deletesingledata";
  searchingEndpoint: any = "datalist";
  editUrl: any = 'admin-dashboard/language/edit';
  apiUrl: any = "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/";
  status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
  view:any='';
  image_detail_datatype:any='';
  search_settings:any={};
 
  
 
   constructor(private http: HttpServiceService, private cookieService: CookieService, private router: Router, public activatedRoute: ActivatedRoute,private readonly meta:MetaService) {
       this.user_cookie = cookieService.get('jwtToken');

       
    this.meta.setTitle('MedWorldOne - Listing Language');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'MedWorldOne - Listing Language');
    this.meta.setTag('twitter:title', 'MedWorldOne - Listing Language');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-fb.png');
    this.meta.setTag('twitter:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-twitter.png');

   }
 

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      this.languageListData = resolveData.data.res;
    });
  }

}
