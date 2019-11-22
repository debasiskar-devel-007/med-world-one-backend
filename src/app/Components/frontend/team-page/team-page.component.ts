import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent implements OnInit {

  public teamList: any = [];
  constructor(public activeRoute: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    this.activeRoute.data.forEach(data => {
      console.log(data);
      let result: any = data.teamList.res;
      this.teamList = result;
      console.log("dataaaaaaaa", this.teamList);
    })

  }
  openDialog(val: any) {
    console.log(val)

    const dialogRef = this.dialog.open(TeamDetails, {
      data: val,
      panelClass: 'modal_wrapper'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  templateUrl: './teamDetails.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamDetails {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data)
  }
}
