import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from '../../../services/http-service.service';
import { MetaService } from '@ngx-meta/core';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public logo: any = './assets/images/logo.png';
  public fromTitle: any = 'FORGOTTEN PASSWORD'
    // public signUpRouteingUrl: any = 'sign-up';
  public serverUrl:any =this.httpServiceService.baseUrl;
  public addEndpoint: any = {
    endpoint:'forgetpassword'
  };
  public loginRouteingUrl: any = {
    // "path":"login",
    "path":"",
    "buttonName":"Login",
    "customLink":"/login",
    "customURl":""
  };
  public signUpRouteingUrl: any = {
    // "path":"sign-up",
    "path":"",
    "buttonName":"Sign Up",
    "customLink":"",
    "customURl":""
  };
  public buttonName: any = 'Reset Password';

  public domainUrl: any = 'https://dev.mdstockinternational.com/reset-password';

  constructor(public httpServiceService:HttpServiceService, private readonly meta:MetaService) {
    console.log(this.domainUrl);


    this.meta.setTitle('MedWorldOne - Forgot Password');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'MedWorldOne - Forgot Password');
    this.meta.setTag('twitter:title', 'MedWorldOne - Forgot Password');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-fb.png');
    this.meta.setTag('twitter:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-twitter.png');



  }

  ngOnInit() {
  }

}
