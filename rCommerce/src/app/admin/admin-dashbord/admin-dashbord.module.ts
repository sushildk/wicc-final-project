import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashbordRoutingModule } from './admin-dashbord-routing.module';
import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminHeaderComponent } from '../layout/admin-header/admin-header.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [AdminDashbordComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    AdminDashbordRoutingModule,
    FormsModule,
    // NgxPaginationModule
  ],
 
})
export class AdminDashbordModule { }
