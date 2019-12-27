import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../../environments/environment.dev';

@Component({
  selector: 'app-addedit-team-cat',
  templateUrl: './addedit-team-cat.component.html',
  styleUrls: ['./addedit-team-cat.component.css']
})
export class AddeditTeamCatComponent implements OnInit {


  public teamDataList: any = [];
  public serverUrl: any = environment.API_URL;
  public addendpoint: any = "addorupdatedata";
  public listRoute: any = "manage-websites/team-category/list";
  public sourceName : any = "team_category";
  public roleSourceName :any = "rolemanagement";
  public SingleTeamData: any = [];
  public getdataEndpoint:any="datalist";

  constructor(public activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.data.forEach(data => {
      let result: any;
      result = data.teamCatList.res;
      this.teamDataList = result;
    })
    if (this.activeRoute.snapshot.params._id) {
      this.activeRoute.data.forEach(data => {
        let result: any;
        result = data.teamCatList.res;
        this.SingleTeamData = result;
       
      })
    }
  }

}
