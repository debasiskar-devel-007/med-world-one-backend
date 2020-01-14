import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-hospital-package',
  templateUrl: './manage-hospital-package.component.html',
  styleUrls: ['./manage-hospital-package.component.css']
})
export class ManageHospitalPackageComponent implements OnInit {
public packageHospitalForm:FormGroup;
public deplist:any;
  constructor(public formBuilder: FormBuilder, public http: HttpServiceService,
    public cookieService: CookieService,public activatedRoute:ActivatedRoute) { 
      this.packageHospitalForm=this.formBuilder.group({
        package_name:['',Validators.required],
        department:['',Validators.required],
        package_description:['',Validators.required]
      });


      /**department fetch */

      let post={
        "source": 'department',
      }
      this.http.httpViaPost('datalist',post).subscribe((res:any)=>{
        this.deplist=res.res;
        //console.warn(res);
      })
    }

  ngOnInit() {
  }

    /** blur function **/
    inputBlur(val: any) {
      this.packageHospitalForm.controls[val].markAsUntouched();
    }
  onSubmit(){
    for (let x in this.packageHospitalForm.controls) {
      this.packageHospitalForm.controls[x].markAsTouched();
    }
  }
}
