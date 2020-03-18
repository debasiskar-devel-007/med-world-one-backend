import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-departent-list',
  templateUrl: './departent-list.component.html',
  styleUrls: ['./departent-list.component.css']
})
export class DepartentListComponent implements OnInit {
  adminData: any = [];
  adminData_skip: any = ["_id","created_at"];
  adminData_modify_header: any = {
    "firstname": "department_name", "status": "Status" };
  tableName: any = 'department';
  UpdateEndpoint: any = "addorupdatedata";
  deleteEndpoint: any = "deletesingledata";
  searchingEndpoint: any = "datalist";
  editUrl: any = 'admin/inventory/manage-department/edit';
  apiUrl: any = this.http.baseUrl;
  status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Blocked' }];
  view: any = "users_view";
  detail_header: any = ['_id', 'type', 'password','status'];
  public search_settings: any =
    {
    };
  constructor(public http: HttpServiceService,public activatedRoute: ActivatedRoute,public cookieService:CookieService, private readonly meta: MetaService) {

    
    this.meta.setTitle('MedWorldOne - Manage Department');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'MedWorldOne - Manage Department');
    this.meta.setTag('twitter:title', 'MedWorldOne -  Manage Department');
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
