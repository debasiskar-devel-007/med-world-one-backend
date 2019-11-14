import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
