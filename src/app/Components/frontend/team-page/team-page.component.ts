import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MetaService } from '@ngx-meta/core';
@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent implements OnInit {

  public teamList: any = [];
  constructor(public activeRoute: ActivatedRoute, public dialog: MatDialog, private readonly meta: MetaService) {

    this.meta.setTitle('MD Stock International - our team');
      this.meta.setTag('og:description', 'Our team of expert professionals at MD Stock International comprises of top individuals in the industry that will help you get the best equipment and supplies for your Medical facility.');
      this.meta.setTag('twitter:description', 'Our team of expert professionals at MD Stock International comprises of top individuals in the industry that will help you get the best equipment and supplies for your Medical facility.');

      this.meta.setTag('og:keyword', 'MD Stock International Team, MD Stock International Professionals, MD Stock International Experts');
      this.meta.setTag('twitter:keyword', 'MD Stock International Team, MD Stock International Professionals, MD Stock International Experts');

      this.meta.setTag('og:title', 'MD Stock International - our team');
      this.meta.setTag('twitter:title', 'MD Stock International - our team');
      this.meta.setTag('og:type', 'website');
      this.meta.setTag('og:image', 'https://dev.mdstockinternational.com/assets/images/logo.png');
      this.meta.setTag('twitter:image', 'https://dev.mdstockinternational.com/assets/images/logo.png');

   }

  ngOnInit() {
    this.activeRoute.data.forEach(data => {
     
      let result: any = data.teamList.res;
      this.teamList = result;
      console.log(result);
    })

  }
  openDialog(val: any) {
  

    const dialogRef = this.dialog.open(TeamDetails, {
      data: val,
      panelClass: 'modal_wrapper'
    });

    dialogRef.afterClosed().subscribe(result => {
     
    });
  }
}

@Component({
  templateUrl: './teamDetails.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamDetails {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    
  }
}
