import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {


  constructor() { }
  categoryList = ['Ambulatory Equipment', 'Apparel',' Appliances (Durable Goods)', 'Body Pressure Relief and Positioning', 'Clinical Laboratory', 'Diagnostic Instruments and Supplies', 'Drainage and Suction', 'Furnishings', 'Gloves', 'Housekeeping',' I.V. Therapy', 'Implants', 'Incontinence', 'Indicators and Signage', 'Instruments', ' Needles and Syringes', 'Nurse+"s"+ Station and Office', 'Supplies', 'Nutritionals and Feeding', 'Supplies'
  ,'Office Supplies', 'Orthopedic', 'Ostomy' ];
  ngOnInit() {
  

  }
 
}
