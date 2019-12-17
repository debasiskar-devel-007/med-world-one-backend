import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {HttpServiceService} from '../../../services/http-service.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-contactus-listing',
  templateUrl: './contactus-listing.component.html',
  styleUrls: ['./contactus-listing.component.css']
})
export class ContactusListingComponent implements OnInit {
public contactData:any=[];
public contactInfoData:any=[];
public user_cookie: any;
// ===============================Declarations=========================
contactData_skip: any = ["_id"];
detail_skip_array:any=["_id"]
contactData_modify_header: any = {
};
public tableName: any = 'contactus';
public UpdateEndpoint: any = "addorupdatedata";
public deleteEndpoint: any = "deletesingledata";

searchingEndpoint: any = "datalist";
editUrl: any = '';
public apiUrl: any = this.httpServiceService.baseUrl;
status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
public view:any="contactus_view";
public image_detail_datatype:any='';
public search_settings: any = {
    // selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
    // textsearch: [{ label: "Search By brand name...", field: 'brand_name' }]
  };
// ====================================================================
  /*Showing Image in the Modal*/
  // image_detail_datatype:any = [{
  //   key: "image",
  //   value: 'image',
  //   fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/files/'      // Image path 
  // }]

  //-------------*****----------------------
  
contactInfoData_skip: any = ["_id"];
contactInfoData_skip_array:any=["_id"]
contactInfoData_modify_header: any = {
};
tableNam: any = 'contactus';
UpdateEndpnt: any = "addorupdatedata";
deleteEndpnt: any = "deletesingledata";
public image_detail_datatyp:any='';
searchingEndpnt: any = "datalist";
edtUrl: any = '';
apiUrll: any =this.httpServiceService.baseUrl;
statuss: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
vieww:any="contactus_view_admin";
public search_settingss: any = {
    // selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
    // textsearch: [{ label: "Search By brand name...", field: 'brand_name' }]
  };
  constructor(public activatedRoute: ActivatedRoute,public httpServiceService:HttpServiceService,public cookieService:CookieService) {
    let postData={"source":"contactus_view_admin","condition": {},}
    this.httpServiceService.httpViaPost('datalist',postData).subscribe((res:any)=>{
      this.contactInfoData=res.res;
    })
    this.user_cookie=cookieService.get('jwtToken');
   }

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
    this.contactData = resolveData.contactlist.res;
    });


  }

}
