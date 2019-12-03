import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';


@Component({
  selector: 'app-listing-medicalpartners',
  templateUrl: './listing-medicalpartners.component.html',
  styleUrls: ['./listing-medicalpartners.component.css']
})
export class ListingMedicalpartnersComponent implements OnInit {




  // ===============================Declarations=========================
  mpData: any = [];
  mpData_skip: any = ["_id", "password","contactphones","contactemails","address",
  "noofdoctors","noofbeds","type","image","noofstaffs","fullname","images",'salesrepselect',"user_full_name"];
  mpData_modify_header: any = {
   "hospitalname":"Hospital Name","contactperson":"Contact Person","state":"State","city":"City",
   "zip":"ZIP","speciality":"Speciality","status":"Status","date":"Date",'email':'Primary Email',
   "salesrepname":"SalesRep"
  };
  tableName: any = 'users';
  UpdateEndpoint: any = "addorupdatedata";
  deleteEndpoint: any = "deletesingledata";
  user_cookie: any;
  searchingEndpoint: any = "datalist";
  editUrl: any = 'admin/medicalpartners-management/edit';
  apiUrl: any = "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/";
  status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
  view:any='user_view';
  detail_header: any = ['_id', 'type', 'password','status','salesrepselect','images'];
  public search_settings: any =
    {
      selectsearch: [{ label: 'status...', field: 'status', values: this.status }],
      textsearch: [{ label: "hospital name", field: 'hospitalname' },
      { label: "state", field: 'state' },
      { label: "speciality", field: 'speciality' }],
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
    private router: Router, public activatedRoute: ActivatedRoute) {
    this.user_cookie = cookieService.get('jwtToken');
  }


  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      this.mpData = resolveData.mpList.res;
    });
  }


}
