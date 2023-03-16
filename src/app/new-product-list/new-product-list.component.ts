import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from '../shared/product';
import { ProductsService } from '../shared/products.service';
import Products from "../shared/products1.json";

@Component({
  selector: 'app-new-product-list',
  templateUrl: './new-product-list.component.html',
  styleUrls: ['./new-product-list.component.css']
})
export class NewProductListComponent {

  ProductsList:any = Products;
  stringifiedData:any;
  data: any;
  sizes:any;

  constructor(private productservice:ProductsService, private http:HttpClient ){
    // this.http.get("").subscribe(data => {
    //   debugger;
    //   this.data = Products;
    //   console.log(this.data, 'heooooo')
    // });
    this.sizes= this.ProductsList[0].availableSizes;
    console.log(this.sizes, 'heooooo');
  }

  ngOninit(){

    this.data = Products;
    console.log(this.ProductsList, 'heooooo');
    console.log(Products, 'heooooo');



    // this.http.get('../products1.json').subscribe(data => {
    //   this.data = data;
    //   console.log(this.data, 'heooooo')
    // });

  }
}
