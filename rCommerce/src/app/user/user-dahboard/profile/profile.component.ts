import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { MsgService } from 'src/app/shared/service/msg.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  data: any;
  userId:string;
  constructor(public router:Router,
    public userServ:UserService,
    public msgService:MsgService,
    public ActivatedRoute:ActivatedRoute,
    public authService:AuthService) { 
      this.userId = localStorage.getItem('userId')!
    }

  ngOnInit(): void {


    this.userServ.getById(this.userId).subscribe(
      (data:any)=>{
        this.user= data
        console.log('userProfie',data)
      }
      ),
      (err:any)=>{
        this.msgService.showErr(err)
        console.log('dataaaaerrrrrr',err)


      }

  }
  // onEdit(){

  //   this.router.navigate(["/user/userDasboard/editUser"])
  // }

}
