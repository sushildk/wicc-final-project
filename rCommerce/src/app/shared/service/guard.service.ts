import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor() { }

  saveToken(token:any){
    localStorage.setItem('token',token)
  }
  removeToken(){

    localStorage.removeItem('token')
  }
  checkToken(){
    let token = localStorage.getItem('token')
    if(token){
      return true
    }else{
      return false
    }
  }
}
