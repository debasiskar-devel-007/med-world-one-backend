import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-manufacturar-direct',
  templateUrl: './manufacturar-direct.component.html',
  styleUrls: ['./manufacturar-direct.component.css']
})
export class ManufacturarDirectComponent implements OnInit {

  constructor(private readonly meta: MetaService) { 
    this.meta.setTitle('MD Stock International - Manufacturer Direct');
      this.meta.setTag('og:description', 'Buy your Hospital, Laboratory and Medical Equipment and Supplies directly from the Manufacturer and get top-quality machinery and items without having to spend a fortune.');
      this.meta.setTag('twitter:description', 'Buy your Hospital, Laboratory and Medical Equipment and Supplies directly from the Manufacturer and get top-quality machinery and items without having to spend a fortune.');

      this.meta.setTag('og:keyword', 'Manufacturer Direct Medical Equipment, Buy Medical Equipment Directly From Manufacturer, Buy Medical Supplies Directly From Manufacturer');
      this.meta.setTag('twitter:keyword', 'Manufacturer Direct Medical Equipment, Buy Medical Equipment Directly From Manufacturer, Buy Medical Supplies Directly From Manufacturer');

      this.meta.setTag('og:title', 'MD Stock International - Manufacturer Direct');
      this.meta.setTag('twitter:title', 'MD Stock International - Manufacturer Direct');
      this.meta.setTag('og:type', 'website');
      this.meta.setTag('og:image', 'https://dev.mdstockinternational.com/assets/images/logo.png');
      this.meta.setTag('twitter:image', 'https://dev.mdstockinternational.com/assets/images/logo.png');
  }

  ngOnInit() {
  }

}
