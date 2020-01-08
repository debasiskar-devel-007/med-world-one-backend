import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { Observable } from 'rxjs';
import { map, startWith, throwIfEmpty } from 'rxjs/operators';
@Component({
  selector: 'app-inventorylistingquotefromapi',
  templateUrl: './inventorylistingquotefromapi.component.html',
  styleUrls: ['./inventorylistingquotefromapi.component.css']
})
export class InventorylistingquotefromapiComponent implements OnInit {
public inventoryfromApiForm:FormGroup;
public userId:number;
public userType:string;
public inven:any=[];
public InventoryDetailsFromApi:any=[];
  constructor(public formBuilder: FormBuilder, public cookieService: CookieService,public http: HttpServiceService, public router: Router,
    public activatedRoute: ActivatedRoute, public _snackBar: MatSnackBar) {
      let userData = JSON.parse(this.cookieService.get('user_details'));
      this.userId = userData._id;
      this.userType = userData.type;
      //console.log(this.userType,this.userId);
      this.generateForm();
     }

  ngOnInit() {
  }
  /**genarate form  inventoryfromApiForm*/
  generateForm(){
    this.inventoryfromApiForm = this.formBuilder.group({
      id: [null],
      inventory_name: ['', [Validators.required]],
      brand_name:["",[Validators.required]],  
    });
  }
  /**submit function */
  onSubmit(){
    console.log(this.inventoryfromApiForm.value);
  }
  /**search by product */
  searchproduct(){
    
    let postData:any={
      "inventoryname":this.inventoryfromApiForm.value.inventory_name
    }
    this.http.httpViaPost('getinventoryfromapi', postData).subscribe((response: any) => {
      //console.warn(response);
      if(response.status==true && response.messgae=='Successfully send .'){
        //console.warn("search",response.res.body.hits.hits);
        this.inven=response.res.body.hits.hits;
      }
    })
  }
  /**inventory Add */
  inventoryAdd(item:any){
     // console.log(item);      this.InventoryDetailsFromApi.push(item);
  }
  /**viewDetails */
  viewDetails(invenId:number){
    console.log(invenId);
    this.router.navigateByUrl('/inventory/inventorylistingquote/detailspage/'+invenId);
  }
}
