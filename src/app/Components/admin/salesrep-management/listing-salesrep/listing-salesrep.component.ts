import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';


@Component({
  selector: 'app-listing-salesrep',
  templateUrl: './listing-salesrep.component.html',
  styleUrls: ['./listing-salesrep.component.css']
})
export class ListingSalesrepComponent implements OnInit {


  // ===============================Declarations=========================
  salesData: any = [];
  salesData_skip: any = ["_id","password","address","Type","fullname"];
  salesData_modify_header: any = {
    "name":"Name","email":"Email","state":"State","city":"City","zip":"ZIP","phone":"Phone","fax":"FAX",
    "status":"Status","date":"Date"
  };
  tableName: any = 'user';
  UpdateEndpoint: any = "addorupdatedata";
  deleteEndpoint: any = "deletesingledata";
  user_cookie: any;
  searchingEndpoint: any = "datalist";
  editUrl: any = 'admin/salesrep-management/edit';
  apiUrl: any = "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/";
  status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
  view:any="user_view";
  public search_settings: any =
    {
      selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
      textsearch: [{ label: "Search By name", field: 'name' },
      { label: "Search By state", field: 'state' },
      { label: "Search By email", field: 'email' }],
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
    private router: Router, public activatedRoute: ActivatedRoute) {
    this.user_cookie = cookieService.get('jwtToken');
  }


  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      this.salesData = resolveData.salesRepList.res;
    });
  }


}

