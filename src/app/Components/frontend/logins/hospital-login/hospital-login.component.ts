import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital-login',
  templateUrl: './hospital-login.component.html',
  styleUrls: ['./hospital-login.component.css']
})

export class HospitalLoginComponent implements OnInit {

  public loginFlag: string = '';

  constructor(private cookieService: CookieService, public router: Router) { }

  ngOnInit() {
  }

  doLogin() {
    this.cookieService.set( 'loginFlag', 'hospital' );
    this.loginFlag = this.cookieService.get('loginFlag');
    this.router.navigate(['/home']);
  }

}
