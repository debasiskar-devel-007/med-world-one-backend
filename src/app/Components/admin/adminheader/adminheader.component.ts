import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { WINDOW } from '@ng-toolkit/universal';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {

  public indexUrl: string;
  // public user_data : any;
  public user_name: any;
  public userData: any;
  user_cookie: any;
  public type: string;
  public statusToggle:boolean = true;
  constructor(@Inject(WINDOW) private window: Window, public router: Router, private cookieService: CookieService) {

    let allData: any = {};
    allData = cookieService.getAll()
    this.userData = JSON.parse(allData.user_details);
    this.type = this.userData.type


    switch (this.userData.type) {
      case "admin":
        this.user_name = this.userData.firstname + ' ' + this.userData.lastname;
        break;
      case "salesrep":
          this.user_name = this.userData.firstname + ' ' + this.userData.lastname;
        break;
      case "hospital":
          this.user_name = this.userData.hospitalname;
        break;
    }
  }

  ngOnInit() {
  }

  /**logout function start here**/
  logout() {
    this.cookieService.deleteAll();
    this.cookieService.deleteAll('/');
    setTimeout(() => {
      //this.window.location.href = '/';
      //this.router.navigateByUrl('/home');
      this.router.navigate(['/']);
    }, 1000);
  }
  /**logout function end here**/





  togglemenu(){
    this.statusToggle = !this.statusToggle;

  }


}
