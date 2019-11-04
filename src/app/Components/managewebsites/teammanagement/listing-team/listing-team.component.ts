import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-listing-team',
  templateUrl: './listing-team.component.html',
  styleUrls: ['./listing-team.component.css']
})
export class ListingTeamComponent implements OnInit {

  public allDataList:any=[];
  public serverUrl:any="https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/";
  public token=this.cookies.get('jwtToken');
  public deleteendpoint:any="deletesingledata";
  public editUrl="manage-websites/team/edit";
  public collectionName="Team_management";
  public searchSourceName="Team_management_view";
  public searchingEndpoint="datalist";
  public addPageRoute = "manage-websites/team/add";


  constructor(public activateRoute : ActivatedRoute,public cookies :CookieService) { }

  ngOnInit() {
    this.activateRoute.data.forEach(data => {
      let result: any;
      result = data.teamList.res;
      this.allDataList = result;
    })
  }

}
