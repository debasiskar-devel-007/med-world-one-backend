import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
@Component({
  selector: 'app-listlistingmanager',
  templateUrl: './listlistingmanager.component.html',
  styleUrls: ['./listlistingmanager.component.css']
})
export class ListlistingmanagerComponent implements OnInit {
  // ===============================Declarations=========================
  listingData: any = [];
  listingData_skip: any = ["_id","password","address","type","fullname","salesrepname","email_search","firstname_search"];
  listingData_modify_header: any = {
    "state":"State","city":"City","zip":"ZIP","phone":"Contact Number","fax":"FAX",
    "status":"Status","date":"Date","user id":"User ID","firstname":"First Name",
    "lastname":"Last Name","email":"Email Address"
  };
  tableName: any = 'users_view_listmanager';
  UpdateEndpoint: any = "addorupdatedata";
  deleteEndpoint: any = "deletesingledata";
  user_cookie: any;
  searchingEndpoint: any = "datalist";
  editUrl: any = 'admin/listing-manager/edit';
  apiUrl: any =this.http.baseUrl;
  status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Blocked' }];
  view:any="users_view_listmanager";
  detail_header: any = ['_id', 'type', 'password','status'];
  public search_settings: any =
    {
      textsearch: [{ label: "Search By name", field: 'firstname_search' },
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
    private router: Router, public activatedRoute: ActivatedRoute) {
    this.user_cookie = cookieService.get('jwtToken');
  }


  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      //console.warn(resolveData);
      this.listingData= resolveData.salesRepList.res;
      
    });
  }

}
