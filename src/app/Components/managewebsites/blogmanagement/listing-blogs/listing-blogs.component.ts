import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../../../environments/environment.dev';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-listing-blogs',
  templateUrl: './listing-blogs.component.html',
  styleUrls: ['./listing-blogs.component.css']
})
export class ListingBlogsComponent implements OnInit {

    //Blogs Lib List
    public blogListConfig: any = {
      apiBaseUrl: environment.API_URL,
      listEndPoint: "datalist",
      datasource: "",
      tableName: "blogs",
      updateurl: "addorupdatedata",
      editUrl: "manage-websites/addblogs/edit",
      jwtToken: "",
      deleteEndPoint: "deletesingledata",
      addLink: "/manage-websites/addblogs/add",
      view: "blogs_view"
  
    }

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService, private readonly meta:MetaService) {

      this.meta.setTitle('MedWorldOne - Listing Blogs');
      this.meta.setTag('og:description', '');
      this.meta.setTag('twitter:description', '');
  
      this.meta.setTag('og:keyword', '');
      this.meta.setTag('twitter:keyword', '');
  
      this.meta.setTag('og:title', 'MedWorldOne - Listing Blogs');
      this.meta.setTag('twitter:title', 'MedWorldOne - Listing Blogs');
      this.meta.setTag('og:type', 'website');
      this.meta.setTag('og:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-fb.png');
      this.meta.setTag('twitter:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-twitter.png');
  
     }

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      this.blogListConfig = resolveData.blogsList.res;
      this.blogListConfig.jwtToken = this.cookieService.get('jwtToken');
    });
  }

}
