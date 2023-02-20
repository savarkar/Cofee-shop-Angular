import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

 coffeeBrands:any = {
    "brands": [
      {
        "name": "Starbucks",
        "founded": "1971",
        "location": "Seattle, Washington",
        "popular_products": ["Pike Place Roast", "Caramel Macchiato", "Vanilla Latte"],
        "website": "https://www.starbucks.com/",
        "rate": "$10"
      },
      {
        "name": "Dunkin'",
        "founded": "1950",
        "location": "Quincy, Massachusetts",
        "popular_products": ["Original Blend Coffee", "Dunkin' Donuts Iced Coffee", "Hot Chocolate"],
        "website": "https://www.dunkindonuts.com/",
        "rate": "$11"
      },
      {
        "name": "Peet's Coffee",
        "founded": "1966",
        "location": "Emeryville, California",
        "popular_products": ["Major Dickason's Blend", "Cafe Domingo", "Decaf Major Dickason's Blend"],
        "website": "https://www.peets.com/",
        "rate": "$12"
      },
      {
        "name": "Lavazza",
        "founded": "1895",
        "location": "Turin, Italy",
        "popular_products": ["Crema e Gusto", "Qualità Oro", "Gran Espresso"],
        "website": "https://www.lavazza.com/",
        "rate": "$13"
      },
      {
        "name": "Illy",
        "founded": "1933",
        "location": "Trieste, Italy",
        "popular_products": ["Illy Espresso", "Illy Decaf", "Illy Moka"],
        "website": "https://www.illy.com/",
        "rate": "$14"
      }
    ]
  }
  
}
