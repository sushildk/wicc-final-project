import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { RoomComponent } from './room/room.component';
import { RoomformComponent } from './roomform/roomform.component';

const routes: Routes = [
  {
    path:'',
    component:RoomComponent
  },
  {
    path:'addroom',
    component:RoomformComponent
  },
  {
    path:"editRoom/:id",
    component:EditRoomComponent
  },
  {
    path:'roomDetail/:id',
    component:RoomDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
