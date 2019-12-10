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
public bloglist:any;
public blogCatList: any ="";

  //Listing for blog category//
  public blogCatListConfig:any = {
    apiBaseUrl: environment.API_URL,
    listEndPoint: "datalist",
    datasource: "blog_category",
    tableName: "blog_category",
    updateurl: "addorupdatedata",
    editUrl: "manage-websites/addblogcategory/edit/",
    jwtToken: "",
    deleteEndPoint: "deletesingledata",
    addLink: "/manage-websites/addblogcategory/add",
    view: "blog_category_view"
    
  }



  //Blogs Lib List
  
// ===============================Declarations for blog listing=========================
public bloglist_skip: any = ["_id","description","created_at","credentials","blogs_image","blogs_file"];
public detail_skip_array:any=["_id"]
public bloglist_modify_header: any = {"status":"Status","description html":"Description","blogtitle":"Blog Title"};
public tableName: any = 'blogs';
public UpdateEndpoint: any = "addorupdatedata";
public deleteEndpoint: any = "deletesingledata";
public searchingEndpoint: any = "datalist";
public editUrl: any = 'manage-websites/addblogs/edit/';
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




  constructor(private activatedRoute: ActivatedRoute, private cookieService: CookieService,public http:HttpServiceService) {

    this.activatedRoute.data.subscribe(resolveData => {
      this.blogCatListConfig = resolveData.blogCatList.res;
      console.log('>>>>>>>>>>>>>>>koushik blog catlist>>>>>>>>>>>>>', this.blogCatListConfig)

      this.blogCatListConfig.jwtToken = this.cookieService.get('jwtToken');      
    });


   }

  ngOnInit() {
    
      
      //blog data from datalist //

     let data:any;
     data={
       'source':'blogs_view',
       'token': this.cookieService.get('jwtToken') 
     };
       this.http.httpViaPost('datalist',data).subscribe((res)=>{
         let result:any;
         result=res;
         this.bloglist=result.res;    
       })
       
  
  }

}
