import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title="Product List"
  filterText =""
  products :  Product[]=[
    { 
      id:1,
      name:"Phone",
      price:2000,
      categoryId:1,
      description:"Sony Xperia XZ1 Phone",
      imageUrl:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
    },{ 
      id:2,
      name:"Mouse",
      price:30,
      categoryId:2,
      description:"Bloody V7MA core4 Mouse",
      imageUrl:"https://images.unsplash.com/photo-1563297007-0686b7003af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=791&q=80"
    },{ 
      id:1,
      name:"Phone",
      price:2000,
      categoryId:1,
      description:"Sony Xperia XZ1 Phone",
      imageUrl:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
    },{ 
      id:2,
      name:"Mouse",
      price:30,
      categoryId:2,
      description:"Bloody V7MA core4 Mouse",
      imageUrl:"https://images.unsplash.com/photo-1563297007-0686b7003af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=791&q=80"
    },{ 
      id:1,
      name:"Phone",
      price:2000,
      categoryId:1,
      description:"Sony Xperia XZ1 Phone",
      imageUrl:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
    },{ 
      id:2,
      name:"Mouse",
      price:30,
      categoryId:2,
      description:"Bloody V7MA core4 Mouse",
      imageUrl:"https://images.unsplash.com/photo-1563297007-0686b7003af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=791&q=80"
    }
  ]
  
  ngOnInit() {
  }
  addToCard(product){
    alert("added to card :"+ product.name);
  }
}
