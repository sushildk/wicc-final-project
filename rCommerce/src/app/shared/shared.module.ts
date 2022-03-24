import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { MsgService } from './service/msg.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GuardService } from './service/guard.service';
import { SpinnerService } from './service/spinner.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
// import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [ PageNoFoundComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule
    // NgxPaginationModule
    

   
  ],

  exports:[
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule
    // NgxPaginationModule
    
  ],
  providers:[MsgService,GuardService,SpinnerService]
})
export class SharedModule { }
