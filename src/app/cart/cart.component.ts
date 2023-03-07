import { Component } from '@angular/core';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  public count:any;
   public cartList:[]=[];
    cartResponse:any;
    public data:any;
  constructor(private productservice:ProductsService) {
   
  }
   ngAfterViewChecked() {
    this.count= this.productservice.cartItmes;
    this.productservice.cartUpdates$.subscribe((res)=>{
      this.count= this.productservice.cartItmes;
      console.log(this.count, 'KKoooooooooov')
      this.data = res;
    //  return this.count
     // this.cartList.push(this.count);
    });
   
  }
  remove(product:any){
    this.productservice.remove(product);
    this.count= this.productservice.cartItmes;
    this.ngAfterViewChecked(); 
  }
  // ngAfterViewChecked(): void {
  //   this.productservice.cartUpdates$.subscribe((res:any)=>{
  //    // this.count= this.productservice.count;
  //     console.log(res, 'dddddddd')
  //   });

  
  // }
}

