import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { User } from 'src/app/auth/model/usermodel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url:string;
  token:string;
  constructor(public http:HttpClient) {
    this.url=environment.baseUrl + '/user'
    this.token =localStorage.getItem('token')!
   }

getOptions(){
  return{
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'token':this.token
    })
  }
}


getAllUser(){
  return this.http.get<User[]>(`${this.url}`,this.getOptions())

}
removeUser(id:string){
  return this.http.delete(`${this.url}/${id}`,this.getOptions())
}






}
