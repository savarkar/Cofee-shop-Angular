import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LightsComponent } from './lights/lights.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'lights',
    component: LightsComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'product-list',
    component: ProductListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
