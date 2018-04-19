import { Component, OnInit } from '@angular/core';

import {StoresService} from '../stores/stores.service';

import {Store} from '../stores/store/store.model';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'mt-store-detail',
  templateUrl: './store-detail.component.html'
})
export class StoreDetailComponent implements OnInit {

  store: Store;

  constructor(private storesService: StoresService,
              private route: ActivatedRoute) { }

  ngOnInit() {

      this.storesService.storeById(this.route.snapshot.params['id'])
        .subscribe(store => this.store = store);
  }

}
