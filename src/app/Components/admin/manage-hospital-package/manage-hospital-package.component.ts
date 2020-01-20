import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-hospital-package',
  templateUrl: './manage-hospital-package.component.html',
  styleUrls: ['./manage-hospital-package.component.css']
})
export class ManageHospitalPackageComponent implements OnInit {
public packageHospitalForm:FormGroup;
public deplist:any;
public medicalDevice:any;
public disInventory:any;
public medDevice:any;
public disposableInventory:any;
public PackageInventoryDetails:any;
public APiInventoeryListDetails:any;
  constructor(public formBuilder: FormBuilder, public http: HttpServiceService,
    public cookieService: CookieService,public activatedRoute:ActivatedRoute) { 
      this.packageHospitalForm=this.formBuilder.group({
        package_name:['',Validators.required],
        department:['',Validators.required],
        package_description:['',Validators.required]
      });


      /**department fetch */

      let post={
        "source": 'department',
      }
      this.http.httpViaPost('datalist',post).subscribe((res:any)=>{
        this.deplist=res.res;
        //console.warn(res);
      })
    }

  ngOnInit() {
  }

  /**search medical device form other api */
  medicalDeviceSearch(medDevice:any){
   // console.log(medDevice)
    let postData: any = {
      "api": medDevice
    }
    this.http.httpViaPost('getinventoryfromapi', postData).subscribe((response: any) => {
      //console.warn(response);
      if (response.status == true && response.messgae == 'Successfully send .') {
        this.medDevice=response.res.body.hits.hits;
        //console.warn("search",response.res.body.hits.hits)
      }
    })
  }



  /**Disposable Inventory */
  inventorySearch(disposal:any){
    console.log(disposal);
    let postData: any = {
      "source":'inventories_list_view_async',
      "inventory_search_regex": disposal
    }
    this.http.httpViaPost('datalist', postData).subscribe((response: any) => {
      console.warn(response);
      // if (response.status == true && response.messgae == 'Successfully send .') {
      //   this.medDevice=response.res.body.hits.hits;
      //   //console.warn("search",response.res.body.hits.hits)
      // }
    })
  }


  /**inventory Add */
  inventoryAdd(item: any) {
    // console.log(item);
     
     let itm:any=item._source;
     itm.quantity=1;
     itm.purchaseyear='';
     itm.cosmetic_condition='';
     itm.selling_timeframe='';
     itm.original_cost=0;
     itm.additional_information='';
     itm.listing_image=[];
     // item.saleprice = 1;
 
     this.APiInventoeryListDetails.push(itm);
     //console.log(this.InventoeryListDetails);
 
   }

    /** blur function **/
    inputBlur(val: any) {
      this.packageHospitalForm.controls[val].markAsUntouched();
    }
    
  onSubmit(){
    for (let x in this.packageHospitalForm.controls) {
      this.packageHospitalForm.controls[x].markAsTouched();
    }
    console.log(this.packageHospitalForm.controls);
  }
}
