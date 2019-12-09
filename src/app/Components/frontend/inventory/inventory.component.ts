import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../../../services/http-service.service';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
public inventoryCatagoryList:any;
public categoryList:any = [];
  constructor(public activatedRoute:ActivatedRoute,public router:Router,public httpServiceService: HttpServiceService) {
    let data: any = {
      "source": "category_view",
      "condition": {},
    };
      this.httpServiceService.httpViaPost('datalist', data).subscribe((res:any) => {
        var result:any;
        result=res.res;
        this.categoryList=result;
        //console.log(res.res);
      })

   }


  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      this.inventoryCatagoryList=resolveData.inventoryList.res;
       // console.log(resolveData.inventoryList.res);
      });
  }

 /**view details page with respective id */
  viewDetails(val:any){
     this.router.navigateByUrl('/inventory-details/' +val);
  }

  /**search Catagory Function */
  searchCatagory(catId:any){
    console.log("search Catagory ID"+'   '+catId);
  }

}
