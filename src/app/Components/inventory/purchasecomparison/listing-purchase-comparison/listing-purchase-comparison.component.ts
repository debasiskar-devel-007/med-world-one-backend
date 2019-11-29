import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface DialogData {
  msg: string;
}

@Component({
  selector: 'app-listing-purchase-comparison',
  templateUrl: './listing-purchase-comparison.component.html',
  styleUrls: ['./listing-purchase-comparison.component.css']
})
export class ListingPurchaseComparisonComponent implements OnInit {


  /**  declarations **/
  user_cookie: any = '';
  purchaseFormData: any = [];
  displayedColumns: string[] = ['no', 'hospitalname', 'salesrepname', 'reportname', 'date', 'actions'];
  datasource = null;
  dialogRef: any;
  quoteArray: any = [];
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  sales_rep_array:any=[];
  userData:any;
  role:any;
  headerFlag:string;
  viewTable:string;



  /** View child **/
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  constructor(private http: HttpServiceService, private cookieService: CookieService,
    private router: Router, public activatedRoute: ActivatedRoute, public dialog: MatDialog) {
    this.user_cookie = cookieService.get('jwtToken');
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      this.purchaseFormData = resolveData.data.res;
      // console.log("----------",this.purchaseFormData);
    });
    this.datasource = new MatTableDataSource(this.purchaseFormData);
    this.datasource.paginator = this.paginator;
    console.log("DATALIST", this.datasource);

     /** getting the salesrep names **/
      this.getSalesRepNames();



    /** filtered options for autocomplete **/
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  
      this.headerFlag = this.activatedRoute.snapshot.url[0].path;
      console.log("->",this.headerFlag);
     
      if(this.headerFlag=='admin')
        this.viewTable ="purchasecomparison_view_admin";
        else
        this.viewTable="purchasecomparison_view_rep"
  }

  /** filtered options for autocomplete**/
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  /** quote view **/
  viewQuote(index: any) {
    console.log("index", index);
    let data: any = {
      'source': '"purchasecomparison_view_data',
      'token': this.cookieService.get('jwtToken'),
      'condition': { '_id': index }
    }
    this.http.httpViaPost('datalist', data).subscribe(response => {
      let result = response.res;
      this.openDialog(result[0].items);
    });

  }


  /** Modal function **/
  openDialog(x: any): void {
    this.dialogRef = this.dialog.open(quoteModal, {
      width: '1000px',
      data: { msg: x }
    });

    this.dialogRef.afterClosed().subscribe(result => {

    });
  }


  /** searching data**/
  search_hospital(event: any) {
    console.log("search value", event.target.value)
    let data: any = {
      'source': 'purchasecomparison_view_admin',
      'condition': {
        'hospital_name_regex': event.target.value
      },
      'token': this.cookieService.get('jwtToken')
    }
    this.http.httpViaPost('datalist', data).subscribe(response => {
      let result = response.res;
      this.datasource = new MatTableDataSource(result);
      this.datasource.paginator = this.paginator;
    });
  }


  /** search draft **/
  search_draft(event: any) {
    console.log(event.value);

    let data: any = {
      'source': 'purchasecomparison_view_admin',
      'condition': {
        'is_draft': parseInt(event.value)
      },
      'token': this.cookieService.get('jwtToken')
    }
    this.http.httpViaPost('datalist', data).subscribe(response => {
      let result = response.res;
      console.log(result);
      this.datasource = new MatTableDataSource(result);
      this.datasource.paginator = this.paginator;
    });
  }

  /** getting the sales rep names **/
  getSalesRepNames(){
      let data:any={
        source:'users_view',
        token:this.cookieService.get('jwtToken'),
        condition:{ 'type':'salesrep' }
      }

      this.http.httpViaPost('datalist',data).subscribe(response=>{
          let result =  response.res;
          for(let i=0;i<result.length;i++){
             this.options[i]=result[i].firstname+" "+result[i].lastname;
          }
 

          console.log(this.options);
      });
  }

  /** searching by salesrep **/
  search_salesrep(event:any){
  // console.log("-------",event.target.value);
  // let data: any = {
  //   'source': 'purchasecomparison_view_admin',
  //   'condition': {
  //     'hospital_name_regex': event.target.value
  //   },
  //   'token': this.cookieService.get('jwtToken')
  // }
  // this.http.httpViaPost('datalist', data).subscribe(response => {
  //   let result = response.res;
  //   this.datasource = new MatTableDataSource(result);
  //   this.datasource.paginator = this.paginator;
  // });
  
  }

}


// ============================================MODAL COMPONENT===========================================
@Component({
  selector: 'app-modal',
  templateUrl: 'quoteModal.html',
  styleUrls: ['./listing-purchase-comparison.component.css']
})
export class quoteModal {

  constructor(
    public dialogRef: MatDialogRef<quoteModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
// ======================================================================================================
