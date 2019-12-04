import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { BehaviorSubject, of as observableOf } from 'rxjs';

export class FileNode{
  children: FileNode[];
  filename: string;
  type:any;
}


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponentFrontEnd implements OnInit {

  
  public indexval:any; 
  public data:any;
  public blogListing: any = [];  
  public blogcategorycount:any;
  public blogList: any;

  /*------------TREE NESTEDDATA-----*/

  public nestedTreeControl: NestedTreeControl<FileNode>;
  public blogCategoryDataSource:MatTreeNestedDataSource<FileNode>;
  public dataChange:BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);

  /*------------TREE NESTEDDATA-----*/



  constructor(public activeRoute: ActivatedRoute, public httpservice: HttpServiceService) { 


     /*------------Blog List-----*/
    let data: any = {
      source:"blogs_view",
      condition: { }
    }

    this.httpservice.postDataWithoutToken("datalistwithouttoken", data).subscribe((result: any)=>{
      //console.log(result.res);
      this.blogListing = result.res;
      //console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', this.blogListing);
    });

     /*------------End Blog List-----*/


     /*------------Blog Category-----*/
    /*------------TREE NESTEDDATA-----*/
    this.nestedTreeControl = new NestedTreeControl<FileNode> (this._getChildren);
    this.blogCategoryDataSource = new MatTreeNestedDataSource();

    this.dataChange.subscribe(data => this.blogCategoryDataSource.data = data);

    this.dataChange.next([
      {
        filename: "test",
        type: "",
        children:[
          {
            filename: "test3",
            type: "exe",
            children: [],
          }
        ],
      },
      {
        filename: "test2",
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
  
      this.httpservice.postDataWithoutToken("datalistwithouttoken", data).subscribe((result: any)=>{
        // console.log(result.res);
        this.blogCategoryDataSource = result.res;
        // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', this.blogCategoryDataSource);
      });

    
    
  }

}

