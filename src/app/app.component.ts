import { Component } from '@angular/core';
import {BasketService} from "./basket/basket.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SHOP';

  constructor(private basketService:BasketService) {
  }
  ngOnInit() : void{
    const basketId = localStorage.getItem("basket_id")
    if(basketId) this.basketService.getBasket(basketId);
  }
}
