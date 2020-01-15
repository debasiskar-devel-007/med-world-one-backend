import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-medical-partners',
  templateUrl: './medical-partners.component.html',
  styleUrls: ['./medical-partners.component.css']
})
export class MedicalPartnersComponent implements OnInit {

  constructor(private readonly meta: MetaService) { 
      this.meta.setTitle('MD Stock International - Medical Partners');
      this.meta.setTag('og:description', 'MD Stock International is the ideal Global Medical Sales Management Group you want to have as a Medical Partner to help you raise the standards of your Hospital or Medical Facility.');
      this.meta.setTag('twitter:description', 'MD Stock International is the ideal Global Medical Sales Management Group you want to have as a Medical Partner to help you raise the standards of your Hospital or Medical Facility.');

      this.meta.setTag('og:keyword', 'Global Medical Sales Management Group, Medical Partners, Buy and Sell Medical Equipment');
      this.meta.setTag('twitter:keyword', 'Global Medical Sales Management Group, Medical Partners, Buy and Sell Medical Equipment');

      this.meta.setTag('og:title', 'MD Stock International - Medical Partners');
      this.meta.setTag('twitter:title', 'MD Stock International - Medical Partners');
      this.meta.setTag('og:type', 'website');
      this.meta.setTag('og:image', 'https://dev.mdstockinternational.com/assets/images/logo.png');
      this.meta.setTag('twitter:image', 'https://dev.mdstockinternational.com/assets/images/logo.png');
  }

  ngOnInit() {
  }

}
