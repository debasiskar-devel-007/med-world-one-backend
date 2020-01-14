import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-departent-list',
  templateUrl: './departent-list.component.html',
  styleUrls: ['./departent-list.component.css']
})
export class DepartentListComponent implements OnInit {
  adminData: any = [];
  adminData_skip: any = ["_id",];
  adminData_modify_header: any = {
    "firstname": "department_name", "status": "Status" };
  tableName: any = 'users';
  UpdateEndpoint: any = "addorupdatedata";
  deleteEndpoint: any = "deletesingledata";
  user_cookie: any;
  searchingEndpoint: any = "datalist";
  editUrl: any = '';
  apiUrl: any = this.http.baseUrl;
  status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Blocked' }];
  view: any = "users_view";
  detail_header: any = ['_id', 'type', 'password','status'];
  public search_settings: any =
    {
    };
  constructor(public http: HttpServiceService,public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
     // console.log(resolveData);
      this.adminData = resolveData.adminList.res;
    });
  }

}
