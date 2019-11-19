import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from '../../../services/http-service.service';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public logo: any = './assets/images/logo.png';
  public fromTitle: any = 'Forgotten password'
    // public signUpRouteingUrl: any = 'sign-up';
  public serverUrl:any = 'https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/';
  public addEndpoint: any = {
    endpoint:'forgetpassword'
  };
  public loginRouteingUrl: any = {
    // "path":"login",
    "path":"",
    "buttonName":"login",
    "customLink":"/login",
    "customURl":""
  };
  public signUpRouteingUrl: any = {
    // "path":"sign-up",
    "path":"",
    "buttonName":"sign-up",
    "customLink":"",
    "customURl":""
  };
  public buttonName: any = 'Reset Password';

  public domainUrl: any = this.httpServiceService.resetPassword+'reset-password';
  constructor(public httpServiceService:HttpServiceService) { }

  ngOnInit() {
  }

}
