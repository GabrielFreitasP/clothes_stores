import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'

import {AboutComponent} from './about/about.component'

import {StoresComponent} from './stores/stores.component'
import {StoreDetailComponent} from './store-detail/store-detail.component'

import {ClothesComponent} from './store-detail/clothes/clothes.component'

import {ReviewsComponent} from './store-detail/reviews/reviews.component'

import {OrderComponent} from './order/order.component'

export const ROUTES: Routes =[

    {path: '', component: HomeComponent},
    {path: 'stores', component: StoresComponent},
    {path: 'stores/:id', component: StoreDetailComponent,
      children: [
        {path: '', redirectTo: 'clothes', pathMatch:'full'},
        {path: 'clothes', component: ClothesComponent},
        {path: 'reviews', component: ReviewsComponent}
      ]},
    {path: 'about', component: AboutComponent},
    {path: 'order', component: OrderComponent},
]
