import { Component, OnInit,Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  data: any;
  alldata: any
}
@Component({
  selector: 'app-manage-pakage-details',
  templateUrl: './manage-pakage-details.component.html',
  styleUrls: ['./manage-pakage-details.component.css']
})
export class ManagePakageDetailsComponent implements OnInit {
public packageDetails:any=[];
public disposalDevice:any=[];
public medicaldevice:any=[];
  constructor(public dialog: MatDialog,public router:Router,public activatedRoute:ActivatedRoute,public http: HttpServiceService,) {
    //console.log(this.activatedRoute.snapshot.params.id);

    if(this.activatedRoute.snapshot.params.id){
      let post={
        "source": 'package_hospital_details_view',
        "condition":{
        "_id_object":this.activatedRoute.snapshot.params.id
        }
      }
      this.http.httpViaPost('datalist',post).subscribe((res:any)=>{
       //console.warn(res);
        this.packageDetails=res.res[0].package_details[0];
        this.medicaldevice=res.res[0].medical_device;
        this.disposalDevice=res.res[0].disposal_device;
      })     
    }
   }

  ngOnInit() {
  }
  disposalViewDetails(item:any){
    //console.log(inventoryDetails);
 const dialogRef = this.dialog.open(disposalDetails1, {
   panelClass: 'viewlistingQuoteModal',
   data: { alldata: item }

 });

 dialogRef.afterClosed().subscribe(result => {
 });
 }
  buildPackageNow(){console.log("buildPackageNow")}
  cancel(){console.log("cancel")
}
}

/**disposalDetails */
@Component({
  selector: 'listingquotedetails',
  templateUrl: '../manage-hospital-package/disposaldetails.html',
  styleUrls: ['../manage-hospital-package/manage-hospital-package.component.css']
})
export class disposalDetails1 {

  constructor(
    public dialogRef: MatDialogRef<disposalDetails1>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    //console.log(data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}