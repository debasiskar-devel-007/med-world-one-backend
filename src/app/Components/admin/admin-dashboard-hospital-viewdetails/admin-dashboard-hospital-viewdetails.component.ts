import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard-hospital-viewdetails',
  templateUrl: './admin-dashboard-hospital-viewdetails.component.html',
  styleUrls: ['./admin-dashboard-hospital-viewdetails.component.css']
})
export class AdminDashboardHospitalViewdetailsComponent implements OnInit {

  /** declarations **/
  public hospitalDetailData : any = [];
  public status:string;

  constructor( public activatedRoute : ActivatedRoute ) {
    this.activatedRoute.params.subscribe(params => {
      if (params['_id'] != null) {
        this.activatedRoute.data.subscribe(resolveData => {
          let result = resolveData.data.res[0];
          this.hospitalDetailData = result;
        });
      }
    });
   }

  ngOnInit() {
  }

}
