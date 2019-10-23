import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../../services/http-service.service';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-listing-medicalpartners',
  templateUrl: './listing-medicalpartners.component.html',
  styleUrls: ['./listing-medicalpartners.component.css']
})
export class ListingMedicalpartnersComponent implements OnInit {




  // ===============================Declarations=========================
  mpData: any = [];
  mpData_skip: any = ["_id", "created_at", "password", "address", "noofdoctors", "noofbeds", "mpimage", "noofstaffs"];
  mpData_modify_header: any = {
    "hospitalname": "Hospital Name", "contactperson": "Contact Person",
    "contactemails": "Contact Email(s)", "contactphones": "Contact Phone(s)", "state": "State", "city": "City",
    "zip": "ZIP", "speciality": "Speciality", "status": "Status"
  };
  tableName: any = 'medicalpartners';
  UpdateEndpoint: any = "addorupdatedata";
  deleteEndpoint: any = "deletesingledata";
  user_cookie: any;
  searchingEndpoint: any = "datalist";
  editUrl: any = 'admin/medicalpartners-management/edit';
  apiUrl: any = "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/";
  status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
  public search_settings: any =
    {
      selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
      textsearch: [{ label: "Search By Hospital name", field: 'hospitalname' },
      { label: "Search By state", field: 'state' },
      { label: "Search By speciality", field: 'speciality' }]
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
      this.mpData = resolveData.mpList.res;
    });
  }


}
