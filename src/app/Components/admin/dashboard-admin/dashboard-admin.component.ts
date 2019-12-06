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
@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  /** declarations **/
  public userData: any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  public dataSource = ELEMENT_DATA;
  public type: string;
  public hospitalDetails: any = [];
  public fullImagePath: any = [];
  public count_dashboard : any;

  constructor(private router: Router, public cookieService: CookieService, private http: HttpServiceService,
    public activatedRoute : ActivatedRoute) {

    /**fetching the cookie details **/
    let allData: any = {};
    allData = cookieService.getAll()
    this.userData = JSON.parse(allData.user_details);
    this.type = this.userData.type


    this.activatedRoute.data.subscribe(resolveData => {
      this.hospitalDetails = resolveData;
      console.log('--AAAA---------',this.hospitalDetails);
    });

    let data = {     
      "condition":{
        "hospitaltype":{
          "type":"hospital"
        },
        "salesreptype":{
          "type":"salesrep"
        },
        "mckessontype":{
          "source_name":"mckesson"
        }
      }    
    }

    // this.http.httpViaPost('admindashboradcount', data).subscribe((response: any) => {
    //   this.hospitalDetails = response.res;
    //   console.log("->", this.hospitalDetails);
    //   // for (let i = 0; i < this.hospitalDetails.length; i++) {
    //   //   this.fullImagePath[i] = 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/files/' +
    //   //     this.hospitalDetails[i].images;
    //   // }
    // });
    // console.log("hospital", this.hospitalDetails);


    /** getting the count **/
    this.http.httpViaPost('admindashboradcount', data).subscribe((response: any) => {
      this.count_dashboard = response;
      console.log("->", this.count_dashboard);     
    });
  }

  ngOnInit() {
    this.getHospitals();
  }

  toHospitalList(index:any){
      this.router.navigateByUrl('admin/hospital/view_details/'+index)
  }


  getHospitals(){
  
      this.http.httpViaPost('hospitaldata', undefined).subscribe((response: any) => {
        this.hospitalDetails = response.res;
        console.log("=>>", this.hospitalDetails);     
      });
    
  }
}
