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
public deplist:any=[];
  constructor(public formBuilder: FormBuilder, public http: HttpServiceService,
    public cookieService: CookieService) {

      let post={
        "source": 'department',
      }
      this.http.httpViaPost('datalist',post).subscribe((res:any)=>{
        this.deplist=res.res;
        console.warn(res);
      })

      this.departmentForm = this.formBuilder.group({
       department_name:['',Validators.required],
       department_description:['',Validators.required],
       department_priority:['',Validators.required],
       department_parent:[''],
       status:['',Validators.required]
      });
     }

  ngOnInit() {
  }

    /** blur function **/
    inputBlur(val: any) {
      this.departmentForm.controls[val].markAsUntouched();
    }
/**onsubmit */
onSubmit(){
  for (let x in this.departmentForm.controls) {
    this.departmentForm.controls[x].markAsTouched();
  }
  let postData: any = {
    "source": 'department',
    "data":this.departmentForm.value,
    "sourceobj":["department_parent"]
      };
      //console.log(postData);
      this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {
        //console.log(response);
        if (response.status == "success") {
          this.departmentForm.reset();
          //console.log(response);
        }
      })
}

}
