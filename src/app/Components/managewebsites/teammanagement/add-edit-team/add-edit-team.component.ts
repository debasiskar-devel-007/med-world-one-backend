import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-edit-team',
  templateUrl: './add-edit-team.component.html',
  styleUrls: ['./add-edit-team.component.css']
})
export class AddEditTeamComponent implements OnInit {
  public teamDataList:any=[];
  public serverUrl:any="https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/";
  public addendpoint:any="addorupdatedata";
  public listPageRoute:any="manage-websites/team/list";
  public getdataEndpoint:any="datalist";
  
  public configData: any = {
    baseUrl: "http://3.15.236.141:5005/",
    endpoint: "uploads",
    size: "51200", // kb
    format: ["jpg", "jpeg", "png", "bmp", "zip", 'html'], // use all small font
    type: "team-picture",
    path: "team",
    prefix: "team_picture_"
  }


  constructor( public activeRoute : ActivatedRoute ) { }

  ngOnInit() {
    this.activeRoute.data.forEach(data => {
      let result: any;
      result = data.teamList.res;
      this.teamDataList = result;    
    })
    
    if(this.activeRoute.snapshot.params._id){
       this.activeRoute.data.forEach(data => {
        let result: any;
        result = data.teamList.res;
        this.teamDataList = result;    
      })
    }
  }

}
