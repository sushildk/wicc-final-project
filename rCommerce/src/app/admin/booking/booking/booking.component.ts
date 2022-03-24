import { Component, OnInit } from '@angular/core';
import { MsgService } from 'src/app/shared/service/msg.service';
import { BookingService } from 'src/app/user/service/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookedRoom: any;

  constructor(
    public bookingService:BookingService,
    public msgService:MsgService 
    ) { }

  ngOnInit(): void {
    this.bookingService.getAllBooking().subscribe(
      (data:any)=>{
        this.bookedRoom =data
        console.log("all book detail",this.bookedRoom)

      },
      err=>{
        console.log('errr from booking',err)
      }
      
    )

  }
  deleteReq(id:string){
    this.bookingService.deleteBook().subscribe(
      (data)=>{
        console.log('deleted',data)
      },
      err=>{
        this.msgService.showErr(err.error.message)
      }
    )

  }

}
