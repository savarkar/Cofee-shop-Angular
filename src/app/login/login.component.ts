import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: any;
  isLogin = false;
  msg:any;
  constructor(private router: Router, private productservice: ProductsService) 
  {}

  login(): void {
    const username = (<HTMLInputElement>document.getElementById('username')).value;
    const password = (<HTMLInputElement>document.getElementById('password')).value;

    // hardcoded test user and password
    if (username && password) {
      this.user = username;
      this.router.navigate(['/product-list']);
      localStorage.setItem('loguser', username);
      this.msg='welcome';
    } 
    else {
      alert('Invalid username or password');
    }
    this.productservice.changeMessage(this.user);
  }
}
