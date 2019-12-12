import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { AlertifyService } from '../services/alertify.service';
import {  } from '../services/product.service';
import { throwError } from 'rxjs';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private alertifyService: AlertifyService ,
    private categoryService:CategoryService) { }
  title="Category List"
  categories ;
  ngOnInit() {
    this.categoryService.getCategories().subscribe(data =>{
      this.categories=data;
    });
  }

}
