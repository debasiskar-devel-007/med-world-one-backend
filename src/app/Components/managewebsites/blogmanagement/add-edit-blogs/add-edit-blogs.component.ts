import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../../../environments/environment.dev';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-add-edit-blogs',
  templateUrl: './add-edit-blogs.component.html',
  styleUrls: ['./add-edit-blogs.component.css']
})
export class AddEditBlogsComponent implements OnInit {


  server: any = environment.API_URL;
  addUrl: any = 'addorupdatedata';
  getDataUrl: any= 'datalist';
  public editdata: any = [];
  action:any="add";
  listURL:any="/manage-websites/addblogcategory/list";


  public configData: any = {
    baseUrl: "https://fileupload.influxhostserver.com/",
    endpoint: "uploads",
    size: "51200", // kb
    format: ["jpg", "jpeg", "png"], // use all small font
    type: "blogs-image",
    path: "blogs",
    prefix: "blogs-image_",
    formSubmit: false,
    conversionNeeded: 0,
    bucketName: "crmfiles.influxhostserver"
  }

  public configFileData: any = {
    baseUrl: "https://fileupload.influxhostserver.com/",
    endpoint: "uploads",
    size: "51200", // kb
    format: ["jpg", "jpeg", "png"], // use all small font
    type: "blogs-file",
    path: "blogs",
    prefix: "blogs-file",
    formSubmit: false,
    conversionNeeded: 0,
    bucketName: "crmfiles.influxhostserver"
  }
  constructor(private cookieService: CookieService, private activatedRoute: ActivatedRoute, private readonly meta:MetaService) { 

    this.meta.setTitle('MedWorldOne - Add Edit Blogs');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'MedWorldOne - Add Edit Blogs');
    this.meta.setTag('twitter:title', 'MedWorldOne - Add Edit Blogs');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-fb.png');
    this.meta.setTag('twitter:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-twitter.png');
    
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      if (params._id) {
        this.activatedRoute.data.subscribe(resolveData => {         
          this.editdata= resolveData.blogsList.res[0];  
          this.action="edit";    
        });
      }
    });
  }

}
