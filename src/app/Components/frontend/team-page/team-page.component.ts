import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent implements OnInit {

   public teamList:any = [];
  constructor( public activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.data.forEach(data => {
      console.log(data);
      let result: any= data.teamList.res;
      this.teamList = result;
      console.log("dataaaaaaaa", this.teamList);
    })
  
  }


}
