import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public isLoggedIn:boolean = false;
  
  
  constructor(
    private router: Router,
  ) { }

  IsLogged()
  {
    this.isLoggedIn = JSON.parse(localStorage.getItem("IsLoggedIn"));
    debugger
    if(!this.isLoggedIn)
    {
      this.router.navigate(['login']);
    }
  }

  ngOnInit(): void {
  }

}
