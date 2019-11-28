import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment.prod';

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

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private cookieService: CookieService) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      this.blogListConfig.datasource = resolveData.blogsList.res;
      this.blogListConfig.jwtToken = this.cookieService.get('jwtToken');
    });
  }

}
