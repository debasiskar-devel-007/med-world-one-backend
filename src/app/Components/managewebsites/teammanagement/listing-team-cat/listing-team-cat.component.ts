import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../../../environments/environment.dev';

@Component({
  selector: 'app-listing-team-cat',
  templateUrl: './listing-team-cat.component.html',
  styleUrls: ['./listing-team-cat.component.css']
})
export class ListingTeamCatComponent implements OnInit {

  //Team category Listing
  public allTeamData:any=[];
  public sourceName:any="team_category";
  public updateendpoint:any="addorupdatedata";
  public searchendpoint:any="datalist";
  public deleteEndpoint:any="deletesingledata";
  public addPageRoute:any='manage-websites/team-category/add';
  public manageButtonRoute:any='manage-websites/team/list';
  public editpageRoute:any='manage-websites/team-category/edit';
  public serverUrl:any = environment.API_URL;
  public jwtToken=this.cookies.get('jwttoken');



  //////
  // public allTeamData: any = [];
  // public sourceName: any = "team_category";
  // public updateendpoint: any = "addorupdatedata";
  // public searchendpoint: any = "datalist";
  // public deleteEndpoint: any = "deletesingledata";
  // public addPageRoute: any = 'manage-websites/team-category/add';
  // manageTeamRoute:any = 'manage-websites/team/list';
  // public editpageRoute: any = 'manage-websites/team-category/edit';
  // public serverUrl: any = environment.API_URL;
  // public jwtToken = this.cookies.get('jwtToken');


  constructor(public activeRoute: ActivatedRoute, public cookies: CookieService) { }
  

  ngOnInit() {
    this.activeRoute.data.forEach(data => {
      console.log(data.teamCatList.res);
      let result: any;
      result = data.teamCatList.res;
      this.allTeamData = result;
    })
  }

}
