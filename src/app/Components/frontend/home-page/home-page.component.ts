import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpServiceService } from '../../../services/http-service.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MetaService } from '@ngx-meta/core';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public api_url:any =this.httpServiceService.baseUrl;
  public popularInventoryDetails:any=[];
  constructor(public router:Router,public httpClient:HttpClient, public cookieService: CookieService,public httpServiceService: HttpServiceService, private readonly meta: MetaService) {

    this.meta.setTitle('MD Stock International - Your Medical Partner');
    this.meta.setTag('og:description', 'MD Stick International is the Medical Partner you want to have to source Premium Hospital Equipment and Supplies for your Hospital, Clinic or other medical facilities.');
    this.meta.setTag('twitter:description', 'MD Stick International is the Medical Partner you want to have to source Premium Hospital Equipment and Supplies for your Hospital, Clinic or other medical facilities.');

    this.meta.setTag('og:keyword', 'MD Stock International, Hospital Equipment, Hospital Machinery, Premium Hospital Supplies, Used Medical Equipment, Used Hospital Equipment, Medical Partner');
    this.meta.setTag('twitter:keyword', 'MD Stock International, Hospital Equipment, Hospital Machinery, Premium Hospital Supplies, Used Medical Equipment, Used Hospital Equipment, Medical Partner');

    this.meta.setTag('og:title', 'MD Stock International - Your Medical Partner');
    this.meta.setTag('twitter:title', 'MD Stock International - Your Medical Partner');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://dev.mdstockinternational.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://dev.mdstockinternational.com/assets/images/logo.png');



    const link = this.api_url + 'temptoken';
    this.httpClient.post(link, {}).subscribe(res => {
    let result: any = res;
    this.cookieService.set('jwtToken', result.token);

  });
  }

  ngOnInit() {
        this.httpServiceService.httpViaPost('popularinventory',undefined).subscribe((res:any)=>{
          this.popularInventoryDetails=res.popularlisting;
        // console.log(res);
        // console.log(this.popularInventoryDetails);
        })
  }

 
   copyText(val:any){
    console.log('copyText');
  }


  
  //***********blog list view in blog detail************//
  blogdetail(val:any){
    // console.log(val)
    this.router.navigateByUrl('/blog-details/' +val)
  }

  
}
