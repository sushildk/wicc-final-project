import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public router :Router
  ) { }

  ngOnInit(): void {
  }
  login(){
    this.router.navigate(['/auth/login'])
  }
  register(){
    this.router.navigate(['/auth/register'])
  }
}
