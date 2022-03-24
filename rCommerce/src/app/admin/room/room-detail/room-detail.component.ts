import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MsgService } from 'src/app/shared/service/msg.service';
import { RoomService } from '../../service/room.service';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {
  room: any;
  loading:boolean
  constructor(
    public roomService:RoomService,
    public activatedRoute: ActivatedRoute,
    public router:Router,
    public msgservice:MsgService

  ) { 

    this.loading=false
  }

  ngOnInit(): void {
    const roomDetail = this.activatedRoute.snapshot.params["id"]
     this.roomService.getById(roomDetail).subscribe(
       (data:any)=>{
         this.room =data
         this.loading=true;
         console.log("room detail",data)
       },
       err=>{
         console.log("errin room detail",err)
       }
     )

  }
  deleteUser(_id: string,i:number){
    const confirmRemove =confirm("Are You Sure You Want to Delete this Room")
    if(confirmRemove){
      this.roomService.removeRoom(_id).subscribe(
        (user:any)=>{
          this.msgservice.showSuccess('Deleted')
          // this.room.splice(i,1)
          this.router.navigate(["/admin/room"])
      
        },
        err=>{
          this.msgservice.showErr('Try Again')
        }
      )
    }
  }

}
 