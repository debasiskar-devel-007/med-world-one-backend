import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { MetaService } from '@ngx-meta/core';


@Component({
  selector: 'app-listing-medicalpartners',
  templateUrl: './listing-medicalpartners.component.html',
  styleUrls: ['./listing-medicalpartners.component.css']
})
export class ListingMedicalpartnersComponent implements OnInit {




  // ===============================Declarations=========================
  mpData: any = [];
  mpData_skip: any = ["_id", "password","contactemail","address","zip","state_search","status_search","hospitalname_search"];
  mpData_modify_header: any = {
   "hospitalname":"Hospital Name","contactperson":"Contact Person","state":"State","city":"City",
   "zip":"ZIP","speciality":"Speciality","status":"Status","date":"Date Added",'email':'Email Address',
   "salesrepname":"SalesRep","user id":"User ID","contactphones":"contact number"
  };
  tableName: any = 'users_view_hospital';
  UpdateEndpoint: any = "addorupdatedata";
  deleteEndpoint: any = "deletesingledata";
  user_cookie: any;
  searchingEndpoint: any = "datalist";
  editUrl: any = 'admin/medicalpartners-management/edit';
  apiUrl: any = this.http.baseUrl;
  status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Blocked' }];
  view:any='users_view_hospital';
  detail_header: any = ['_id', 'type', 'password','status','salesrepselect','images'];
  public search_settings: any =
    {
      selectsearch: [{ label: 'status...', field: 'status_search', values: this.status }],
      textsearch: [{ label: "hospital name", field: 'hospitalname_search' },
      { label: "state", field: 'state_search' },
      // { label: "speciality", field: 'speciality' }
    ],
      datesearch:[{startdatelabel:"Start Date",enddatelabel:"End Date",submit:"Search By Date",  field:"date"}],
    };
  // ====================================================================
    /*Showing Image in the Modal*/
    pendingmodelapplicationarray_detail_datatype:any= [{
      key: 'images',
      value: 'images',
      fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/files/'       // Image path 
    }]


  constructor(private http: HttpServiceService, private cookieService: CookieService,
    private router: Router, public activatedRoute: ActivatedRoute, private readonly meta:MetaService) {
    this.user_cookie = cookieService.get('jwtToken');

    this.meta.setTitle('MedWorldOne - Medical Partners');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'MedWorldOne - Medical Partners');
    this.meta.setTag('twitter:title', 'MedWorldOne - Medical Partners');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-fb.png');
    this.meta.setTag('twitter:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-twitter.png');


  }


  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      //console.warn(resolveData.mpList);
      this.mpData = resolveData.mpList.res;
    });
  }


}
