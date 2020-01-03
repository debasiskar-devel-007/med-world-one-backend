import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-frontend-footer',
  templateUrl: './frontend-footer.component.html',
  styleUrls: ['./frontend-footer.component.css']
})
export class FrontendFooterComponent implements OnInit {

  public headerFlag: string = '';

  constructor(public router: Router, public activeRoute: ActivatedRoute) {
    this.headerFlag = this.activeRoute.snapshot.url[0].path;
  }

  ngOnInit() {
  }

}
