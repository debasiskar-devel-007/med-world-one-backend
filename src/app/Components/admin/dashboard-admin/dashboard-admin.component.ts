import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpServiceService } from '../../../services/http-service.service';
import { Router, ActivatedRoute } from '@angular/router';
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
  public hospital_count:string;
  public salesrep_count:string;
  public inventory_count:string;
  public medicalpartner_count:string;
  public purcehseComparisionQuote:any=[];
  public user_name:string;
  public purcehseComparisionHeader:string[]=['date','medicalpartner','hospitalname','status'];
  public recentlyAdded:any=[];

  displayed: string[] = ['date', 'quote_id','medical_partner', 'sales_rep', 'quoted_by', 'status', 'action'];
  // recentlyAdded = Recent_DATA;


  constructor(private router: Router, public cookieService: CookieService, private http: HttpServiceService,
    public activatedRoute: ActivatedRoute) {

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
    if(this.type=='admin')
    this.getHospitals();
    else
    this.getHospitalsSalesRep();
  }

  toHospitalList(index: any) {
    this.router.navigateByUrl('admin/hospital/view_details/' + index)
  }

  /** getting hospitals for salesrep **/
  getHospitalsSalesRep() {

    let data: any = {
      source: 'users_view',
      condition: {
        'type': 'hospital',
        "salesrepselect_object": this.userData._id
      }
    }
    this.http.httpViaPost('datalist', data).subscribe((response: any) => {
      this.hospitalDetails = response.res;

    });

    let dta: any = {
      source: 'purchasecomparison_view_admin',
      condition: {
        'salesrep_id_object': this.userData._id
      },
      token: this.cookieService.get('jwtToken')
    }

    this.http.httpViaPost('datalist', dta).subscribe(response => {
      this.purcehseComparisionQuote = response.res;
      //console.log(this.purcehseComparisionQuote);

    });
  }


  getHospitals() {
    this.http.httpViaPost('hospitalsalesrepdata', undefined).subscribe((response: any) => {
      this.hospitalDetails = response.hospital;
      this.dataSource = response.salesrep;
      this.recentlyAdded=response.quotedetails;
      // console.log("hospital name recently",this.hospitalDetails);
      // console.log("salesrep name recently",this.dataSource)
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

}
