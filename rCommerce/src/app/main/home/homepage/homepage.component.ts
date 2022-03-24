import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { RoomService } from 'src/app/admin/service/room.service';
import { MsgService } from 'src/app/shared/service/msg.service';
import { UserService } from 'src/app/user/service/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  rooms: any;
  premium: any;
  urgent: any;
  normal: any;
  normalLoading: boolean;
  urgentLoading: boolean;
  premiumLoading: boolean;
  cart: any;
  cartRoom: any;
  cartNumber: number;
  imageUrl: string;

  constructor(
    public roomService: RoomService,
    public router: Router,
    public msgService: MsgService,
    public userService: UserService
  ) {
    this.rooms = {};
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

    this.imageUrl = environment.imageUrl
  }

  ngOnInit(): void {
   
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

  // getCartId(){
  //   const data = (localStorage.getItem('cart'))
  //   if(data){
  //     const roomsId = data.split(', ');
  //     console.log('roomssId:',roomsId)
  //    for(let i=0;i<roomsId.length;i++){
  //     this.roomService.getById(roomsId[i]).subscribe(
  //       (data:any)=>{
  //         this.cartRoom.push(data)
  //       }

  //     ),(err:any)=>{
  //      console.log('err',err)
  //     }
  //    }
  //   }else{
  //     this.msgService.showInfo('You have not addedroom to your cart')
  //   }

  // return this.cartRoom
  // }

  booking() {
    this.router.navigate(['/auth/register']);
    this.msgService.showInfo('You Have TO Register! ');
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
