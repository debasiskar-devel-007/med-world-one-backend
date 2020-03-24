import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../../environments/environment.dev';
import { MetaService } from '@ngx-meta/core';


@Component({
  selector: 'app-add-edit-team',
  templateUrl: './add-edit-team.component.html',
  styleUrls: ['./add-edit-team.component.css']
})
export class AddEditTeamComponent implements OnInit {

  public teamDataList:any=[];
  public serverUrl:any =environment.API_URL;
  public addendpoint:any="addorupdatedata";
  public listPageRoute:any="manage-websites/team-category/list";
  public getdataEndpoint:any="datalist";
  public sourceName :any="team_management";
  public categorySourceName : any = "team_category";
  public configData: any = {
    baseUrl: "https://fileupload.influxhostserver.com/",
    endpoint: "uploads",
    size: "51200", // kb
    format:["jpg", "jpeg", "png", "bmp", "zip", 'html'],  // use all small font
    type: "team-picture",
    path: "team",
    prefix: "team-picture_",
    formSubmit: false,
    conversionNeeded: 0,
    bucketName: "teammanagement-files"
  }
  constructor( public activeRoute : ActivatedRoute, private readonly meta:MetaService ) { 

    this.meta.setTitle('MedWorldOne - Listing Language');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'MedWorldOne - Listing Language');
    this.meta.setTag('twitter:title', 'MedWorldOne - Listing Language');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-fb.png');
    this.meta.setTag('twitter:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-twitter.png');


  }

  ngOnInit() {
    // this.activeRoute.data.forEach(data => {
    //   let result: any;
    //   result = data.teamList.res;
    //   this.teamDataList = result;    
    // })
    
    if(this.activeRoute.snapshot.params._id){
       this.activeRoute.data.forEach(data => {
        let result: any;
        result = data.teamList.res;
        this.teamDataList = result;    
      })
    }
  }

}
