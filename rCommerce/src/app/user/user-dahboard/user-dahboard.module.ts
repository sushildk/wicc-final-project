import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDahboardRoutingModule } from './user-dahboard-routing.module';
import { UserDashbordComponent } from './user-dashbord/user-dashbord.component';
import { EdituserComponent } from './edituser/edituser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { RoomDetaiComponent } from './room-detai/room-detai.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [UserDashbordComponent, EdituserComponent, ProfileComponent, RoomDetaiComponent, CheckoutComponent, CartComponent],
  imports: [
    CommonModule,
    UserDahboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  CarouselModule

  ]
})
export class UserDahboardModule { }
