import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = 'https://random-data-api.com/api/coffee/random_coffee?size=50';

  constructor(private httpClient:HttpClient) { }

  getProducts(){
    return this.httpClient.get(this.url);
  }
  isLogin = false;
  private messageSource = new BehaviorSubject<string>("");
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  isLoggedIn() {
    const loggedIn = localStorage.getItem('STATE');
    if (loggedIn == 'true')
      this.isLogin = true;
    else
      this.isLogin = false;
    return this.isLogin;
  }

}
