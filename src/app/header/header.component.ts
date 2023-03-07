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
  count:any;
  loguserName= '';
  user:boolean= false;
  constructor(private router: Router, private productservice:ProductsService) {
   
  }
  ngAfterViewChecked(): void {

    this.productservice.currentMessage.subscribe(message => {
      this.loguserName = message;
      this.loggedinuser = localStorage.getItem('loguser');
      if(this.productservice.isLoggedIn()){
        this.user=true;
    }
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
