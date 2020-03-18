import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
import * as momentImported from 'moment';
import { MetaService } from '@ngx-meta/core';
const moment = momentImported;

@Component({
  selector: 'app-listing-salesrep',
  templateUrl: './listing-salesrep.component.html',
  styleUrls: ['./listing-salesrep.component.css']
})
export class ListingSalesrepComponent implements OnInit {

public dateRange:any;
  // ===============================Declarations=========================
  salesData: any = [];
  salesData_skip: any = ["_id","password","address","type","fullname","firstname_search","email_search"];
  salesData_modify_header: any = {
    "state":"State","city":"City","zip":"ZIP","phone":"Contact Number","fax":"FAX",
    "status":"Status","date":"Date","user id":"User ID","firstname":"First Name",
    "lastname":"Last Name","email":"Email Address"
  };
  tableName: any = 'users_view_salesrep';
  UpdateEndpoint: any = "addorupdatedata";
  deleteEndpoint: any = "deletesingledata";
  user_cookie: any;
  searchingEndpoint: any = "datalist";
  editUrl: any = 'admin/salesrep-management/edit';
  apiUrl: any =this.http.baseUrl;
  status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Blocked' }];
  view:any="users_view_salesrep";
  detail_header: any = ['_id', 'type', 'password','status'];
  public search_settings: any =
    {
      // selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
      textsearch: [{ label: "Search By name", field: 'firstname_search' },
      // { label: "Search By state", field: 'state' },
      { label: "Search By email", field: 'email_search' }],
      datesearch:[{startdatelabel:"Start Date",enddatelabel:"End Date",submit:"Search By Date",  field:"date"}],
    };
  // ====================================================================
    /*Showing Image in the Modal*/
    pendingmodelapplicationarray_detail_datatype: [{
      key: "image",
      value: 'image',
      fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/files/'             // Image path 
    }]


  constructor(private http: HttpServiceService, private cookieService: CookieService,
    private router: Router, public activatedRoute: ActivatedRoute, private readonly meta:MetaService) {
    this.user_cookie = cookieService.get('jwtToken');

    this.meta.setTitle('MedWorldOne - Sales Rep Management');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'MedWorldOne - Sales Rep Management');
    this.meta.setTag('twitter:title', 'MedWorldOne - Sales Rep Management');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-fb.png');
    this.meta.setTag('twitter:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-twitter.png');


  }


  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      //console.warn(resolveData.salesRepList.res);
      this.salesData = resolveData.salesRepList.res;
      
    });
  }

  // datesearch(){
  //   console.log(this.dateRange);
  // }

}

