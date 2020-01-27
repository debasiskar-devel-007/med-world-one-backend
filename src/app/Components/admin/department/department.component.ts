import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
public departmentForm:FormGroup;
public deplist:any=[];
public defaultvalue:any
  constructor(public formBuilder: FormBuilder, public http: HttpServiceService,
    public cookieService: CookieService,public activatedRoute:ActivatedRoute,public router:Router,
    public _snackBar: MatSnackBar) {
      //console.log(this.activatedRoute.snapshot.params.id);
      if(this.activatedRoute.snapshot.params.id){
        let post={
          "source": 'department',
          "condition":{
          "_id_object":this.activatedRoute.snapshot.params.id
          }
        }
        this.http.httpViaPost('datalist',post).subscribe((res:any)=>{
          
          setTimeout(() => {
            this.defaultvalue=res.res[0];
            this.patchval(this.defaultvalue);
          }, 1000);
        })
       
      }
      let post={
        "source": 'department',
      }
      this.http.httpViaPost('datalist',post).subscribe((res:any)=>{
        this.deplist=res.res;
        //console.warn(res);
      })

      this.departmentForm = this.formBuilder.group({
        id:[null],
       department_name:['',Validators.required],
       department_description:['',Validators.required],
       department_priority:['',Validators.required],
       department_parent:[''],
       status:['',Validators.required]
      });
     }

  ngOnInit() {

  }
  patchval(item:any){
    this.departmentForm.patchValue({
      id:item._id,
      department_name:item.department_name,
       department_description:item.department_description,
       department_priority:item.department_priority,
       department_parent:item.department_parent,
       status:item.status
    })
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
   if(this.departmentForm.valid){
     
    if(this.departmentForm.value.id==null){
      delete this.departmentForm.value.id
      var postData: any = {
        "source": 'department',
        "data":this.departmentForm.value,
        "sourceobj":["department_parent"]
          };
    }else{
      var postData: any = {
  
        "source": 'department',
         "data":this.departmentForm.value,
     
        "sourceobj":["department_parent"]
          };
    }
  
        //console.log(postData);
  
        this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {
          //console.log(response);
          if (response.status == "success") {
            this._snackBar.open('Department Submitted Successfully', '', {
              duration: 2000,
            });
            this.departmentForm.reset();
            this.router.navigateByUrl('/admin/inventory/manage-department/list');
            //console.log(response);
          }
        })
   }
  
}

}
