import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';
// import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [HomepageComponent, CartComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule

  ]
})
export class HomeModule { }
