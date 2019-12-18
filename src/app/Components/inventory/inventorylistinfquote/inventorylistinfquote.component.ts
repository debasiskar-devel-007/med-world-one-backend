import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
@Component({
  selector: 'app-inventorylistinfquote',
  templateUrl: './inventorylistinfquote.component.html',
  styleUrls: ['./inventorylistinfquote.component.css']
})
export class InventorylistinfquoteComponent implements OnInit {
  public user_cookie:any='';
  public inventoryListingQuote: any = [];
  displayed: string[] = ['date','Quote_ID', 'status', 'action'];

  constructor(public http: HttpServiceService, public cookieService: CookieService,
    public router: Router, public activatedRoute: ActivatedRoute) { 
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      console.log(resolveData)
      this.inventoryListingQuote=resolveData.inventorylistingquote.res;
      console.log(this.inventoryListingQuote);
  })
  }
  gotoaddlistinginventory(){
    this.router.navigateByUrl('/admin/inventory/inventorylistingquote/add');
  }

  viewQuoteDetails(quoteid:any,hospiid:any){

      this.router.navigateByUrl('/admin/inventory-listing-view/' + quoteid+'/'+hospiid);
  }
}
