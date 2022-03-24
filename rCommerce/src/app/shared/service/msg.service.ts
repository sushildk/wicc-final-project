import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
class MsgService {

  constructor( 
    public toastr:ToastrService
    ) { 

  }

  showSuccess(msg:string){
    this.toastr.success(msg)
  }
  showInfo(msg:string){
    this.toastr.info(msg)
  }
  showWarning(msg:string){
    this.toastr.warning(msg)
  }
  showErr(err:any){
this.toastr.error(err)
  }
}

export {MsgService}