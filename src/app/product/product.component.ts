import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title="Product List"
  products :  any[]=[
    { 
      id:1,
      name:"Phone",
      price:2000,
      categoryId:1,
      description:"Sony Xperia XZ1 Phone"
    },{ 
      id:2,
      name:"Mouse",
      price:30,
      categoryId:2,
      description:"Bloody V7MA core4 Mouse"
    }
  ]
  
  ngOnInit() {
  }

}
