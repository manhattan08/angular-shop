import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IBasketItem} from "../models/basket";
import {BasketService} from "../../basket/basket.service";

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.css']
})
export class BasketSummaryComponent {
  @Output() addItem = new EventEmitter<IBasketItem>()
  @Output() removeItem = new EventEmitter<{id:number,quantity:number}>();
  @Input() isBasket = true;

  constructor(public basketService:BasketService) {
  }
  addBasketItem(item:IBasketItem){
    this.addItem.emit(item);
  }
  removeBasketItem(id:number,quantity=1){

  }
}
