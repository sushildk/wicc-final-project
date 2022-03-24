import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room/room.component';
import { RoomformComponent } from './roomform/roomform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';


@NgModule({
  declarations: [
    RoomComponent,
    RoomformComponent,
    EditRoomComponent,
    RoomDetailComponent
  ],
  imports: [
    CommonModule,
    RoomRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RoomModule { }
