import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from './shared/products.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private productservice:ProductsService, private router: Router) { }

  canActivate(): boolean {
    if (this.productservice.isLoggedIn()) {
      this.router.navigate(['/product-list']);
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
