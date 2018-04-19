import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StoresComponent } from './stores/stores.component';
import { StoreComponent } from './stores/store/store.component'
import { StoresService } from './stores/stores.service';
import { StoreDetailComponent } from './store-detail/store-detail.component';
import { ClothesComponent } from './store-detail/clothes/clothes.component';
import { ShoppingCartComponent } from './store-detail/shopping-cart/shopping-cart.component';
import { ClothesItemComponent } from './store-detail/clothes-item/clothes-item.component';
import { ReviewsComponent } from './store-detail/reviews/reviews.component'
import { ShoppingCartService } from './store-detail/shopping-cart/shopping-cart.service';
import { OrderComponent } from './order/order.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    StoresComponent,
    StoreComponent,
    StoreDetailComponent,
    ClothesComponent,
    ShoppingCartComponent,
    ClothesItemComponent,
    ReviewsComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [StoresService, ShoppingCartService, { provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
