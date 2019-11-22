import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-listing-team-cat',
  templateUrl: './listing-team-cat.component.html',
  styleUrls: ['./listing-team-cat.component.css']
})
export class ListingTeamCatComponent implements OnInit {

  //Team category Listing
  public allTeamData: any = [];
  public sourceName: any = "team_category";
  public updateendpoint: any = "addorupdatedata";
  public searchendpoint: any = "datalist";
  public deleteEndpoint: any = "deletesingledata";
  public addPageRoute: any = 'manage-websites/team-category/add';
  manageTeamRoute:any = 'manage-websites/team/list';
  public editpageRoute: any = 'manage-websites/team-category/edit';
  public serverUrl: any = "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/";
  public jwtToken = this.cookies.get('jwtToken');


  constructor(public activeRoute: ActivatedRoute, public cookies: CookieService) { }
  

  ngOnInit() {
    this.activeRoute.data.forEach(data => {
      let result: any;
      result = data.teamCatList.res;
      this.allTeamData = result;
    })
  }

}
