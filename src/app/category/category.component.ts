import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title="Category List"
  categories :Category[]=[
    {
      "id":1,
      "name":"Phone"
    },
    {
      "id":2,
      "name":"Mouse"
    },
    {
      "id":3,
      "name":"PC"
    },
    {
      "id":4,
      "name":"Watch"
    }

  ]
  ngOnInit() {
  }

}
