import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {

  public indexUrl: string;
  public user_data : any;
  public user_name : any;
  user_cookie : any;
  constructor(public router: Router , private cookieService : CookieService) {
    // let url = this.router.url;
    // console.log('step 1: ', url);
    // let d = url.split("/");
    // console.log('step 2: ', d);
    // this.indexUrl = d[1];
    // console.log('step 3: ', this.indexUrl);
    let allData: any = {};
    allData = cookieService.getAll()
    this.user_data = JSON.parse(allData.user_details);
    
    this.user_cookie = cookieService.get('jwtToken');
    //console.log("ADMIN HEADER PAGE");
    if(this.user_data.type==='admin')
    {
    console.log('admin');
    this.user_name=this.user_data.firstname + ' ' + this.user_data.lastname;
    }
    else if (this.user_data.type==='salesrep')
    console.log('salesrep');
    else
    console.log('hospital');

  }

  ngOnInit() {
  }

   /**logout function start here**/
   logout() {
    this.cookieService.delete('jwtToken');
    this.cookieService.deleteAll();
    setTimeout(() => {
      this.router.navigateByUrl('/home');
    }, 3000);
  }
  /**logout function end here**/

}
