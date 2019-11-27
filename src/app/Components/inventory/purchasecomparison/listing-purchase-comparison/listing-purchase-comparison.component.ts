import { Component, OnInit, ViewChild ,Inject} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  msg: string;
}

@Component({
  selector: 'app-listing-purchase-comparison',
  templateUrl: './listing-purchase-comparison.component.html',
  styleUrls: ['./listing-purchase-comparison.component.css']
})
export class ListingPurchaseComparisonComponent implements OnInit {

  user_cookie: any = '';
  purchaseFormData: any = [];
  displayedColumns: string[] = ['no', 'hospitalname','salesrepname','reportname','draft','date', 'actions'];
  datasource = null;
  dialogRef:any;
  quoteArray : any = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  constructor(private http: HttpServiceService, private cookieService: CookieService,
    private router: Router, public activatedRoute: ActivatedRoute,public dialog: MatDialog) {
    this.user_cookie = cookieService.get('jwtToken');
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      this.purchaseFormData = resolveData.data.res;
      // console.log("----------",this.purchaseFormData);
    });
    this.datasource = new MatTableDataSource(this.purchaseFormData);
    this.datasource.paginator = this.paginator;
    console.log("------------", this.purchaseFormData);
  }

  /** quote view **/
  viewQuote(val:any) {
    console.log("val",val);
    // for (const key in val) {
    //   console.log(val[key]);    
    // }
    this.openDialog(val);
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
