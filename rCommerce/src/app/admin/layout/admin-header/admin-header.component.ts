import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuardService } from 'src/app/shared/service/guard.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(public router:Router,
    public guardService:GuardService) { }

  ngOnInit(): void {
  }
  LogOut(){
    this.guardService.removeToken();
    this.router.navigate(['/adminauth/login'])
  }
}
