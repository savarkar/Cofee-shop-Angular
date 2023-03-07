import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  public count: any;
  public cartList: [] = [];
  cartResponse: any;
  public data: any;
  constructor(
    private productservice: ProductsService,
    private Router: Router
  ) {}
  ngAfterViewChecked() {
    this.count = this.productservice.cartItmes;
    this.productservice.cartUpdates$.subscribe((res) => {
      this.count = this.productservice.cartItmes;
      console.log(this.count, 'KKoooooooooov');
      this.data = res;
    });
    console.log(this.count.length, 'countttt');

    if (this.count.length == 0) {
      this.Router.navigate(['/product-list']);
    }
  }

  remove(product: any, index: any) {
    this.count.splice(index, 1);

    this.productservice.remove(product);
    this.count = this.productservice.cartItmes;
    this.productservice.cartUpdates$.subscribe(() => {
      this.count = this.productservice.count;
    });
  }
}
