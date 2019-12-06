import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-inventory-details',
  templateUrl: './inventory-details.component.html',
  styleUrls: ['./inventory-details.component.css']
})
export class InventoryDetailsComponent implements OnInit {

  constructor(public activatedRoute: ActivatedRoute) {
    let url:any={};
         url=this.activatedRoute.snapshot.params.id;
        console.log(url)
         console.log( this.activatedRoute.snapshot.params.id)
  
   }

  ngOnInit() {
  }

}
