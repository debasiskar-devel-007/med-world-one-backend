import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpServiceService } from '../../../../services/http-service.service';
@Component({
  selector: 'app-salesrep-hospital',
  templateUrl: './salesrep-hospital.component.html',
  styleUrls: ['./salesrep-hospital.component.css']
})
export class SalesrepHospitalComponent implements OnInit {
public userData:any;
public hospitalDetails:any;
  constructor(public cookieService:CookieService,public httpServiceService:HttpServiceService) {
    this.userData=JSON.parse(this.cookieService.get('user_details'));
    
    let data={"source": "users_view",
             "condition":{
               	"salesrepselect_object":this.userData._id
                         }
            }
            this.httpServiceService.httpViaPost('datalist',data).subscribe((res:any)=>{
              
              this.hospitalDetails=res.res;
              console.log(this.hospitalDetails);
            })
  }

  ngOnInit() {
  }

}
