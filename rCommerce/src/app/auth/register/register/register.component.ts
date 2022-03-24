import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MsgService } from 'src/app/shared/service/msg.service';
import { User } from '../../model/usermodel';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any;


  constructor(
    public router:Router,
    public authService:AuthService,
    public msgService:MsgService
  ) { 
    this.user =new User({})

  }

  ngOnInit(): void {
  }



  




signUpForm= new FormGroup({

firstName: new FormControl('',[Validators.required]),
lastName: new FormControl('',[Validators.required]),



Email : new FormControl(null,[Validators.required, Validators.email]),
address :new FormControl(null, [Validators.required]),
phoneNumber: new FormControl(null , [Validators.required,Validators.minLength(10)]),
password: new FormControl(null,[Validators.required,Validators.minLength(6)]),
gender : new FormControl(null, Validators.required)
})

get signUpFormControl(){
return this.signUpForm.controls;
}




onRegister(){
  if(this.signUpForm.valid){
  // console.log(this.signUpForm.value)
  this.user = this.signUpForm.value
// console.log('dataaaaaaa',this.user)
   this.authService.register(this.user)
   .subscribe(
   (data:any)=>{
    //  console.log('asdasdfasd',data)
 localStorage.setItem('role',data.user.role)
 localStorage.setItem('userId',data.user._id);
  this.authService.saveToken(data.token)
   this.msgService.showSuccess('register SuccessFull')
  this.signUpForm.reset();

  this.router.navigate(['/user/userDasboard'])
   },
   (err:any)=>{
  
  this.msgService.showErr(err.error.message)
  })
  }
  else{
  console.log('invalid input')
  }
  }
}
