import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import {HttpServiceService} from '../../../../services/http-service.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-listing-blogcat',
  templateUrl: './listing-blogcat.component.html',
  styleUrls: ['./listing-blogcat.component.css']
})
export class ListingBlogcatComponent implements OnInit {

public baseUrl:any=environment.API_URL;

  //Listing for blog category//
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


  public bloglist:any;


  //Blogs Lib List
  
// ===============================Declarations=========================
public bloglist_skip: any = ["_id","description","created_at","credentials","blogs_image","blogs_file"];
public detail_skip_array:any=["_id"]
public bloglist_modify_header: any = {"status":"Status","description_html":"Description"};
public tableName: any = 'blogs';
public UpdateEndpoint: any = "addorupdatedata";
public deleteEndpoint: any = "deletesingledata";
public searchingEndpoint: any = "datalist";
public editUrl: any = 'manage-websites/addblogs/edit';
public user_cookie:any=this.cookieService.get('jwtToken');
public apiUrl: any = this.baseUrl;
public status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
public view:any="blogs_view";
// public date_search_source:any="events_view";
public date_search_endpoint:any="datalist";
public search_settings: any = {
    selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
    datesearch:[{startdatelabel:"Start Date",enddatelabel:"End Date", submit:"Search By Date",  field:"created_at"}],   // this is use for  date search 

  };
// ====================================================================




  constructor(private activatedRoute: ActivatedRoute, private cookieService: CookieService,public http:HttpServiceService) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      this.blogListConfig.datasource = resolveData.blogCatList.res;
      this.blogListConfig.jwtToken = this.cookieService.get('jwtToken');      
    });


    //listing for blog //

    let data:any;
    data={
      'source':'blogs_view',
      'token': this.cookieService.get('jwtToken') 
    };
      this.http.httpViaPost('datalist',data).subscribe((res)=>{
        let result:any;
        result=res;
        this.bloglist=result.res;
        console.log('>>>>>>>>>>>>>>>',this.bloglist)

      })

  }

}
