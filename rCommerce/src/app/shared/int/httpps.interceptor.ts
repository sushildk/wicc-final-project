import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { ConstantPool } from '@angular/compiler';
import { SpinnerService } from '../service/spinner.service';

@Injectable()
export class HttppsInterceptor implements HttpInterceptor {

  constructor(public spinner:SpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // request = request.clone({
    //   setHeaders:{

    //     token:'tokkkkkkkkkkkkk',
    //     lang:'eng'
    //   }
      
    // })
    this.spinner.showSpinner();
    
    return next.handle(request).pipe(finalize(()=>{
      this.spinner.hideSpinner()
    }));
  }
}
