import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-hospital-inventory-added',
  templateUrl: './hospital-inventory-added.component.html',
  styleUrls: ['./hospital-inventory-added.component.css']
})
export class HospitalInventoryAddedComponent implements OnInit {

  constructor(private readonly meta:MetaService) {

    this.meta.setTitle('MedWorldOne - Hospital Inventory Added');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'MedWorldOne - Hospital Inventory Added');
    this.meta.setTag('twitter:title', 'MedWorldOne - Hospital Inventory Added');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-fb.png');
    this.meta.setTag('twitter:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-twitter.png');

   }

  ngOnInit() {
  }

}
