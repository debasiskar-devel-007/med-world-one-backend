import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../../../environments/environment.dev';
import { MetaService } from '@ngx-meta/core';
import {HttpServiceService} from '../../../../services/http-service.service'

@Component({
  selector: 'app-listing-team-cat',
  templateUrl: './listing-team-cat.component.html',
  styleUrls: ['./listing-team-cat.component.css']
})
export class ListingTeamCatComponent implements OnInit {

  //Manage Team
  public allTeamData:any=[];
  public sourceName:any="team_category";
  public updateendpoint:any="addorupdatedata";
  public searchendpoint:any="datalist";
  public deleteEndpoint:any="deletesingledata";
  public addPageRoute:any='manage-websites/team-category/add';
  public editpageRoute:any='manage-websites/team-category/edit';
  public serverUrl:any = environment.API_URL;
  public jwtToken=this.cookies.get('jwtToken');
  public searchSourceName:any='team_category_view'



  //  team management 
// public  manageButtonRouteteam:any='manage-websites/team/add';
public manageButtonRoute:any='manage-websites/team/add';
public  TeamAllData:any=[];
public  EditTeamRoute:any='manage-websites/team/edit';
public  UpdateTeamRoute :any='addorupdatedata';
public  TokenTeam:any=this.cookies.get('jwtToken');
public  SourceNameTeam:any='team_management';
public  SearchSourceNameTeam:any='team_management_view';
public  SearchEndpointTeam:any='datalist';
public  DeleteEndpointTeam:any='deletesingledata';
public  serverUrlTeam:any= environment.API_URL;


  constructor(public activeRoute: ActivatedRoute, public cookies: CookieService, private readonly meta:MetaService,public httpService:HttpServiceService) {

    
    this.meta.setTitle('MedWorldOne - Manage Team');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'MedWorldOne - Manage Team');
    this.meta.setTag('twitter:title', 'MedWorldOne - Manage Team');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-fb.png');
    this.meta.setTag('twitter:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-twitter.png');
    


   }
  

  ngOnInit() {
    this.activeRoute.data.forEach(data => {
      console.log(data.teamCatList.res);
      let result: any;
      result = data.teamCatList.res;
      this.allTeamData = result;
    })



    let data:any;
    data={
      "source":"team_management_view"
    }
    this.httpService.ResolveViaPost(data,'datalist').subscribe(res=>{
      console.log(res)
      let result:any;
      result=res;
      this.TeamAllData=result.res;
      console.log('>>>>>',this.TeamAllData)


    })
  }

}
