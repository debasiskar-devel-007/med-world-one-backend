import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import {ApiService} from "../../../api.service";

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  public formTitle: any = "";      // Enter the Forl Title
  public pageUrl: any = 'home';
  public modaleLogo: any = '';
  public serverUrl: any = this.ApiService.serverUrlDemo ;


  public addEndpoint: any = {
    endpoint:'addorupdatedata',
    source:'contactusForm',
    token:1
  };
  public getDataUrl: any = 'datalist';
  public routeingUrl: any = 'dashboard';
  constructor(private readonly meta: MetaService, public ApiService: ApiService) {
    window.scrollTo(500, 0);
    this.meta.setTitle('Grace Medical');
    this.meta.setTag('og:description', 'This is dynamic decription ');
    this.meta.setTag('og:title', 'This is dynamic title with meta og ');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://upload.wikimedia.org/wikipedia/commons/f/f8/superraton.jpg');

  }

  ngOnInit() {
  }

}





