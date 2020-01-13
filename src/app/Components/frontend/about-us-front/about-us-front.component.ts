import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-about-us-front',
  templateUrl: './about-us-front.component.html',
  styleUrls: ['./about-us-front.component.css']
})
export class AboutUsFrontComponent implements OnInit {

  constructor(private readonly meta: MetaService) { 
    this.meta.setTitle('MD Stock International - Who We Are');
    this.meta.setTag('og:description', 'MD Stock International has been pioneering the provision of top-quality medical and laboratory equipment and supplies with the vision to become the key specialist resource partner to hospitals and healthcare centers.');
    this.meta.setTag('twitter:description', 'MD Stock International has been pioneering the provision of top-quality medical and laboratory equipment and supplies with the vision to become the key specialist resource partner to hospitals and healthcare centers.');

    this.meta.setTag('og:keyword', 'MD Stock International Company, MD Stock International Company Info');
    this.meta.setTag('twitter:keyword', 'MD Stock International Company, MD Stock International Company Info');

    this.meta.setTag('og:title', 'MD Stock International - Who We Are');
    this.meta.setTag('twitter:title', 'MD Stock International - Who We Are');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://dev.mdstockinternational.com/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://dev.mdstockinternational.com/assets/images/logo.png');
  }

  ngOnInit() {
  }

}
