import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.css'],
})
export class LightsComponent {
  constructor() {
    const objecta = document.querySelector('.lights');
  }
  ngOnInit(): void {
    setInterval(() => {
      let lights: any = document.querySelector('.lights');
      lights.classList.toggle('rotate');
    }, 10000);

    setInterval(() => {
      const lights2: any = document.querySelector('.traffic-lights');
      lights2.classList.addclass('light-transitions');
    }, 1000);
  }
}
