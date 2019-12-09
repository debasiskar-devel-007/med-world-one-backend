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
public brandList:any=[];
  constructor(public activatedRoute:ActivatedRoute,public router:Router,public httpServiceService: HttpServiceService) {}
   

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      this.inventoryCatagoryList=resolveData.inventoryList.inventory;
      this.categoryList=resolveData.inventoryList.category;
      this.brandList=resolveData.inventoryList.brands;
      //  console.log(resolveData.inventoryList.category);
      //  console.log(resolveData.inventoryList.inventory);
      //  console.log(resolveData.inventoryList.brands);
      });
  }

 /**view details page with respective id */
  viewDetails(val:any){
     this.router.navigateByUrl('/inventory-details/' +val);
  }

  /**search Catagory Function */
  searchCatagory(catId:any){
    console.log("search Catagory ID"+'   '+catId);
    let postData={
      "source":"inventories_list_view",
      condition:{	"_id_object":catId}
    };
    this.httpServiceService.httpViaPost('datalist',postData).subscribe((res:any)=>{console.log(res)})
  }


/**search Brand Function */
  searchBrand(brandId:any){
    console.log("search brand ID"+'   '+brandId);
  }


/**inventory search */
search(event:any){
  console.log("search by Inventory name"+'   '+event.toLowerCase( ));
  let postData={
    "source":"inventories_list_view",
    condition:{	"inventory_name_regex":event.toLowerCase( )}
  };
  this.httpServiceService.httpViaPost('datalist',postData).subscribe((res:any)=>{console.log(res)})
}


}
