import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../shared/products.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userName: any;
  submitted = false;
  constructor(
    private router: Router,
    private productservice: ProductsService
  ) {}
  myForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  onSubmit(): boolean {
    console.log(this.myForm.value);
    this.userName = this.myForm.value.username;
    if (this.myForm.valid) {
      this.router.navigate(['/product-list']);
      localStorage.setItem('loguser', this.userName);
      return true;
    } else {
      alert('Invalid username or password');
      return false;
    }
    this.productservice.changeMessage(this.userName);
  }
  get f() {
    return this.myForm.controls;
  }
}
