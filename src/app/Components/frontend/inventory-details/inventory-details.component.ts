import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpServiceService } from '../../../services/http-service.service';
@Component({
  selector: 'app-inventory-details',
  templateUrl: './inventory-details.component.html',
  styleUrls: ['./inventory-details.component.css']
})
export class InventoryDetailsComponent implements OnInit {
public inventoryDetails:any={};
public dynamic_attributes:any;
public dynamic_attributes1:any=[];
  constructor(public activatedRoute: ActivatedRoute,public httpServiceService: HttpServiceService) {
    let url:any={};
    url=this.activatedRoute.snapshot.params.id; 
    let data: any = {
      "source": "inventories_list_view",
      "condition": {
        "_id_object":url
      },
    };
      this.httpServiceService.httpViaPost('datalist', data).subscribe((result:any) => {
        console.log(result.res[0]);
        this.inventoryDetails=result.res[0];
         this.dynamic_attributes=result.res[0].dynamic_attributes;
         console.log('this.dynamic_attributes',this.dynamic_attributes);
         
         let dynamic_attributes1=[];
         console.log(dynamic_attributes1);
         for (let i in this.dynamic_attributes) {
          console.log(i);
          this.dynamic_attributes1.push({key:Object.keys(this.dynamic_attributes[i])[0],value:Object.values(this.dynamic_attributes[i])[0]})
          //this.dynamic_attributes1.push((this.dynamic_attributes[i]))
        }
        console.log('this.dynamic_attributes1',this.dynamic_attributes1);
      })
   }

  ngOnInit() {
  }

  getdata(val:any,i:any){
    console.log('val',val,i);
    for(let b in val){
      console.log('in loop',b,val[b]);
    }
  }

}
