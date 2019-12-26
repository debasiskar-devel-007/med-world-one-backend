import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../../../services/http-service.service';
import { CookieService } from 'ngx-cookie-service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-purchase-comparison-search-list',
  templateUrl: './purchase-comparison-search-list.component.html',
  styleUrls: ['./purchase-comparison-search-list.component.css']
})
export class PurchaseComparisonSearchListComponent implements OnInit {
  public type: string;
  public inventoryCatagoryList: any = {};
  public categoryList: any = [];
  public brandList: any = [];
  public user_id: any;
  public inventoryUserId: any = [];
  public flag: number;
  public inventory_category_list: any;
  public flg: number = 0;
  public inventory_cat:any;
  public inventory_brand:any;
  public inventory_name:any;
  public inventory_sku:any;

  constructor(public dialog: MatDialog, public cookieService: CookieService, public activatedRoute: ActivatedRoute,
    public router: Router, public httpServiceService: HttpServiceService, public _snackBar: MatSnackBar) { this.qouteDetails() }


  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
    
      this.inventoryCatagoryList = resolveData.inventoryList.inventory;
      this.inventory_category_list = resolveData.inventoryList.category;
      // this.brandList = resolveData.inventoryList.brands;
      //  console.log(resolveData.inventoryList.category);
      //console.log(resolveData.inventoryList.inventory);
      //  console.log(resolveData.inventoryList.brands);
    });


    /** getting the categorylist **/
    // this.getCategoryList();
  }

  /**view details page with respective id */
  viewDetails(val: any) {
    this.router.navigateByUrl('admin/inventory/inventory-details/' + val);
  }

  

  /**search Brand Function */
  searchBrand(cat_id: any) {
    var data: any;
    data = {
      'source': 'category_view',
      'token': this.cookieService.get('jwtToken'),
      condition: {
        _id_object: cat_id
      }
    };
    this.httpServiceService.httpViaPost("datalist", data).subscribe(response => {
      let result: any;
      result = response.res;
      this.brandList = result[0].brand_data;
    });

  }



  search(){
      
    let postData ={
      "source": "inventories_list_view_async",
      'condition':{
        'category_id_object':this.inventory_cat,
        'brand_id_object':this.inventory_brand,
        'sku_regex':this.inventory_sku,
        'inventory_search_regex':this.inventory_name
      },
      "limit":30
    }
    this.httpServiceService.httpViaPost('datalist', postData).subscribe((res: any) => {
      this.inventoryCatagoryList = res.res;
    })
   
  }


  /*****Add addQuote function ******/
  addQuote(list_inven: any , inven_id:any) {

//  console.log("inven_id",inven_id);
    if (this.cookieService.get('user_details') != '' && this.cookieService.get('user_details') != null && this.cookieService.get('user_details') != undefined) {
      if (this.flag != 0) {
        /**check inventory already exsities in cart or not */
        for (let i in this.inventoryUserId) {

          // console.log(this.inventoryUserId[i].inventory);
                 //console.log(this.inventoryUserId[i].inventory_details._id);

          if (this.inventoryUserId[i].inventory_details._id.indexOf(inven_id) > -1) {
            //console.log("inventory id match");
            this._snackBar.open('This Inventory Is Already In Your Cart', '', {
              duration: 1000,
            });
            this.flg = 1;
          }
        }
        if (this.flg == 0) {
          let user = JSON.parse(this.cookieService.get('user_details'));
          this.user_id = user._id;
          //console.log("user_id"+' '+this.user_id);
          // console.log("inventory_id"+' '+invenId);
          // console.log("quantity"+' '+1);

          let postData = {
            "source": "purchase_comparison_quote",
            "data": {
              "inventory_details": list_inven,
              "user_id": this.user_id,
              "quantity": 1,
            },
            "sourceobj": ["user_id", "inventory"],
          };
          //console.log(postData);
          this.httpServiceService.httpViaPost('addorupdatedata', postData).subscribe((res: any) => {
            //
            console.log(res);
            this._snackBar.open('Inventory Added To Your Cart', '', {
              duration: 1000,
            });
          })
        }


      }
      else {
        console.log("first entry");
        let user = JSON.parse(this.cookieService.get('user_details'));
        this.user_id = user._id;
        //console.log("user_id"+' '+this.user_id);
        // console.log("inventory_id"+' '+invenId);
        // console.log("quantity"+' '+1);

        let postData = {
          "source": "purchase_comparison_quote",
          "data": {
            "inventory_details": list_inven,
            "user_id": this.user_id,
            "quantity": 1,
          },
          "sourceobj": ["user_id", "inventory"],
        };
        this.httpServiceService.httpViaPost('addorupdatedata', postData).subscribe((res: any) => {
          this._snackBar.open('This Inventory Add in your Cart', '', {
            duration: 1000,
          });

        })
      }
    }
    else {
      // console.log("Please Log IN");

      //  this.router.navigateByUrl('/login'+this.router.url);
      //  console.log('/login'+this.router.url)
    }

  }


  /**fetch user inventory details */
  qouteDetails() {
    if (this.cookieService.get('user_details') != '' && this.cookieService.get('user_details') != null && this.cookieService.get('user_details') != undefined) {
      let user = JSON.parse(this.cookieService.get('user_details'));
      this.type = user.type;
      
      let postData = {
        "source": "purchase_comparison_quote", "condition": {
          "user_id_object": user._id
        },
      };
      this.httpServiceService.httpViaPost('datalist', postData).subscribe((res: any) => {
        //console.log(res);
        this.inventoryUserId = res.res;
        this.flag = res.resc;
       //console.log(this.inventoryUserId);
      })
    }
  }



  /** category list **/
  getCategoryList() {
    var data: any = {
      source: 'inventory_category'
    }
    this.httpServiceService.httpViaPost('datalist', data).subscribe(response => {
      this.inventory_category_list = response.res;
    });
  }
  goToCart(){
    this.router.navigateByUrl('/admin/purchasecomparision/cart');
  }
  
}


