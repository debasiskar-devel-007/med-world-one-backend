import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HttpServiceService } from 'src/app/services/http-service.service';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
public departmentForm:FormGroup;
  constructor(public formBuilder: FormBuilder, public http: HttpServiceService,
    public cookieService: CookieService) {

      this.departmentForm = this.formBuilder.group({
       department_name:['',Validators.required],
       department_description:['',Validators.required],
       department_priority:['',Validators.required],
       status:['',Validators.required]
      });
     }

  ngOnInit() {
  }
/**onsubmit */
onSubmit(){
  let postData: any = {
    "source": 'department',
    "data":this.departmentForm.value
      };
      console.log(postData);
}

}
