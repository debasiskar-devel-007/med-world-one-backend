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
  sales_rep_array: any = [];
  userData: any;
  role: any;
  headerFlag: string;
  viewTable: string;
  id: any;


  /** View child **/
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;


  constructor(private http: HttpServiceService, private cookieService: CookieService,
    private router: Router, public activatedRoute: ActivatedRoute, public dialog: MatDialog) {
    this.user_cookie = cookieService.get('jwtToken');
    let allData: any = {};
    allData = cookieService.getAll()
    this.userData = JSON.parse(allData.user_details);
    this.id = this.userData._id;

  }

  ngOnInit() {

    /** getting the header flag **/
    this.headerFlag = this.activatedRoute.snapshot.url[0].path;

    /** getting data for listing **/
    if (this.headerFlag == 'admin') {
      this.activatedRoute.data.subscribe(resolveData => {
        this.purchaseFormData = resolveData.data.res;
      });

      setTimeout(() => {
        this.datasource = new MatTableDataSource(this.purchaseFormData);
        this.datasource.paginator = this.paginator;
      }, 500);
    }
    else {
      this.getHospitalForSalesRep();
    }





    /** getting the salesrep names **/
    this.getSalesRepNames();



    /** filtered options for autocomplete **/
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

    if (this.headerFlag == 'admin')
      this.viewTable = "purchasecomparison_view_admin";
    else
      this.viewTable = "purchasecomparison_view_rep"

  }

  /** filtered options for autocomplete**/
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  /** quote view **/
  viewQuote(index: any) {
    let data: any = {
      'source': 'purchasecomparison_view_rep',
      'token': this.cookieService.get('jwtToken'),
      'condition': { '_id': index }
    }
    this.http.httpViaPost('datalist', data).subscribe(response => {
      let result = response.res;
      this.openDialog(result[0].items)

    });

  }


  /** Modal function **/
  openDialog(x: any): void {
    this.dialogRef = this.dialog.open(quoteModal, {
      panelClass: 'comparisonModal',
      data: { msg: x }
    });

    this.dialogRef.afterClosed().subscribe(result => {

    });
  }


  /** searching data**/
  search_hospital(event: any) {
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
    let data: any = {
      'source': 'purchasecomparison_view_admin',
      'condition': {
        'is_draft': parseInt(event.value)
      },
      'token': this.cookieService.get('jwtToken')
    }
    this.http.httpViaPost('datalist', data).subscribe(response => {
      let result = response.res;
      this.datasource = new MatTableDataSource(result);
      this.datasource.paginator = this.paginator;
    });
  }

  /** getting the sales rep names **/
  getSalesRepNames() {
    let data: any = {
      source: 'users_view',
      token: this.cookieService.get('jwtToken'),
      condition: { 'type': 'salesrep' }
    }

    this.http.httpViaPost('datalist', data).subscribe(response => {
      let result = response.res;
      for (let i = 0; i < result.length; i++) {
        this.options[i] = result[i].firstname + " " + result[i].lastname;
      }
    });
  }

  /** searching by salesrep **/
  search_salesrep(event: any) {
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

  /** salesrep hospital data **/
  getHospitalForSalesRep() {
    let data: any = {
      source: 'purchasecomparison_view_admin',
      condition: {
        // 'type':'hospital',
        'salesrep_id_object': this.id
      },
      token: this.cookieService.get('jwtToken')
    }

    this.http.httpViaPost('datalist', data).subscribe(response => {
      this.purchaseFormData = response.res;
      setTimeout(() => {
        this.datasource = new MatTableDataSource(this.purchaseFormData);
        this.datasource.paginator = this.paginator;
      }, 500);
    });
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
