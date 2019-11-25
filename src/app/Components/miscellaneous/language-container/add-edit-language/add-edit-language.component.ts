import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';
import { HttpServiceService } from '../../../../services/http-service.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-edit-language',
  templateUrl: './add-edit-language.component.html',
  styleUrls: ['./add-edit-language.component.css']
})
export class AddEditLanguageComponent implements OnInit {

  /** declarations **/
  public languageForm: FormGroup;
  public condition: any;
  public message: any ;
  public language_array: any = [];
  public language_flag: boolean = false;
  public action: any;
  public defaultData: any;
  public btn_text: any;


  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar, public cookieService: CookieService,
    public http: HttpServiceService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      if (params['_id'] != null) {
        this.action = "edit";
        this.condition = { id: params._id };
        this.activatedRoute.data.subscribe(resolveData => {
          this.defaultData = resolveData.data.res[0];
        });
      }
      else
        this.action = "add";
    });

  }

  ngOnInit() {

    /** generating the form **/
    this.generateForm();

    /**  getting the set of languages **/

    let postdata: any = {
      "source": 'languages',
      "token": this.cookieService.get('jwtToken'),
      // "sourceobj": ["selectlanguage"]
    };

    this.http.httpViaPost('datalist ', postdata).subscribe((response: any) => {
      let result: any = [];
      result = response.res;


      for (let i = 0; i < result.length; i++) {
        this.language_array.push(result[i].selectlanguage);
      }


      // Case 
      switch (this.action) {
        case 'add':
          /* Button text */
          this.btn_text = "Add Language";
          this.message = "Language Added!!!";
          break;
        case 'edit':
          /* Button text */
          this.btn_text = "Update Langauge";
          this.message = "Language Updated";
          this.setDefaultValue(this.defaultData);
          break;
      }
    });


  }



  /** Generate form **/
  generateForm() {
    this.languageForm = this.formBuilder.group({
      selectlanguage: [],
      description: [],
      primarylanguage: []
    });
  }



  /** default value **/
  setDefaultValue(defaultValue) {
    this.languageForm.patchValue({
      selectlanguage: defaultValue.selectlanguage,
      description: defaultValue.description,
      primarylanguage: defaultValue.primarylanguage
    })
  }

  /** submit function **/
  onSubmit() {

    if (this.language_array.includes(this.languageForm.value.selectlanguage)) {

      this.language_flag=true;
       if(this.condition!=null && this.language_flag==true)
       this.language_flag=false;
       else
       alert("Language already exists!!!");
       

      
    }
    else {
      this.language_flag = false;
    }


    if (this.languageForm.invalid || this.language_flag == true) {
      return;
    }
    else {


      /* start process to submited data */
      let postData: any = {
        "source": 'languages',
        "data": Object.assign(this.languageForm.value, this.condition),
        "token": this.cookieService.get('jwtToken'),
        // "sourceobj": ["selectlanguage"]
      };

      this.http.httpViaPost('addorupdatedata', postData).subscribe((response: any) => {

        if (response.status == "success") {
          let action: any = "Ok";
          this.snackBar.open(this.message, action, {
            duration: 1000,
          });


          setTimeout(() => {
            this.router.navigateByUrl('admin-dashboard/language/list');
          }, 1000);
        } else {
          alert("Some error occurred. Please try again.");
        }
      }, (error) => {
        alert("Some error occurred. Please try again.");
      });
    }

  }



  /** custome validation for language check **/


}
