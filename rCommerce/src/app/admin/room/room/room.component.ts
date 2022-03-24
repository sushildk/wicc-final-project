import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsgService } from 'src/app/shared/service/msg.service';
import { UserService } from 'src/app/user/service/user.service';
import { environment } from 'src/environments/environment';
import { Rooms } from '../../interface/roomSearch';
import { RoomService } from '../../service/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  
  rooms: Rooms[] =[];
  address:any
  loading:boolean
  imageUrl:string
  constructor(
    public router:Router,
    public userService:UserService,
    public roomService:RoomService,
    public msgService :MsgService


  ) { 
    this.loading = false;
    this.imageUrl= environment.imageUrl
  }

  ngOnInit(): void {
    this.userService.getAllRoom().subscribe(
      (data:any)=>{
        this.rooms =data;
        this.loading=true;
        console.log("dataFrom room",data)
      }
    )
  }

  deleteUser(_id: string,i:number){
    const confirmRemove =confirm("Are You Sure You Want to Delete this Room")
    if(confirmRemove){
      this.roomService.removeRoom(_id).subscribe(
        (user:any)=>{
          this.msgService.showSuccess('Deleted')
          this.rooms.splice(i,1)
          this.loading=true
      
        },
        err=>{
          this.msgService.showErr('Try Again')
        }
      )
    }
  }
  ADDroom(){
    this.router.navigate(['/admin/room/addroom'])
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




}
