import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './service/auth.service';
import { AuthHeaderComponent } from './layout/auth-header/auth-header.component';
import { AuthFooterComponent } from './layout/auth-footer/auth-footer.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [ AuthHeaderComponent, AuthFooterComponent, AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    
  ],
  providers:[AuthService]
})
export class AuthModule { }
