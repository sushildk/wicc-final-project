import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment} from "../../../environments/environment"
import { User } from '../model/usermodel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
url:string;
  constructor(public http:HttpClient) {
    this.url=environment.baseUrl + '/auth'
   }

getOptions(){
  return{
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
}



login(data:User){
return this.http.post(this.url +'/login' ,data , this.getOptions())
}
register(data:User){
return this.http.post(this.url + '/register' ,data , this.getOptions())
}





saveToken(token:any){
  localStorage.setItem('token',token)
}
removeToken(){
  localStorage.removeItem('token')
}
checkToken(){
  let token =localStorage.getItem('token');
  if(token){
    return true
  }else{
    return false
  }
    
  }
  checkRole(){
    let role =localStorage.getItem('role')
    if(role=='admin'){
      return true;
    }else{
      return false;
    }
  }






// get(){
// //   const header ={
// //     'Content-Type':'application/json',
// //     'Access-Control-Allow-Headers':'Content-Type',
// //     'token':'sushil dallakoti'
// //   }
// //   const option={
// // headers:new HttpHeaders(header)
// // }
// return this.http.get('https://jsonplaceholder.typicode.com/todos/1')
// }
  }

