import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MsgService } from 'src/app/shared/service/msg.service';
import { UserService } from 'src/app/user/service/user.service';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId: string;
  user: any;
  loading:boolean

  constructor(
    public router:Router,
    public userService:UserService,
    public activatedroute:ActivatedRoute,
    public msgservice:MsgService,
    public adminserv:AdminService


  ) { 
    this.userId =localStorage.getItem('userId')!
    this.loading=false
  }

  ngOnInit(): void {
const userDetail =this.activatedroute.snapshot.params["id"]
    this.userService.getById(userDetail).subscribe(
      (data:any)=>{
        this.user =data
        this.loading=true
      }
    ),
    (err:any)=>{
      this.msgservice.showErr(err)
  }

  }
  

  deleteUser(id:string,i:number){
    const confirmRemove = confirm("Are you sure You Want To Delete This User")
   if(confirmRemove){
     this.adminserv.removeUser(id).subscribe(
       (user:any)=>{
         this.msgservice.showSuccess('Deleted')
         this.user.splice(i,1)
       },
       err=>{
         this.msgservice.showErr('Try again')
       }
     )
   }
   
   }

}
