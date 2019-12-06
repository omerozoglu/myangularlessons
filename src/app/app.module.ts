import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { ProductFilterPipe } from './product/product-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductComponent,
    CategoryComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
