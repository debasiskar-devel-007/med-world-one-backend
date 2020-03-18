import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from '../../../services/http-service.service';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  public fromTitleName: any = 'Reset From';
  public logo: any = './assets/images/logo.png';
  public serverUrl: any = this.httpServiceService.baseUrl;
  public addEndpoint: any = {
    endpoint:'resetpassword',
    source:'users'
  };
  constructor(public httpServiceService:HttpServiceService, private readonly meta:MetaService) {

    this.meta.setTitle('MedWorldOne - Reset Password');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'MedWorldOne - Reset Password');
    this.meta.setTag('twitter:title', 'MedWorldOne - Reset Password');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-fb.png');
    this.meta.setTag('twitter:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-twitter.png');



   }

  ngOnInit() {
  }

}
