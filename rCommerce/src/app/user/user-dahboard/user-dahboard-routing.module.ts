import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ProfileComponent } from './profile/profile.component';
import { RoomDetaiComponent } from './room-detai/room-detai.component';
import { UserDashbordComponent } from './user-dashbord/user-dashbord.component';

const routes: Routes = [
  {
    path:'',
    component:UserDashbordComponent
  },
  {
    path:'editUser/:id',
    component:EdituserComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'roomDetail/:id',
    component:RoomDetaiComponent
  },{
    path:'checkout',
    component:CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDahboardRoutingModule { }
