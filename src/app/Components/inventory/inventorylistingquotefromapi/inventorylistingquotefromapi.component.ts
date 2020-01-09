import { Component, OnInit ,Inject} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { Observable } from 'rxjs';
import { map, startWith, throwIfEmpty } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  data: any;
  alldata:any
}
@Component({
  selector: 'app-inventorylistingquotefromapi',
  templateUrl: './inventorylistingquotefromapi.component.html',
  styleUrls: ['./inventorylistingquotefromapi.component.css']
})
export class InventorylistingquotefromapiComponent implements OnInit {
  public inventoryfromApiForm: FormGroup;
  public userId: number;
  public userType: string;
  public inven: any = [];
  public InventoryDetailsFromApi: any = [];
  public InventoeryListDetails:any=[];
  public hospitalId:any;
  public hospitalDetails: any = [];
  public selectedValue:any;
  constructor(public formBuilder: FormBuilder, public cookieService: CookieService, public http: HttpServiceService, public router: Router,
    public activatedRoute: ActivatedRoute, public _snackBar: MatSnackBar,public dialog: MatDialog) {
    let userData = JSON.parse(this.cookieService.get('user_details'));
    this.userId = userData._id;
    this.userType = userData.type;
    //console.log(this.userType,this.userId);
    this.generateForm();
    if(this.userType=='admin'){
      let data = {
        "source": "users_view_hospital_withrepdetails"
      }
      this.http.httpViaPost('datalist', data).subscribe((response: any) => {
        //console.log(response);
        this.hospitalDetails=response.res;
      });
     }

     if(this.userType=='salesrep'){
      let data = {
        "source": "users_view_hospital_withrepdetails",
        "condition":{
          "salesrepid_object":this.userId
        }
      }
      this.http.httpViaPost('datalist', data).subscribe((response: any) => {
        //console.log(response);
        this.hospitalDetails=response.res;
      });
     }
     if(this.userType=='hospital'){
      let data: any;
      data = {
        'source': 'users_view',
        'condition': {
          '_id_object': this.userId
        }
      }
      this.http.httpViaPost('datalist', data).subscribe((response: any) => {
        //console.log(response);
        this.hospitalDetails=response.res;
      });
     }
  }

  ngOnInit() {
  }
  /**genarate form  inventoryfromApiForm*/
  generateForm() {
    this.inventoryfromApiForm = this.formBuilder.group({
      id: [null],
      inventory_name: [''],
    });
  }
  /**submit function */
  onSubmit() {
    console.log(this.inventoryfromApiForm.value);
  }


  /**search by product */
  searchproduct() {

    let postData: any = {
      "api": this.inventoryfromApiForm.value.inventory_name
    }
    this.http.httpViaPost('getinventoryfromapi', postData).subscribe((response: any) => {
      //console.warn(response);
      if (response.status == true && response.messgae == 'Successfully send .') {
        //console.warn("search",response.res.body.hits.hits);
        
          this.inven = response.res.body.hits.hits;
        
        
      }
    })
  }


  /**inventory Add */
  inventoryAdd(item: any) {
    // console.log(item);
    item.quantity=1;
    item.saleprice=1;

    this.InventoeryListDetails.push(item);
    //console.log(this.InventoeryListDetails);

  }

  delete(index:number){
    this.InventoeryListDetails.splice(index,index+1);
  }

    /**select onchnage  */
    hhospitalName(data: any) {
      this.hospitalId = data;
      //console.log(data);
    }

  /**viewDetails */
  viewDetails(inventoryDetails: any) {
    //console.log(invenId);
    const dialogRef = this.dialog.open(listingquotedetails, {
      panelClass:'viewlistingQuoteModal',
       data: {alldata: inventoryDetails}
      
     });
 
     dialogRef.afterClosed().subscribe(result => {
       
       
     });
  }
}


@Component({
  selector: 'listingquotedetails',
  templateUrl: 'listingquotefromapi.html',
  styleUrls: ['./inventorylistingquotefromapi.component.css']
})
export class listingquotedetails {
 
  constructor(
    public dialogRef: MatDialogRef<listingquotedetails>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      //console.log(data);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}