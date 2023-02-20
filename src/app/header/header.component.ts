import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


public loggedinuser=localStorage.getItem('loguser');
constructor(private router:Router){

}
logout():void{
  localStorage.removeItem('loguser');
  this.router.navigate(['/login']);
}

}
