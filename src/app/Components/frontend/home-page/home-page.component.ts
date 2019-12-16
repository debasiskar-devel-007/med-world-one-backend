import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpServiceService } from '../../../services/http-service.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public api_url:any =this.httpServiceService.baseUrl;
  public popularInventoryDetails:any=[];
  constructor(public router:Router,public httpClient:HttpClient, public cookieService: CookieService,public httpServiceService: HttpServiceService) {
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
