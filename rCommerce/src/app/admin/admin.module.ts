import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHeaderComponent } from './layout/admin-header/admin-header.component';
import { AdminFooterComponent } from './layout/admin-footer/admin-footer.component';
import { AdminComponent } from './admin/admin.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminService } from './service/admin.service';
import { RoomService } from './service/room.service';
import { AdminGuard } from './guard/admin.guard';


@NgModule({
  declarations: [AdminHeaderComponent, AdminFooterComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ],
  providers:[AdminService,RoomService,AdminGuard]
})
export class AdminModule { }
