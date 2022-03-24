import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  url: string;
  token: string ;

  constructor(
    public http:HttpClient
  ) { 
    this.url= environment.baseUrl + '/book'
    this.token =localStorage.getItem('token')!
  }

  getOption(){
    return {
      headers : new HttpHeaders({
        'Content-Type':'application/json',
        "token":this.token
      })
    }
  }

  getAllBooking(){
    return this.http.get(`${this.url}`,this.getOption());
  }
  addBookingRoom(id:any ){
    return this.http.get(`${this.url}/${id}`,this.getOption())
  }
  deleteBook(){
    return this.http.delete(`${this.url}`,this.getOption())
  }

}
