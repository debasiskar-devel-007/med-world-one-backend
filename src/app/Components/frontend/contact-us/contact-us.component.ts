import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  public formTitle: any = "";      // Enter the Forl Title
  public pageUrl: any = 'home';
  public modaleLogo: any = '';
  // public serverUrl: any = this.ApiService.serverUrlDemo ;


  public addEndpoint: any = {
    endpoint:'addorupdatedata',
    source:'contactusForm',
    token:1
  };
  public getDataUrl: any = 'datalist';
  public routeingUrl: any = 'dashboard';
  constructor() { }

  ngOnInit() {
  }

}
