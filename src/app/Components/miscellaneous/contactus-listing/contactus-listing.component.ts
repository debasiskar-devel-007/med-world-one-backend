import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contactus-listing',
  templateUrl: './contactus-listing.component.html',
  styleUrls: ['./contactus-listing.component.css']
})
export class ContactusListingComponent implements OnInit {
public contactData:any=[];
// ===============================Declarations=========================
contactData_skip: any = ["_id"];
detail_skip_array:any=["_id"]
contactData_modify_header: any = {
};
tableName: any = 'Contact Persons';
UpdateEndpoint: any = "";
deleteEndpoint: any = "deletesingledata";

searchingEndpoint: any = "datalist";
editUrl: any = '';
apiUrl: any = "";
status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
view:any="";
public search_settings: any = {
    // selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
    // textsearch: [{ label: "Search By brand name...", field: 'brand_name' }]
  };
// ====================================================================
  /*Showing Image in the Modal*/
  // image_detail_datatype:any = [{
  //   key: "image",
  //   value: 'image',
  //   fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/files/'      // Image path 
  // }]
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
    this.contactData = resolveData.contactlist.res;
      //console.log(resolveData.contactlist.res);
    });
  }

}
