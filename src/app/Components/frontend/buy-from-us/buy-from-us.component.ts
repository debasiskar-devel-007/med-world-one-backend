import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-buy-from-us',
  templateUrl: './buy-from-us.component.html',
  styleUrls: ['./buy-from-us.component.css']
})
export class BuyFromUsComponent implements OnInit {

  constructor(private readonly meta: MetaService) {
    this.meta.setTitle('MD Stock International - Buy From Us');
    this.meta.setTag('og:description', 'Buy Premium Quality Medical and Laboratory Equipment and Supplies from a reputable source with great history, and improve the Healthcare standards of your Medical Facility.');
    this.meta.setTag('twitter:description', 'Buy Premium Quality Medical and Laboratory Equipment and Supplies from a reputable source with great history, and improve the Healthcare standards of your Medical Facility.');

    this.meta.setTag('og:keyword', 'Buy Hospital Equipment, Buy Hospital Machinery, Buy Premium Hospital Supplies, Buy Used Medical Equipment, Buy Used Hospital Equipment');
    this.meta.setTag('twitter:keyword', 'Buy Hospital Equipment, Buy Hospital Machinery, Buy Premium Hospital Supplies, Buy Used Medical Equipment, Buy Used Hospital Equipment');

    this.meta.setTag('og:title', 'MD Stock International - Buy From Us');
    this.meta.setTag('twitter:title', 'MD Stock International - Buy From Us');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://dev.mdstockinternational.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://dev.mdstockinternational.com/assets/images/logo.png');
   }

  ngOnInit() {
  }

}
