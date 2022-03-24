import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from 'src/app/admin/service/room.service';
import { AuthService } from 'src/app/auth/service/auth.service';
import { MsgService } from 'src/app/shared/service/msg.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  rooms: any;
  cartRoom: any;
  loading: boolean;
  cartNumber: number = 0;
  constructor(
    public roomService: RoomService,
    public msgService: MsgService,
    public router: Router,
    public authService: AuthService
  ) {
    this.rooms = [];
    this.loading = false;

    this.cartNumber = Number(localStorage.getItem('cartNumber')!);
    console.log(
      'cart number in constructorrrrrrrrrrrrrrr::::::::::::;',
      this.cartNumber
    );
  }

  ngOnInit(): void {
    const data = localStorage.getItem('cart');
    if (data) {
      const roomsId = data.split(', ');
      roomsId.forEach((element) => {
        this.roomService.getById(element).subscribe((data: any) => {
          this.rooms.push(data);
        }),
          (err: any) => {
            console.log('err', err);
          };
        this.loading = true;
      });
    } else {
      this.msgService.showInfo('You have not addedroom to your cart');
    }

    console.log('rooms in cartcomponent;', this.rooms);
  }

  homecart() {
    if (!this.authService.checkToken()) {
      this.router.navigate(['/auth/register']);
      this.msgService.showInfo('You Have To Register Fist');
    } else {
      this.router.navigate(['/user/userDasboard/checkout']);
    }
  }

  removeRoomWithoutRefresh(roomId: string) {
    this.rooms.forEach((element: { _id: string }, index: number) => {
      if (element._id === roomId) {
        this.rooms.splice(index, 1);
      }
    });
  }

  removeCartRoom(roomId: string) {
    let saveCart = ''; /* Assigning empty string for cart rooms */
    const x =
      localStorage.getItem('cart')!; /* Getting cart room from local storage */
    const roomsId =
      x.split(
        ', '
      ); /* Local storage ma bhako data string ma hunxa teslai split garera arraymarakheko */
    //  console.log('rooms id in remove after split:',roomsId);
    roomsId.forEach((element) => {
      if (element == roomId) {
        /* checking each cart room id with room id that need to be delete */
        this.removeRoomWithoutRefresh(
          element
        ); /* calling function to remove room on UI without refreshing page  */
        // roomsId.splice(i,1)
        // console.log('splice element:',element)
      } else {
        if (saveCart) {
          /* check if saveCart is empty or not */
          saveCart =
            saveCart +
            ', ' +
            element; /* if not empty save one room id on save cart separated by , and spac */
        } else {
          saveCart = element;
        }
        // console.log('save cart:',saveCart)
      }
    });
    // console.log('last save cart',saveCart)
    if (this.cartNumber === 0) {
      localStorage.setItem('cartNumber', '0');
    } else {
      this.cartNumber = this.cartNumber - 1;
      console.log('cartNumber::::::', this.cartNumber);
      localStorage.setItem('cartNumber', String(this.cartNumber));
    }
    localStorage.setItem('cart', saveCart);
  }
}
