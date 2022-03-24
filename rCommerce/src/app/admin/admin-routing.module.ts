import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from '../shared/service/guard.service';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './guard/admin.guard';

const routes: Routes = [{
  path:'',
  component:AdminComponent,
  canActivate:[AdminGuard],
  children:[
    
    {
      path:'adminDashboard',
      loadChildren:()=>import('./admin-dashbord/admin-dashbord.module').then(m=>m.AdminDashbordModule)
    },
    {
      path :'room',
      loadChildren:()=>import('./room/room.module').then(m=>m.RoomModule)
    },
    {
      path:'book',
      loadChildren:()=>import('./booking/booking.module').then(m=>m.BookingModule)
    }

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
