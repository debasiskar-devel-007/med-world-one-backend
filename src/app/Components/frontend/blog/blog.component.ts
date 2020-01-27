import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { BehaviorSubject, of as observableOf } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { MetaService } from '@ngx-meta/core';

export class FileNode{
  children: FileNode[];
  blogListing: string;
  type:any
}


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponentFrontEnd implements OnInit {
  
  public p_id: any;
  public indexval:any;
  public data:any;
  public blogListing: any = [];  
  public blogcategorycount:any;
  public blogList: any;
  public resc: any = [];  
  public catData: any;
  public blogCount: any =[];
  public blogtitle: any;

  /*------------TREE NESTEDDATA-----*/

  public nestedTreeControl: NestedTreeControl<FileNode>;
  public blogCategoryDataSource:MatTreeNestedDataSource<FileNode>;
  public dataChange:BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);

  /*------------TREE NESTEDDATA-----*/



  constructor(public activeRoute: ActivatedRoute, public httpservice: HttpServiceService, private router: Router,private cookieService: CookieService, private readonly meta: MetaService) { 

    this.meta.setTitle('MD Stock International - Blogs');
    this.meta.setTag('og:description', 'Check out the latest blogs and articles about everything that is happening in the Medical and Healthcare industry written by our team of experts and top professionals.');
    this.meta.setTag('twitter:description', 'Check out the latest blogs and articles about everything that is happening in the Medical and Healthcare industry written by our team of experts and top professionals.');

    this.meta.setTag('og:keyword', 'MD Stock International Blogs, Medical Blogs, Healthcare Blogs');
    this.meta.setTag('twitter:keyword', 'MD Stock International Blogs, Medical Blogs, Healthcare Blogs');

    this.meta.setTag('og:title', 'MD Stock International - Blogs');
    this.meta.setTag('twitter:title', 'MD Stock International - Blogs');
    this.meta.setTag('og:type', 'https://dev.mdstockinternational.com/blog');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://dev.mdstockinternational.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://dev.mdstockinternational.com/assets/images/logo.png');


     /*------------Blog List-----*/
    let data: any = {
      source:"blogs_view",
      condition: { }
    }

    this.httpservice.postDataWithoutToken("datalistwithouttoken", data).subscribe((result: any)=>{
      //console.log(result.res);
      this.blogListing = result.res;
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', this.blogListing);
    });

     /*------------End Blog List-----*/


     /*------------Blog Category-----*/
    /*------------TREE NESTEDDATA-----*/
    this.nestedTreeControl = new NestedTreeControl<FileNode> (this._getChildren);
    this.blogCategoryDataSource = new MatTreeNestedDataSource();

    this.dataChange.subscribe(data => this.blogCategoryDataSource.data = data);

    this.dataChange.next([
      {
        blogListing: "blog.blogtitle",
        type: "",
        children:[
          {
            blogListing: "blog.blogtitle",
            type: "exe",
            children: [],
          }
        ],
      },
      {
        blogListing: "blog.blogtitle",
        type: "exe",
        children:[],
      },
    ]);

   }

   private _getChildren = (item: FileNode) => { return observableOf(item.children); };
   hasNestedChild = (_: number, nodeData: FileNode) => { return ! (nodeData.type); };

     /*------------TREE NESTEDDATA-----*/

     
     /*------------End Blog Category-----*/


  ngOnInit() {
    
    
      let data: any = {
        source:"blog_category_view"
      }
  
      this.httpservice.postDataWithoutToken("datalistwithouttoken", data).subscribe((result: any)=> {
        // console.log(result.res);
        this.blogCategoryDataSource = result.res;
        //console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', this.blogCategoryDataSource);
      });



      let catData: any = {
        source:"blog_category_view"
      }
  
      this.httpservice.postDataWithoutToken("datalistwithouttoken", catData).subscribe((result: any)=>{
        // console.log(result.res);
        this.blogcategorycount = result.resc;
        // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', this.blogcategorycount);
      });



      // let catSubData: any = {
      //   source:"blogs_view",
      //   condition: {blogcat_object: this.blogCategoryDataSource}
      // }
  
      // this.httpservice.postDataWithoutToken("datalistwithouttoken", catSubData).subscribe((result: any)=>{
      //   // console.log(result.resc);
      //   this.blogCount = result.resc;
      //   console.log('>>>>>>>>>>>>>koushik count>>>>>>>>>>>>', this.blogCount);
      // });

    
    
    
  }

  //***********blog list view in blog detail************//
  blogdetail(val:any){
    // console.log(val)
    this.router.navigateByUrl('/blog-details/' +val)
  }

  showmore(index:any) {
    this.p_id = index._id;
   }

   copyText(val:any){
    console.log('copyText');
  }
  
}

