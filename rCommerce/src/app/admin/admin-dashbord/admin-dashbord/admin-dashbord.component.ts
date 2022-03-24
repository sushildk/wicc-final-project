import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/model/usermodel';
import { GuardService } from 'src/app/shared/service/guard.service';
import { MsgService } from 'src/app/shared/service/msg.service';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-admin-dashbord',
  templateUrl: './admin-dashbord.component.html',
  styleUrls: ['./admin-dashbord.component.css']
})
export class AdminDashbordComponent implements OnInit {
  users: User[] =[];
  firstName:any
  p :number =1;

  constructor(public adminserv:AdminService,
    public msgService:MsgService) { }

  ngOnInit(): void {
    this.adminserv.getAllUser().subscribe(
      (data:any)=>{
        this.users =data;
        console.log('data dash',data)
      }
    ),
    (err:any)=>{
      console.log(err)
    }
  }

  deleteUser(id:string,i:number){
 const confirmRemove = confirm("Are you sure You Want To Delete This User")
if(confirmRemove){
  this.adminserv.removeUser(id).subscribe(
    (user:any)=>{
      this.msgService.showSuccess('Deleted')
      this.users.splice(i,1)
    },
    err=>{
      this.msgService.showErr('Try again')
    }
  )
}

}
Search(){
  if(this.firstName ==""){
    this.ngOnInit()
  }else{
    this.users = this.users.filter(res=>{
      
     return  res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      //  res.lastName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      //  res.phoneNumber.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      //  res.Email.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());



    });
  }
}

}
