import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {ClothesItem} from './clothes-item.model'

@Component({
  selector: 'mt-clothes-item',
  templateUrl: './clothes-item.component.html'
})
export class ClothesItemComponent implements OnInit {

  @Input() clothesItem: ClothesItem
  @Output() add = new EventEmitter()
  
  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(){
    this.add.emit(this.clothesItem)
  }
}
