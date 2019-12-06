import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpServiceService } from '../../../../services/http-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-salesrep-hospital',
  templateUrl: './salesrep-hospital.component.html',
  styleUrls: ['./salesrep-hospital.component.css']
})
export class SalesrepHospitalComponent implements OnInit {

  /** declarations **/
  public userData: any;
  public hospitalDetails: any = [];
  public fullImagePath: any = [];
  // "https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/files/medpartner_picture_-jhonny-1574754693840.png";

  constructor(public cookieService: CookieService, public httpServiceService: HttpServiceService,
    private router: Router) {
    this.userData = JSON.parse(this.cookieService.get('user_details'));

    let data = {
      "source": "users_view",
      "condition": {
        "salesrepselect_object": this.userData._id
      }
    }
    this.httpServiceService.httpViaPost('datalist', data).subscribe((response: any) => {

      this.hospitalDetails = response.res;
      console.log("->", this.hospitalDetails);
      for (let i = 0; i < this.hospitalDetails.length; i++) {
        this.fullImagePath[i] = 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/files/' +
          this.hospitalDetails[i].images;
        

      }
      // this.fullImagePath = 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/files/'+this.hospitalDetails.images;

    })
    console.log("image path", this.hospitalDetails)
  }

  ngOnInit() {
  }

  /** managing the hospital **/
  toManageHospital(id) {
    this.router.navigateByUrl('/salesrep/hospital/manage-hospital/edit/' + id);
  }

}
