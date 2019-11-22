import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-nav-sales',
  templateUrl: './left-nav-sales.component.html',
  styleUrls: ['./left-nav-sales.component.css']
})
export class LeftNavSalesComponent implements OnInit {
public pageUrl: string;
  constructor( public router: Router) {
    console.log(this.router.url)
    let url = this.router.url;
    let breackUrl = url.split("/");
    this.pageUrl = breackUrl[1];
 
    console.log('step 3: ', this.pageUrl);
   }

  ngOnInit() {
  }





}
