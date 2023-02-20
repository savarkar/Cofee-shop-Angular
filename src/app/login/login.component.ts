import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }

  login(): void {
    const username = (<HTMLInputElement>document.getElementById("username")).value;
    const password = (<HTMLInputElement>document.getElementById("password")).value;

    // hardcoded test user and password
    if (username === 'admin' && password === 'admin') {
      this.router.navigate(['/product-list']);
      localStorage.setItem('loguser', username)
    } else {
      alert('Invalid username or password');
    }
  }

}
