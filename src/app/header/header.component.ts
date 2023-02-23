import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public loggedinuser: any;
  count:number = 0;
  constructor(private router: Router, private productservice:ProductsService) {}
  ngOnInit() {
    this.loggedinuser = localStorage.getItem('loguser');

    this.productservice.currentMessage.subscribe(message => {
      this.loggedinuser = message;
    })

    
    this.productservice.cartUpdates$.subscribe(()=>{
      this.count= this.productservice.count;
    });
  }
  logout(): void {
    localStorage.removeItem('loguser');
    this.router.navigate(['/login']);
  }
}
