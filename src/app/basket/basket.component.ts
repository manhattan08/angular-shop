import { Component } from '@angular/core';
import {BasketService} from "./basket.service";
import {IBasketItem} from "../shared/models/basket";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  constructor(public basketService:BasketService) {
  }
  incrementItemQuantity(item:IBasketItem){
    this.basketService.addItemToBasket(item);
  }
  removeBasketItem(event:{id:number,quantity:number}){
    this.basketService.removeItemFromBasket(event.id,event.quantity);
  }
}
