import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-salesrep-inventory-added',
  templateUrl: './salesrep-inventory-added.component.html',
  styleUrls: ['./salesrep-inventory-added.component.css']
})
export class SalesrepInventoryAddedComponent implements OnInit {

  constructor(private readonly meta:MetaService) {

    this.meta.setTitle('MedWorldOne - Salesrep Inventory Added');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'MedWorldOne - Salesrep Inventory Added');
    this.meta.setTag('twitter:title', 'MedWorldOne - Salesrep Inventory Added');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-fb.png');
    this.meta.setTag('twitter:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-twitter.png');



   }

  ngOnInit() {
  }

}
