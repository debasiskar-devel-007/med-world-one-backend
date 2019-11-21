import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {HttpServiceService} from '../../../services/http-service.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  public formTitle: any = "";      // Enter the Forl Title
  public pageUrl: any = 'home';
  public modaleLogo: any = '';
  public serverUrl: any = this.httpServiceService.baseUrl ;


  public addEndpoint: any = {
    endpoint:'addorupdatedata',
    source:'contactus',
    token:this.cookieService.get('jettoken')
  };
  public getDataUrl: any = 'datalist';
  public routeingUrl: any = 'dashboard';
  constructor(public cookieService:CookieService,public httpServiceService:HttpServiceService) { }

  ngOnInit() {
  }

}
