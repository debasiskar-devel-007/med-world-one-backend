import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-salesrep-view-quotes',
  templateUrl: './salesrep-view-quotes.component.html',
  styleUrls: ['./salesrep-view-quotes.component.css']
})
export class SalesrepViewQuotesComponent implements OnInit {

  constructor(private readonly meta:MetaService) { 

    this.meta.setTitle('MedWorldOne - Salesrep View Quotes');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'MedWorldOne - Salesrep View Quotes');
    this.meta.setTag('twitter:title', 'MedWorldOne - Salesrep View Quotes');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-fb.png');
    this.meta.setTag('twitter:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-twitter.png');



  }

  ngOnInit() {
  }

}
