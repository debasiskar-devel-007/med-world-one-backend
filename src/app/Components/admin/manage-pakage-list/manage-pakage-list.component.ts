import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MetaService } from '@ngx-meta/core';
@Component({
  selector: 'app-manage-pakage-list',
  templateUrl: './manage-pakage-list.component.html',
  styleUrls: ['./manage-pakage-list.component.css']
})
export class ManagePakageListComponent implements OnInit {
  adminData: any = [];
  adminData_skip: any = ["_id","created_at"];
  adminData_modify_header: any = {
    "firstname": "department_name", "status": "Status" };
  tableName: any = 'package_hospital_details';
  UpdateEndpoint: any = "addorupdatedata";
  deleteEndpoint: any = "deletesingledata";
  searchingEndpoint: any = "datalist";
  editUrl: any = 'admin/manage-hospital-package/details';
  apiUrl: any = this.http.baseUrl;
  status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Blocked' }];
  view: any = "users_view";
  detail_header: any = ['_id', 'type', 'password','status'];
  public search_settings: any =
    {
    };
  constructor(public http: HttpServiceService,public activatedRoute: ActivatedRoute,public cookieService:CookieService, private readonly meta:MetaService) { 

    this.meta.setTitle('MedWorldOne - Manage Hospital Package');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'MedWorldOne - Manage Hospital Package');
    this.meta.setTag('twitter:title', 'MedWorldOne - Manage Hospital Package');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-fb.png');
    this.meta.setTag('twitter:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-twitter.png');


  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      //console.log(resolveData);
       this.adminData = resolveData.adminList.res;
     });
  }

}
