import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {

  public indexUrl: string;

  constructor(public router: Router) {
    let url = this.router.url;
    console.log('step 1: ', url);
    let d = url.split("/");
    console.log('step 2: ', d);
    this.indexUrl = d[1];
    console.log('step 3: ', this.indexUrl);
  }

  ngOnInit() {
  }

}
