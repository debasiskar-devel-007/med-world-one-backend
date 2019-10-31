import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public logo: any = '../../assets/favicon.ico';
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
  public buttonName: any = 'Update Password';

  public domanUrl: any = 'http://localhost:4200/resetpassword';
  constructor() { }

  ngOnInit() {
  }

}
