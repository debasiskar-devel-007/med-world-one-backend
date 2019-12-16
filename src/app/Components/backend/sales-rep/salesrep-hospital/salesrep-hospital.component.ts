import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpServiceService } from '../../../../services/http-service.service';
import { Router } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard';
import { MatSnackBar } from '@angular/material';
import { MetaService } from '@ngx-meta/core';
import { Title } from '@angular/platform-browser';
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
  public sharelink:any;
  
  constructor(public cookieService: CookieService, public httpServiceService: HttpServiceService,
    private router: Router,public snackBar: MatSnackBar,public clipboardService:ClipboardService,public readonly meta: MetaService,
    public readonly Title:Title) {
      this.meta.setTitle('MD Stock International - Your Medical Partner');
      this.meta.setTag('og:description', 'MD Stock International is the Medical Equipment & Supplies Partner you want for Top-Quality On-Demand Supplies, Direct-to-Manufacturer Purchases and much more.');
      this.meta.setTag('og:title', 'MD Stock International - Your Medical Partner');
      this.meta.setTag('og:type', 'website');
      this.meta.setTag('og:url', 'https://dev.mdstockinternational.com/');
      this.meta.setTag('og:image', 'https://dev.mdstockinternational.com/assets/images/mdstocklogometa.jpg');
      this.meta.setTag('og:keywords','');
     
      this.meta.setTag('twitter:description', 'MD-stock-international');
      this.meta.setTag('twitter:title', 'MD Stock International is the Medical Equipment & Supplies Partner you want for Top-Quality On-Demand Supplies, Direct-to-Manufacturer Purchases and much more.');
      this.meta.setTag('twitter:card', 'summary');
      this.meta.setTag('twitter:image', 'https://dev.mdstockinternational.com/assets/images/mdstocklogometa.jpg');

    this.userData = JSON.parse(this.cookieService.get('user_details'));
       /*Getting the role*/
    this.sharelink='https://dev-hospital-signup.mdstockinternational.com/'+this.userData._id;


    let data = {
      "source": "users_view",
      "condition": {
        "salesrepselect_object": this.userData._id
      }
    }
    this.httpServiceService.httpViaPost('datalist', data).subscribe((response: any) => {

      this.hospitalDetails = response.res;
      for (let i = 0; i < this.hospitalDetails.length; i++) {
        this.fullImagePath[i] = 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/files/' +
          this.hospitalDetails[i].images;
      }
    })

  }

  ngOnInit() {
  }

  /** managing the hospital **/
  toManageHospital(id) {
    this.router.navigateByUrl('/salesrep/hospital/manage-hospital/edit/' + id);
  }



      /**Copy clipborad function */
  copytoclipboard(){
    this.clipboardService.copyFromContent(this.sharelink);
   this.snackBar.open('Link Copy','', {
      duration: 500
    });
    
  }
}
