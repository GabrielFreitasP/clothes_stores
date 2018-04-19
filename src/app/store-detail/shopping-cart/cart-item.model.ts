import {ClothesItem} from '../clothes-item/clothes-item.model'

export class CartItem {
  constructor(public clothesItem: ClothesItem,
              public quantity: number = 1){


  }
  value(): number {
    return this.clothesItem.price * this.quantity
  }

}
