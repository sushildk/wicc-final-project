import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MsgService } from 'src/app/shared/service/msg.service';
import { environment } from 'src/environments/environment';
import { RoomService } from '../../service/room.service';
import{AuthService } from './../../../auth/service/auth.service'

@Component({
  selector: 'app-roomform',
  templateUrl: './roomform.component.html',
  styleUrls: ['./roomform.component.css']
})
export class RoomformComponent implements OnInit {
  room: any;
  url: string;
  fileToUpload =[];


  constructor(
    public router:Router,
    public msgService:MsgService,
    public roomservice:RoomService,
    public authService:AuthService,
    

  ) { 
    this.url=environment.baseUrl + '/room'
  }

  ngOnInit(): void {
  }
addRoomform = new FormGroup({
  address : new FormControl(null,[Validators.required]),
  numberOfRoom : new FormControl(null,[Validators.required]),
  price : new FormControl(null,[Validators.required]),
  description : new FormControl(null,[Validators.required]),
  phoneNumber : new FormControl(null,[Validators.required,Validators.minLength(10)]),
  categories : new FormControl(null,[Validators.required]),



})
get addRoomFormControl(){
  return this.addRoomform.controls;

}

onRegister(){
  if (this.addRoomform.valid){
    console.log("this is from room form" ,this.addRoomform.value)
    this.room = this.addRoomform.value

    // this.roomservice.addroom(this.room).subscribe(
    //   (data:any)=>{
    
    //   }
    // )
    this.roomservice.upload(this.room,this.fileToUpload,'POST',this.url).subscribe(
      (data:any)=>{
    this.addRoomform.reset();
        this.router.navigate(['/admin/room'])
        console.log("data on register",data)
      },
      (err)=>{
        console.log("error from form",err)
        this.msgService.showErr(err.error.message)
      }
    )

    this.msgService.showSuccess('Room Added')
  }
}

fileUpload(event:any){
this.fileToUpload = event.target.files
  console.log('eventttt',event.target.files)

}

}



