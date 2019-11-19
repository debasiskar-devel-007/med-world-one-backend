import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

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
  public Type:any='';

  // @HostListener("window:resize", [])

  // onResize() {
  //   var width = window.innerWidth;
  //   if (width < 992) {
  //     this.mobile = false;
  //   } else {
  //     this.mobile = true;
  //   }
  // }

  constructor(private cookieService: CookieService, public router: Router) {
    this.headerFlag = this.cookieService.get('loginFlag');
    if(this.cookieService.get('jwtToken')!=null && this.cookieService.get('jwtToken')!=''){
      this.user_details = JSON.parse(this.cookieService.get('user_details'));
      this.Type=this.user_details.Type;
      console.log(this.user_details.Type);
      }
  }

  mobileView() {
    this.status = !this.status;
    console.log("working");
  }

  ngOnInit() {

  }

  logout() {
    this.cookieService.deleteAll();
    this.router.navigate(['home']);

  }

}
