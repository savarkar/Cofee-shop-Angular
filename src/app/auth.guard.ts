import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from './shared/products.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private productservice:ProductsService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   // return true;
    return this.checkUserLogin();
  }
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   let url: string = state.url;
  //   return this.checkUserLogin(next, url);
  // }
  checkUserLogin() {
    if (this.productservice.isLoggedIn()) {
      //const userRole = this.authService.getRole();
      // if (route.data.role && route.data.role.indexOf(userRole) === -1) {
      //   this.router.navigate(['/home']);
      //   return false;
      // }
      return true;
    }

    this.router.navigate(['/product-list']);
    return false;
  }
}
