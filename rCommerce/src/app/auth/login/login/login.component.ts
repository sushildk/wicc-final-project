import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MsgService } from 'src/app/shared/service/msg.service';
import { SpinnerService } from 'src/app/shared/service/spinner.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: any;
  constructor(
    public router: Router,
    public authservice: AuthService,
    public toastr: MsgService,
  ) {}

  ngOnInit(): void {}

  signUpForm = new FormGroup({
    Email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  get signUpFormControl() {
    return this.signUpForm.controls;
  }

  onsubmit() {
   

    if (this.signUpForm.valid) {
      // console.log(this.signUpForm.value);
      this.user =this.signUpForm.value
      
      this.authservice.login(this.user)
      .subscribe(
        (data: any) =>{
          console.log('dataaaa>', data);
      localStorage.setItem('role',data.user.role)
      localStorage.setItem('userId',data.user._id);
      this.authservice.saveToken(data.token);
      this.toastr.showSuccess('Login Successful');
        
          /* Check for role condition (data.role ma  aauxa) */
          this.signUpForm.reset();
          this.router.navigate(['/user/userDasboard']);
        },
        err=>{
          this.toastr.showErr(err.error.message);
          // console.log('i am errr',err)
        
        }
      )
        
  
     
      
      
      // localStorage.setItem('token',this.signUpForm.value.Email)
      // this.toastr.showInfo('success');
    
  
    } else {
      console.log('invalid input');
    }
  }


}
