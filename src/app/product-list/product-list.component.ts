import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductsService } from '../shared/products.service';
import { Subject }    from 'rxjs';
import { Product } from '../shared/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  cofeeBrand: any;
  currentPage = 1;
  myArray = [];

  constructor(private productservice: ProductsService) {}
  ngOnInit() {
    this.productservice.getProducts().subscribe((data) => {
      this.cofeeBrand = data;
      console.log(data, 'api dataaaaaa');
    });
  }
  @Input() product: any;
  @Output() productAdded = new EventEmitter();
  addToCart(product:Product) : void{
    this.productservice.add(product);
 }
}