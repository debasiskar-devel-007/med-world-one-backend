import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { WINDOW } from '@ng-toolkit/universal';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'app-frontend-header',
  templateUrl: './frontend-header.component.html',
  styleUrls: ['./frontend-header.component.css']
})
export class FrontendHeaderComponent implements OnInit {

  public status: boolean = true;
  public headerFlag: string = '';
  public pageUrl: string = '';
  public user_details:any='';
  public type:any='';
  public CartCount:any=0;
  

  constructor(@Inject(WINDOW) public window: Window, private cookieService: CookieService, 
  public router: Router,public cartService:CartService) {
    // this.headerFlag = this.cookieService.get('loginFlag');
    if(this.cookieService.get('user_details')!=null && this.cookieService.get('user_details')!=''){
      this.user_details = JSON.parse(this.cookieService.get('user_details'));
      this.type=this.user_details.type;
     // console.log(this.user_details.type);
      }
  }

  mobileView() {
    this.status = !this.status;
    //console.log("working");
  }

  ngOnInit() {
    this.cartService.currentData.subscribe((res:any) =>{
      console.warn('>>>>frontend header',res)
      this.CartCount=res.carData;
      console.warn(this.CartCount);
    })
  }

  logout() {
    // console.log("sourav logout");
    this.cookieService.deleteAll();
    this.cookieService.deleteAll('/');
    setTimeout(() => {
      this.window.location.href='/';
      this.router.navigateByUrl('/home');
    }, 1000);
  }

}
