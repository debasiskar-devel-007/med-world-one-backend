
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public logo: any = './assets/images/logo.png';
  public fromTitle: any = "Login Form";    // This is a From Title
  public fullUrl: any = "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/";  // server url
  public endpoint: any = "login";
  public buttonName:any= 'Login Button';

  loading: boolean;
 



  public signUpRouteingUrl: any = {
    "path": "",
    "buttonName": "Don't have an account yet? Contact us",
    "customLink": "",
    "customURl": ""
  };
  public forgetRouteingUrl: any = {
    "path": "",
    "buttonName": "Forget Password",
    "customLink": "/forgot-password",
  };

  public routerStatus: any;

  constructor() {


    this.routerStatus = {           // this is use for if login succcess then navigate which page
      "data": [
        {
          "type": "admin",
          "routerNav": "dashboard-admin"
        },
        {
          "type": "salesrep",
          "routerNav": "sales-rep/home"
        }
      ]
    }
  }

  ngOnInit() {
  }

}
