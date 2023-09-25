import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  LoginForm = new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
  })
  
  constructor(
    private router: Router, 
  ) { }
  public message:boolean=false;
  public noAccount:boolean=false;
  LoginUser()
  {
    var user = this.LoginForm.value;
    var localuserdata = JSON.parse(localStorage.getItem("UserDetails"));
    var UserDetails = localuserdata.find((c) => c.email=== user.email);
    if( JSON.parse(localStorage.getItem("UserDetails")) == null)
    {
      this.noAccount = true;
    }
    if(UserDetails.email == user.email && UserDetails.password == user.password)
    {
      localStorage.setItem("IsLoggedIn",JSON.stringify(true));
      localStorage.setItem("CurrentUser",JSON.stringify(UserDetails));
      this.router.navigate(['home']);
    }
    else
    {
      this.message= true;
    }
  }
  get userEmail()
  {
    return this.LoginForm.get('email');
  }
  
  get userPassword()
  {
    return this.LoginForm.get('password');
  }
  NavigateToRegistration()
  {
    debugger
    this.router.navigate(['signup']);
  }

  ngOnInit(): void {
  }

}
