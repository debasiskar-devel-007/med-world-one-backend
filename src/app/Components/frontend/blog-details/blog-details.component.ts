import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { BehaviorSubject, of as observableOf } from 'rxjs';

export class FileNode{
  children: FileNode[];
  blogListing: string;
  type:any;
}

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  public blogDetail:any;
  public p_id: any;
  public blog:any = '';
  public blog_img:any;
  public blog_image:any;
  public blogcat:any = ''; 
  public blogcategorycount:any;
  public resc: any = [];
  public blogCount: any =[];
  public blogListing: any = [];    
  public blogtitle: any;

    /*------------TREE NESTEDDATA-----*/

    public nestedTreeControl: NestedTreeControl<FileNode>;
    public blogCategoryDataSource:MatTreeNestedDataSource<FileNode>;
    public dataChange:BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);
  
    /*------------TREE NESTEDDATA-----*/

  constructor(private activatedRoute: ActivatedRoute, private cookieService: CookieService, public httpservice: HttpServiceService, private router: Router) { 




/*------------Most Viewed Blogs List-----*/
let data: any = {
  source:"blogs_view",
  condition: { }
}

this.httpservice.postDataWithoutToken("datalistwithouttoken", data).subscribe((result: any)=>{
  //console.log(result.res);
  this.blogListing = result.res;
  //console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', this.blogListing);
});

 /*------------End Most Viewed Blogs List-----*/









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



  ngOnInit() {

    let data: any = {
      source:"blog_category_view"
    }

    this.httpservice.postDataWithoutToken("datalistwithouttoken", data).subscribe((result: any)=>{
      // console.log(result.res);
      this.blogCategoryDataSource = result.res;
      // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', this.blogCategoryDataSource);
    });


    
    let catData: any = {
      source:"blog_category_view"
    }

    this.httpservice.postDataWithoutToken("datalistwithouttoken", catData).subscribe((result: any)=>{
      // console.log(result.res);
      this.blogcategorycount = result.resc;
      // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', this.blogcategorycount);
    });

    // ************* blog details *****************//
      
    this.activatedRoute.data.forEach((data: any) => {
      this.blog = data.blogCatList.res;
      // console.log('>>>>>>>kb>>>>>>>',this.blog)  
      // this.blog_img=this.blog[0].blogs_image[0];
      
    })

  }

  //*********** sub blog list view in blog detail************//
  // blog(val:any){
  //   this.blogcat = val._id;
  //   // this.router.navigateByUrl('/blogdetail/'+val._id)
  // }

//*********** end sub blog list view in blog detail************//

copyText(val:any){
  console.log('copyText');
}


showmore(index:any) {
  this.p_id = index._id;
 }


  //***********blog list view in blog detail************//
  blogdetail(val:any){
    // console.log(val)
    this.router.navigateByUrl('/blog-details/' +val)
  }


}
