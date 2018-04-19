import { Component, OnInit } from '@angular/core';
import {StoresService} from '../../stores/stores.service'

import {Observable} from 'rxjs/Observable'

import {ActivatedRoute} from '@angular/router'

import {ClothesItem} from '../clothes-item/clothes-item.model'

@Component({
  selector: 'mt-clothes',
  templateUrl: './clothes.component.html'
})
export class ClothesComponent implements OnInit {

  clothes: Observable<ClothesItem[]>

  constructor(private storesService: StoresService,
              private route: ActivatedRoute) { }

  ngOnInit() {
                this.clothes = this.storesService.
                clothesOfStore(this.route.parent.snapshot.params['id']);
  }

  addClothesItem(item: ClothesItem){
    console.log(item);
  }

}
