import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttppsInterceptor } from './shared/int/httpps.interceptor';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      preventDuplicates: true,
      progressBar:true,
   
    }),
    NgxSpinnerModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
    
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:HttppsInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
