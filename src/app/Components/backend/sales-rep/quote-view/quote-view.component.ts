import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(public activatedRoute:ActivatedRoute) { 
    console.log(this.activatedRoute.snapshot.params.id);
  }

  ngOnInit() {
  }

  viewQuoteHeader: string[] = [ 'name', 'sku', 'category', 'brand', 'qty', 'price', 'wholesale'];
  viewData = Data;
}
