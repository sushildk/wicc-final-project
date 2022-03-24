import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Rooms } from 'src/app/admin/interface/roomSearch';
import { RoomService } from 'src/app/admin/service/room.service';
import { AuthService } from 'src/app/auth/service/auth.service';
import { MsgService } from 'src/app/shared/service/msg.service';
import { environment } from 'src/environments/environment';
import { BookingService } from '../../service/booking.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-dashbord',
  templateUrl: './user-dashbord.component.html',
  styleUrls: ['./user-dashbord.component.css']
})
export class UserDashbordComponent implements OnInit {
  rooms : Rooms[] =[]
  address: any;
  cart: any;
  cartRoom: any;
  cartNumber: number;
  imageUrl: string;

  premium: any;
  urgent: any;
  normal: any;
  normalLoading: boolean;
  urgentLoading: boolean;
  premiumLoading: boolean;

  constructor(
    public authService:AuthService,
    public router:Router,
    public userService:UserService,
    public msgService :MsgService,
    public bookingservice:BookingService,
    public roomService:RoomService

  ) { 

    this.premium = {};
    this.urgent = {};
    this.normal = {};
    this.normalLoading = false;
    this.urgentLoading = false;
    this.premiumLoading = false;
    this.cartRoom = [];
    if (localStorage.getItem('cartNumber')) {
      this.cartNumber = Number(localStorage.getItem('cartNumber')!);
    } else {
      this.cartNumber = 0;
    }
    console.log('cartNumber in constructor:', this.cartNumber);
    this.cart = localStorage.getItem('cart');
this.imageUrl= environment.imageUrl


  }

  ngOnInit(): void {
    this.userService.getAllRoom().subscribe(
      (data:any)=>{
        this.rooms =data
        console.log("user dashbord",data)
      }
    )
    this.roomService.getByPremium().subscribe(
      (data: any) => {
        this.premium = data;
        this.premiumLoading = true;
        console.log('homepage categoriers', data);
      },
      (err: any) => {
        console.log('err', err);
      }
    );
    this.roomService.getByUrgent().subscribe(
      (data: any) => {
        this.urgentLoading = true;
        this.urgent = data;
        console.log('homepage categoriers', data);
      },
      (err: any) => {
        console.log('err', err);
      }
    );
    this.roomService.getByNormal().subscribe(
      (data: any) => {
        this.normalLoading = true;
        this.normal = data;
        console.log('homepage categoriers', data);
      },
      (err: any) => {
        console.log('err', err);
      }
    );

  }

  onAdd(){
    this.router.navigate(['/admin/room/addroom'])
      }

      book(id:string){
        this.bookingservice.addBookingRoom(id).subscribe(
          (data:any)=>{
          console.log('bookong data',data)
          },
          err=>{
            this.msgService.showErr(err.error.message)
            console.log('errrrrrrrr',err)
          }
        )
      }


      addTocart(room: any) {
        // console.log('cart:',this.cart)
        if (this.cart) {
          const roomsId = this.cart.split(', ');
          let check: boolean = true;
          for (let i = 0; i < roomsId.length; i++) {
            if (roomsId[i] == room._id) {
              check = false;
            }
          }
          if (check) {
            this.cart = this.cart + ', ' + room._id;
            // console.log('cart:',this.cart)
            this.cartNumber++;
            JSON.stringify(localStorage.setItem('cart', this.cart));
            // this.getCartId(localStorage.getItem('cart'));
          } else {
            this.msgService.showInfo('Youhave already added this room');
          }
        } else {
          // console.log('room:',room)
          this.cartNumber = 1;
          this.cart = room._id;
          // console.log("append cart:",this.cart)
          JSON.stringify(localStorage.setItem('cart', this.cart));
        }
        // const cartRooomssss = this.getCartId()
        // console.log('haha:',cartRooomssss)
        localStorage.setItem('cartNumber', String(this.cartNumber));
      }
      LogOut(){
        this.authService.removeToken();
        this.msgService.showSuccess('logOut Successful')
        this.router.navigate(['/main'])
        localStorage.clear()
      }

      Search(){
        if(this.address ==""){
          this.ngOnInit()
        }else{
          this.rooms =this.rooms.filter(res=>{
            return res.address.toLocaleLowerCase().match(this.address.toLocaleLowerCase());
          })
        }
      
      }


      customOptions: OwlOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        navSpeed: 700,
        navText: ['', ''],
        responsive: {
          0: {
            items: 1,
          },
          400: {
            items: 2,
          },
          740: {
            items: 3,
          },
          940: {
            items: 4,
          },
        
        },
        nav: true,
      };

}
