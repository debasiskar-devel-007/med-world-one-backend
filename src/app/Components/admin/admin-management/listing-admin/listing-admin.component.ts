
import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';




@Component({
  selector: 'app-listing-admin',
  templateUrl: './listing-admin.component.html',
  styleUrls: ['./listing-admin.component.css']
})
export class ListingAdminComponent implements OnInit {



  // ===============================Declarations=========================
  adminData: any = [];
  adminData_skip: any = ["_id"];
  adminData_modify_header: any = {
    "status": "Status", "FullName": "Full Name", "email": "Email", "password": "Password",
    "phone": "Phone"
  };
  tableName: any = 'admin';
  UpdateEndpoint: any = "addorupdatedata";
  deleteEndpoint: any = "deletesingledata";
  user_cookie: any;
  searchingEndpoint: any = "datalist";
  editUrl: any = 'admin-management/edit';
  apiUrl: any = "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/";
  status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
  public search_settings: any =
    {
      selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
      textsearch: [{ label: "Search By Fullname", field: 'fullname' }]
    };
  // ====================================================================

  constructor(private http: HttpServiceService, private cookieService: CookieService,
    private router: Router, public activatedRoute: ActivatedRoute) {
    this.user_cookie = cookieService.get('jwtToken');
  }


  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      this.adminData = resolveData.adminList.res;
    });
  }


}
