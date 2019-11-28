import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-listing-blogcat',
  templateUrl: './listing-blogcat.component.html',
  styleUrls: ['./listing-blogcat.component.css']
})
export class ListingBlogcatComponent implements OnInit {

  //Listing for blog category
  public blogListConfig:any = {
    apiBaseUrl: environment.API_URL,
    listEndPoint: "datalist",
    datasource: "",
    tableName: "blog_category",
    updateurl: "addorupdatedata",
    editUrl: "manage-websites/addblogcategory/edit/",
    jwtToken: "",
    deleteEndPoint: "deletesingledata",
    addLink: "/manage-websites/addblogcategory/edit/add",
    view: "blog_category_view"
    
  }
  constructor(private activatedRoute: ActivatedRoute, private cookieService: CookieService) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      this.blogListConfig.datasource = resolveData.blogCatList.res;
      this.blogListConfig.jwtToken = this.cookieService.get('jwtToken');      
    });
  }

}
