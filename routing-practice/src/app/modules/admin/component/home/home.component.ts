import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isLoggedIn:boolean = false;
  public userDetails:any;
  public FullName?:string;
  
  
  constructor(
    private router: Router,
  ) { }

  IsLogged()
  {
    this.isLoggedIn = JSON.parse(localStorage.getItem("IsLoggedIn") as any);
    if(!this.isLoggedIn)
    {
      this.router.navigate(['login']);
    }
    else
    {
      debugger
      this.userDetails = JSON.parse(localStorage.getItem("CurrentUser") as any);
      this.FullName = this.userDetails.fname;
    }
  }
  ngOnInit(): void {
    
  }

}
