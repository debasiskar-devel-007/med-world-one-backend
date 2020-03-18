import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../../../environments/environment.dev';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-listing-team',
  templateUrl: './listing-team.component.html',
  styleUrls: ['./listing-team.component.css']
})
export class ListingTeamComponent implements OnInit {

  // public allDataList:any=[];
  // public serverUrl:any=environment.API_URL;
  // public token=this.cookies.get('jwtToken');
  // public deleteendpoint:any="deletesingledata";
  // public editUrl="manage-websites/team/edit";
  // public collectionName="Team_management";
  // public searchSourceName="Team_management_view";
  // public searchingEndpoint="datalist";
  // public addPageRoute = "manage-websites/team/add";

  public allDataList:any=[];
  public serverUrl:any = environment.API_URL;
  public token=this.cookies.get('jwttoken');
  public deleteendpoint:any="deletesingledata";
  public editUrl="/manage-websites/team/edit";
  public collectionName="team_management";
  public searchSourceName="team_management";
  public searchingEndpoint="datalist";
  public addPageRoute = "/manage-websites/team/add";

  constructor(public activateRoute : ActivatedRoute,public cookies :CookieService, private readonly meta:MetaService) {

    this.meta.setTitle('MedWorldOne - Team Listing');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'MedWorldOne - Team Listing');
    this.meta.setTag('twitter:title', 'MedWorldOne - Team Listing');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-fb.png');
    this.meta.setTag('twitter:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-twitter.png');
    

   }

  ngOnInit() {
    this.activateRoute.data.forEach(data => {
      let result: any;
      result = data.teamList.res;
      this.allDataList = result;
    })
  }

}
