import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import {Product,CartProduct} from '../shared/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = 'https://random-data-api.com/api/coffee/random_coffee?size=50';

  constructor(private httpClient:HttpClient) { }

  getProducts(){
    return this.httpClient.get(this.url);
  }
  private loggedIn = false;

  private messageSource = new BehaviorSubject<string>("");
  currentMessage = this.messageSource.asObservable();

  private cartList = new BehaviorSubject<string>("");
  currentCart=this.cartList.asObservable();

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  getCart(cart:string){
    this.cartList.next(cart)
  }
  isLoggedIn():boolean {
    const loggedIn = localStorage.getItem('loguser');
    return this.loggedIn;
  }


  
  private cartUpdates = new Subject<string>();
  public cartUpdates$ = this.cartUpdates.asObservable();

  public cartItmes:CartProduct[] =[];
  public get count():number{
    return this.cartItmes.reduce((c,t1) => t1.qty+c,0);
    
  };
  add(product:any){
   let item:CartProduct = this.cartItmes.find(item => item.id == product.id) as CartProduct ;
   if(item){ item.qty ++ } else {
     (product as CartProduct).qty = 1;
     this.cartItmes.push(product)
   }
   this.cartUpdates.next(product);
   //test
  }
}
