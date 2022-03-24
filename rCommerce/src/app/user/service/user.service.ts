import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rooms } from 'src/app/admin/interface/roomSearch';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string;
  constructor(public http:HttpClient) {
    this.url=environment.baseUrl 
   }

getOptions(){
  return{
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'token':localStorage.getItem('token')!
    })
  }
}
getById(id:string){

return this.http.get(`${this.url}/user/${id}`,this.getOptions())

}
editUser(id:string,data:any){
  return this.http.put(`${this.url}/user/${id}`,data,this.getOptions())

}
getAllRoom(){
  return this.http.get<Rooms[]>(`${this.url}/room`,this.getOptions())
}


}
