import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-manage-pakage-details',
  templateUrl: './manage-pakage-details.component.html',
  styleUrls: ['./manage-pakage-details.component.css']
})
export class ManagePakageDetailsComponent implements OnInit {
public packageDetails:any=[];
public disposalDevice:any=[];
public medicaldevice:any=[];
  constructor(public router:Router,public activatedRoute:ActivatedRoute,public http: HttpServiceService,) {
    //console.log(this.activatedRoute.snapshot.params.id);

    if(this.activatedRoute.snapshot.params.id){
      let post={
        "source": 'package_hospital_details',
        "condition":{
        "_id_object":this.activatedRoute.snapshot.params.id
        }
      }
      this.http.httpViaPost('datalist',post).subscribe((res:any)=>{
       // console.warn(res);
        this.packageDetails=res.res[0].package_details;
        this.medicaldevice=res.res[0].medical_device;
        this.disposalDevice=res.res[0].disposal_device;
      })     
    }
   }

  ngOnInit() {
  }

}
