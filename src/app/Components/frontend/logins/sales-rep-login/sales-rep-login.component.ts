import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales-rep-login',
  templateUrl: './sales-rep-login.component.html',
  styleUrls: ['./sales-rep-login.component.css']
})
export class SalesRepLoginComponent implements OnInit {

  public loginFlag: string = '';

  constructor(private cookieService: CookieService, public router: Router) { }

  ngOnInit() {
  }

  doLogin() {
    this.cookieService.set( 'loginFlag', 'sales-rep' );
    this.loginFlag = this.cookieService.get('loginFlag');
    this.router.navigate(['/home']);
  }

}
