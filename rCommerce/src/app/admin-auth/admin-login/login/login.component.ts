import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/service/admin.service';
import { AuthService } from 'src/app/auth/service/auth.service';
import { GuardService } from 'src/app/shared/service/guard.service';
import { MsgService } from 'src/app/shared/service/msg.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;

  constructor(public router:Router,
    public guardService:GuardService,
    public authServ:AuthService,
    public toastr:MsgService) { }

  ngOnInit(): void {
  }
  signUpForm= new FormGroup({



    Email : new FormControl(null,[Validators.required, Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.minLength(6)]),
    })
    

    
    get signUpFormControl(){
    return this.signUpForm.controls;
    }

  onsubmit() {
   

    if (this.signUpForm.valid) {

        console.log(this.signUpForm.value);
        this.user =this.signUpForm.value
        
        this.authServ.login(this.user)
        .subscribe(
          (data: any) => {
            if(data.user.role==="admin"){
              console.log('dataaaa>', data);
            localStorage.setItem('role',data.user.role)
        this.authServ.saveToken(data.token);
        this.toastr.showSuccess('Login Successful');
          
            /* Check for role condition (data.role ma  aauxa) */
            this.signUpForm.reset();
            this.router.navigate(['admin/adminDashboard']);


          
            }else{
              this.toastr.showErr('You are not allowed to access this page')
              this.router.navigate(['/main'])
            }

            
          }),
          ( err: any) => {
            this.toastr.showErr(err);
          }
      // }
      
      // else{
      //   this.toastr.showErr('You Can Not Access This !!!')
      // }
      
      
      // localStorage.setItem('token',this.signUpForm.value.Email)
      // this.toastr.showInfo('success');
    
  
    } else {
      console.log('invalid input');
    }
  }
}
