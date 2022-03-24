import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/app/admin/service/room.service';

@Component({
  selector: 'app-room-detai',
  templateUrl: './room-detai.component.html',
  styleUrls: ['./room-detai.component.css']
})
export class RoomDetaiComponent implements OnInit {
  room: any;

  constructor(
    public roomService:RoomService,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const roomDetail = this.activatedRoute.snapshot.params["id"]
     this.roomService.getById(roomDetail).subscribe(
       (data:any)=>{
         this.room =data
         console.log("room detail",data)
       },
       err=>{
         console.log("errin room detail",err)
       }
     )

  }


}
