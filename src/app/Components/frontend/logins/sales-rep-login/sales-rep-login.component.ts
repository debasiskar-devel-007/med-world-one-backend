import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-sales-rep-login',
  templateUrl: './sales-rep-login.component.html',
  styleUrls: ['./sales-rep-login.component.css']
})
export class SalesRepLoginComponent implements OnInit {

  public loginFlag: string = '';

  constructor(private cookieService: CookieService, public router: Router, private readonly meta: MetaService) {
    this.meta.setTitle('MD Stock International - Sales rep login');
      this.meta.setTag('og:description', 'MD Stock International is the Medical Equipment & Supplies Partner you want for Top-Quality On-Demand Supplies, Direct-to-Manufacturer Purchases and much more.');
      this.meta.setTag('twitter:description', 'MD Stock International is the Medical Equipment & Supplies Partner you want for Top-Quality On-Demand Supplies, Direct-to-Manufacturer Purchases and much more.');

      this.meta.setTag('og:keyword', 'Medical Equipment $ Supplies Partner, Direct-to-Manufacturer Purchases, Top-Quality On-Demand Supplies, Buy & Sell Medical Equipment');
      this.meta.setTag('twitter:keyword', 'Medical Equipment $ Supplies Partner, Direct-to-Manufacturer Purchases, Top-Quality On-Demand Supplies, Buy & Sell Medical Equipment');

      this.meta.setTag('og:title', 'MD Stock International - Sales rep login');
      this.meta.setTag('twitter:title', 'MD Stock International - Sales rep login');
      this.meta.setTag('og:type', 'website');
      this.meta.setTag('og:image', 'https://dev.mdstockinternational.com/assets/images/logo.png');
      this.meta.setTag('twitter:image', 'https://dev.mdstockinternational.com/assets/images/logo.png');
   }

  ngOnInit() {
  }

  doLogin() {
    this.cookieService.set( 'loginFlag', 'sales-rep' );
    this.loginFlag = this.cookieService.get('loginFlag');
    this.router.navigate(['/home']);
  }

}
