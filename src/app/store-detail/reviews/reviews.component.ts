import { Component, OnInit } from '@angular/core';

import {StoresService} from '../../stores/stores.service'

import {Observable} from 'rxjs/Observable'

import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private storesService: StoresService,
              private route: ActivatedRoute){ }

  ngOnInit() {
    this.reviews = this.storesService.reviewsOfStore(this.route.parent.snapshot.params['id']);
  }

}
