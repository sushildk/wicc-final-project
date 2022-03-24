import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/auth/model/usermodel';
import { AuthService } from 'src/app/auth/service/auth.service';
import { MsgService } from 'src/app/shared/service/msg.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  user: any;


  constructor(
    public router:Router,
    public authService:AuthService,
    public msgService:MsgService,
    public activatedRoute:ActivatedRoute,
    public userService:UserService
  ) { 
    this.user =new User({})

  }

  ngOnInit(): void {
    const userId = this.activatedRoute.snapshot.params["id"]
    this.userService.getById(userId).subscribe(
      (data:any)=>{
        this.user = data
        console.log('dataaaa',data)
      },
      err=>{
        this.msgService.showErr(err)
        console.log('dataaaaerrrrrr',err)


      }
    )

  }



signUpForm= new FormGroup({

firstName: new FormControl(''),
lastName: new FormControl(''),



Email : new FormControl(null ,[Validators.email]),
address :new FormControl(null,),
phoneNumber: new FormControl(null ,[Validators.minLength(10)]),
gender : new FormControl(null)
})

get signUpFormControl(){
return this.signUpForm.controls;
}
onedit(){
  console.log("datataaaaa",this.user)

this.userService.editUser(this.user._id,this.signUpForm.value).subscribe(
  (data)=>{
    this.msgService.showSuccess('Updated')
    if(this.user.role=='admin'){
      
      this.router.navigate(["/admin/adminDashboard"])
    }
    else{
      this.router.navigate(['/user/userDasboard/profile'])
    }
  },
  err=>{
    this.msgService.showErr(err)
  }
)


}

}
