import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpServiceService } from '../../../services/http-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MetaService } from '@ngx-meta/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
const Recent_DATA = [
  {date: '01/10/2019', medical_partner: 'test partner', sales_rep: 'test', quoted_by: 'Hospital', status: 'Completed'},
  {date: '01/10/2019', medical_partner: 'test partner', sales_rep: 'test', quoted_by: 'Hospital', status: 'Pending Review'},
  {date: '01/10/2019', medical_partner: 'test partner', sales_rep: 'test', quoted_by: 'Hospital', status: 'Completed'},
  {date: '01/10/2019', medical_partner: 'test partner', sales_rep: 'test', quoted_by: 'Hospital', status: 'Pending Review'},
  {date: '01/10/2019', medical_partner: 'test partner', sales_rep: 'test', quoted_by: 'Hospital', status: 'Completed'},
  {date: '01/10/2019', medical_partner: 'test partner', sales_rep: 'test', quoted_by: 'Hospital', status: 'Pending Review'},

];
@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  public searchbyMedicalName:string;
  public searchbySalesrepEmail:string;
  /** declarations **/
  public userData: any;
  displayedColumns: string[] = ['date','firstname','lastname','email','phone','state','city'];
  displayedColumn: string[] = ['position','name','weight','symbol'];
  dataSourcee = ELEMENT_DATA;
  public dataSource:any;
  public type: string;
  public hospitalDetails: any = [];
  public fullImagePath: any = [];
  public salesRepHospital: any = [];
  public count_dashboard: any;
  public salesrepPurchaseQuote:any=[];
  public salesrepListingQuote:any=[];
  public hospital_count:string;
  public salesrep_count:string;
  public inventory_count:string;
  public medicalpartner_count:string;
  public purcehseComparisionQuote:any=[];
  public user_name:string;
  public purcehseComparisionHeader:string[]=['date','medicalpartner','hospitalname','status'];
  public recentlyAdded:any=[];

  public hospitalrepDetails:any=[];
  public hospitalPurchaseQuote:any=[];
  public hospitalListingQuote:any=[];
  public hospitalPurchseComparison:any=[];
  public searchbyrecentlyaddedSalesrep:any;
  displayed: string[] = ['date', 'quote_id','medical_partner', 'sales_rep', 'quoted_by', 'status', 'action'];
  // recentlyAdded = Recent_DATA;


  constructor(private router: Router, public cookieService: CookieService, private http: HttpServiceService,
    public activatedRoute: ActivatedRoute,public datePipe:DatePipe, private readonly meta: MetaService) {

    /**fetching the cookie details **/
    let allData: any = {};
    allData = cookieService.getAll()
    this.userData = JSON.parse(allData.user_details);
    this.type = this.userData.type;

    switch (this.userData.type) {
      case "admin":
        // this.user_name = this.userData.firstname + ' ' + this.userData.lastname;
        break;
      case "salesrep":
          this.user_name = this.userData.firstname + ' ' + this.userData.lastname;
        break;
      case "hospital":
          this.user_name = this.userData.hospitalname;
        break;
    }



  }

  ngOnInit() {
    this.getCount();
    if(this.type=='admin'){
    this.getadmin();

    this.meta.setTitle('MedWorldOne - Admin Dashboard');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'MedWorldOne -  Admin Dashboard');
    this.meta.setTag('twitter:title', 'MedWorldOne -  Admin Dashboard');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-fb.png');
    this.meta.setTag('twitter:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-twitter.png');

    }
    if(this.type=='salesrep'){
      this.getSalesRepallData();
      
    this.meta.setTitle('MedWorldOne - Salesrep Dashboard');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', '');
    this.meta.setTag('twitter:keyword', '');

    this.meta.setTag('og:title', 'MedWorldOne -  Salesrep Dashboard');
    this.meta.setTag('twitter:title', 'MedWorldOne -  Salesrep Dashboard');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-fb.png');
    this.meta.setTag('twitter:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-twitter.png');
    }
    if(this.type=='hospital'){
      this.getmedicalpartnerData();
      this.meta.setTitle('MedWorldOne - Hospital Dashboard');
      this.meta.setTag('og:description', '');
      this.meta.setTag('twitter:description', '');
  
      this.meta.setTag('og:keyword', '');
      this.meta.setTag('twitter:keyword', '');
  
      this.meta.setTag('og:title', 'MedWorldOne -  Hospital Dashboard');
      this.meta.setTag('twitter:title', 'MedWorldOne -  Hospital Dashboard');
      this.meta.setTag('og:type', 'website');
      this.meta.setTag('og:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-fb.png');
      this.meta.setTag('twitter:image', 'https://medworldonebackend.influxiq.com/assets/images/logo-twitter.png');
    }
    
  }
  date(date:any){
    console.warn(this.datePipe.transform(date,"MM-dd-yyyy"));
  }
  toHospitalList(index: any) {
    this.router.navigateByUrl('admin/hospital/view_details/' + index)
  }

  /** getting for salesrep **/
  getSalesRepallData() {

    let data: any = {
                
        "salesrepid": this.userData._id,
        "user_id":this.userData._id
    }
    this.http.httpViaPost('salesrepdashboard', data).subscribe((response: any) => {
      //console.log(response);
      this.hospitalDetails = response.hospitaldetails;
      this.salesrepPurchaseQuote=response.quotedetails;
      this.salesrepListingQuote=response.quotelisting;
      this.purcehseComparisionQuote=response.purchasecomparisonquote;
    });

  }

  /**getting data for admin */
  getadmin() {
    this.http.httpViaPost('hospitalsalesrepdata', undefined).subscribe((response: any) => {
      this.hospitalDetails = response.hospital;
      this.dataSource = response.salesrep;
      this.recentlyAdded=response.quotedetails;
    });
  }


    /**getting data for hospital */
  getmedicalpartnerData(){
    let data: any = {
      "hospital_id": this.userData._id,
      "salesrepid":this.userData.salesrepselect
      }
    this.http.httpViaPost('hospitaldashboard',data).subscribe((response: any) => {
      this.hospitalrepDetails=response.salesrepdetails[0];
      this.hospitalPurchaseQuote=response.quotedetails;
      this.hospitalListingQuote=response.quotelisting;
      this.hospitalPurchseComparison=response.purchasecomparisonquote;
    });
  }


  getCount() {
    /** getting the count **/
    this.http.httpViaPost('admindashboradcount', undefined).subscribe((response: any) => {
      this.count_dashboard = response;
      this.hospital_count = this.count_dashboard.hospitalcount;
      this.salesrep_count = this.count_dashboard.salesrepcount;
      this.inventory_count = this.count_dashboard.mckessoncount;
      this.medicalpartner_count = this.count_dashboard.otherscount;
      //console.log(this.count_dashboard.mckessoncount);
    });
  }

/** quote details view*/
viewQuoteDetails(quoteid:any,hospiid:any){
  this.router.navigateByUrl('/admin/quote-view/' + quoteid+'/'+hospiid);
//console.log("quote details",quoteid);
}
/**addes quote in admin */
adminsearchbyMedicalName(){
 //console.log(this.searchbyMedicalName.toLowerCase())
    let post={
      "source":"quote-details_view",
    "condition":{
      "hospitalname_search_regex":this.searchbyMedicalName.toLowerCase()
    },
    "limit":10,
    }
    this.http.httpViaPost('datalist',post).subscribe((res:any)=>{
        console.warn(res);
        this.recentlyAdded=res.res;
    })
  
  
}

/**admin search recently add salesrep firstname*/
adminAddSalesrepSearch(){
  let condition:any={};
  if(this.searchbyrecentlyaddedSalesrep!=null){
    condition={};
     condition.firstname_search_regex=this.searchbyrecentlyaddedSalesrep.toLowerCase();
  }
  if(this.searchbySalesrepEmail!=null){
    condition={};
    condition.email_regex=this.searchbySalesrepEmail
  }
  let post={
  "source":"users_view_salesrep",
"condition":condition,
"limit":6,
}
console.log(post)
this.http.httpViaPost('datalist',post).subscribe((res:any)=>{
    //console.log(res);
    this.dataSource=res.res;
})}

}
