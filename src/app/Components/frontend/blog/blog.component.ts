import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { BehaviorSubject, of as observableOf } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

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



  constructor(public activeRoute: ActivatedRoute, public httpservice: HttpServiceService, private router: Router,private cookieService: CookieService) { 


     /*------------Blog List-----*/
    let data: any = {
      source:"blogs_view",
      condition: { }
    }

    this.httpservice.postDataWithoutToken("datalistwithouttoken", data).subscribe((result: any)=>{
      //console.log(result.res);
      this.blogListing = result.res;
      // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', this.blogListing);
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

