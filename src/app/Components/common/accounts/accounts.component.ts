import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  // ==============declaraton=========
  user_data: any;
  accountForm: FormGroup;
  id:any;
  // ==================================

  constructor(public cookieService: CookieService, private formBuilder: FormBuilder,
    private router: Router) {

    let allData: any = {};
    allData = cookieService.getAll()
    this.user_data = JSON.parse(allData.user_details);
    console.log("USERDETAILS", this.user_data);
    this.id = this.user_data._id;
  }


  ngOnInit() {

    //checking the types
    if (this.user_data.Type == 'admin') {
      console.log('admin');      
         this.router.navigateByUrl('/admin-management/edit/'+this.id);
    }
    else if (this.user_data.Type == 'hospital') {
      console.log('hospital');
      this.router.navigateByUrl('/admin/medicalpartners-management/edit/'+this.id);
    }
    else {
      console.log('salesrep');
      this.router.navigateByUrl('/admin/salesrep-management/edit/'+this.id);
    }

  }



}
