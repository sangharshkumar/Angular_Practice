import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public isLoggedIn: boolean = false;
  public userDetails: any;
  public FullName: string;

  constructor(private router: Router) {}

  // IsLogged()
  // {
  //   this.isLoggedIn = JSON.parse(localStorage.getItem("IsLoggedIn"));
  //   if(!this.isLoggedIn)
  //   {
  //     this.router.navigate(['login']);
  //   }
  //   else
  //   {
  //     this.userDetails = JSON.parse(localStorage.getItem("CurrentUser"));
  //     this.FullName = this.userDetails.fname;
  //   }
  // }
  // IsShowLogOut():boolean
  // {
  //   if(JSON.parse(localStorage.getItem("IsLoggedIn"))==null)
  //   {
  //       return true;
  //   }
  // }
  // IsShowLogIn():boolean
  // {
  //   if(JSON.parse(localStorage.getItem("IsLoggedIn"))==null)
  //   {
  //       return true;
  //   }
  // }
  // LogOut()
  // {
  //   localStorage.removeItem("IsLoggedIn");
  // }
  ngOnInit(): void {
    debugger;
  }
}
