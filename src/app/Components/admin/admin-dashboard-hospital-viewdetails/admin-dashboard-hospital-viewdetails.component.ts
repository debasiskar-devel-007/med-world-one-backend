import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-admin-dashboard-hospital-viewdetails',
  templateUrl: './admin-dashboard-hospital-viewdetails.component.html',
  styleUrls: ['./admin-dashboard-hospital-viewdetails.component.css']
})
export class AdminDashboardHospitalViewdetailsComponent implements OnInit {

  /** declarations **/
  public hospitalDetailData : any = [];
  public status:string;

  constructor( public activatedRoute : ActivatedRoute,private readonly meta: MetaService ) {
    this.activatedRoute.params.subscribe(params => {
      if (params['_id'] != null) {
        this.activatedRoute.data.subscribe(resolveData => {
          let result = resolveData.data.res[0];
          this.hospitalDetailData = result;
        });
      }
    });


    this.meta.setTitle('MedWorldOne - admin dashboard hospital viewdetails');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'MedWorldOne -  admin dashboard hospital viewdetails');
    this.meta.setTag('twitter:title', 'MedWorldOne -  admin dashboard hospital viewdetails');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-fb.png');
    this.meta.setTag('twitter:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-twitter.png');


   }

  ngOnInit() {
  }

}
