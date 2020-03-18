import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { MetaService } from '@ngx-meta/core';



@Component({
  selector: 'app-listing-admin',
  templateUrl: './listing-admin.component.html',
  styleUrls: ['./listing-admin.component.css']
})
export class ListingAdminComponent implements OnInit {



  // ===============================Declarations=========================
  adminData: any = [];
  adminData_skip: any = ["_id", "password", "type", "salesrepname"];
  adminData_modify_header: any = {
    "firstname": "First Name", "status": "Status", "email": "Email Address",
    "phone": "Contact Number", "date": "Date","lastname":"Last Name","user id":"User ID"
  };
  tableName: any = 'users';
  UpdateEndpoint: any = "addorupdatedata";
  deleteEndpoint: any = "deletesingledata";
  user_cookie: any;
  searchingEndpoint: any = "datalist";
  editUrl: any = 'admin-management/edit';
  apiUrl: any = this.http.baseUrl;
  status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Blocked' }];
  view: any = "users_view_admin";
  detail_header: any = ['_id', 'type', 'password','status'];
  public search_settings: any =
    {
      selectsearch: [{ label: 'Search By status', field: 'status', values: this.status }],
      textsearch: [{ label: "Search By FirstName", field: 'firstname_search' }],
      datesearch: [{ startdatelabel: "Start Date", enddatelabel: "End Date", submit: "Search By Date", field: "created_at" }],   // this is use for  date search 
    };
  // ====================================================================

  constructor(private http: HttpServiceService, private cookieService: CookieService,
    private router: Router, public activatedRoute: ActivatedRoute, private readonly meta: MetaService) {
    this.user_cookie = cookieService.get('jwtToken');

    this.meta.setTitle('MedWorldOne - Admin Management');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'MedWorldOne -  Admin Management');
    this.meta.setTag('twitter:title', 'MedWorldOne -  Admin Management');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-fb.png');
    this.meta.setTag('twitter:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-twitter.png');


  }


  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      console.warn(resolveData);
      this.adminData = resolveData.adminList.res;
    });
  }


}
