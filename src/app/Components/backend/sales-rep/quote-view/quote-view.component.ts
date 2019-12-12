import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../../../../services/http-service.service';
const Data = [
  { name: 'Lorem Ipsum is simply', sku: 253, category: 'Lorem Ipsum is simply dummy text', brand: 'Lorem Ipsum is simply dummy text', qty:'2', pric: 360, wholesale: 9600.00 },
  { name: 'Lorem Ipsum is simply', sku: 253, category: 'Lorem Ipsum is simply dummy text', brand: 'Lorem Ipsum is simply dummy text', qty:'2', pric: 360, wholesale: 9600.00 },
  { name: 'Lorem Ipsum is simply', sku: 253, category: 'Lorem Ipsum is simply dummy text', brand: 'Lorem Ipsum is simply dummy text', qty:'2', pric: 360, wholesale: 9600.00 },
  { name: 'Lorem Ipsum is simply', sku: 253, category: 'Lorem Ipsum is simply dummy text', brand: 'Lorem Ipsum is simply dummy text', qty:'2', pric: 360, wholesale: 9600.00 },
  { name: 'Lorem Ipsum is simply', sku: 253, category: 'Lorem Ipsum is simply dummy text', brand: 'Lorem Ipsum is simply dummy text', qty:'2', pric: 360, wholesale: 9600.00 },

];
@Component({
  selector: 'app-quote-view',
  templateUrl: './quote-view.component.html',
  styleUrls: ['./quote-view.component.css']
})
export class QuoteViewComponent implements OnInit {
public quotedetails:any={};
public quoteinfo:any={};
  constructor(public activatedRoute:ActivatedRoute,public http:HttpServiceService) { 
    console.log("Quote ID",this.activatedRoute.snapshot.params.id);
    //console.log("Hospital ID",this.activatedRoute.snapshot.params.hospitalid);

    let postData:any={
        "hospital_id":this.activatedRoute.snapshot.params.hospitalid,
        "id":this.activatedRoute.snapshot.params.id
    }
    this.http.httpViaPost('quoteviewasync', postData).subscribe((response: any) => {
     //console.log(response);
     if(response.status="success"){
      console.log("quotedetails",response.quotedetails[0].inventory_details[0]);
      console.log("quoteinfo",response.quoteinfo[0]);
      this.quoteinfo=response.quoteinfo[0];
      this.quotedetails=response.quotedetails[0].inventory_details;
     }
    });
  }

  ngOnInit() {
  }

  viewQuoteHeader: string[] = [ 'name', 'sku', 'category', 'brand', 'qty', 'price', 'wholesale'];
  viewData = Data;
}
