import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-blogcat',
  templateUrl: './add-edit-blogcat.component.html',
  styleUrls: ['./add-edit-blogcat.component.css']
})
export class AddEditBlogcatComponent implements OnInit {
  //Add editfor blog category
  public configAddEdit: any = {
    action: "add",
    endpoint: "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/addorupdatedata",
    endpoint2: "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/",
    source: "blog_category",
    condition: {},
    defaultData: null,
    jwtToken: this.cookieService.get('jwtToken'),
    callBack: "manage-websites/addblogcategory/list",
    userData: { id: "18801017007", name: "Admin" },
    defaultDataAlways: null
  }
  constructor(private activatedRouter: ActivatedRoute, private cookieService: CookieService) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      if (params._id) {
        this.activatedRouter.data.subscribe(resolveData => {
          this.configAddEdit.defaultData = resolveData.blogCatList.res[0];
          this.configAddEdit.action = "edit";
          this.configAddEdit.condition = { id: params._id };
        });
      }
    });
  }

}
