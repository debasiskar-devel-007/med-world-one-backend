import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-listingquotefromapidetailspage',
  templateUrl: './listingquotefromapidetailspage.component.html',
  styleUrls: ['./listingquotefromapidetailspage.component.css']
})
export class ListingquotefromapidetailspageComponent implements OnInit {

  constructor(public cookieService:CookieService,publicrouter:Router,public activatedRoute:ActivatedRoute) { 
    console.log(this.activatedRoute.snapshot.params.invenid);
  }

  ngOnInit() {
  }

}
