import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
    signupForm = new FormGroup({
    fname:new FormControl('',[Validators.required]),
    lname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    phone:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
  })
  constructor(
    private router: Router,
  ) { 
    
  }
  signUpUser()
  {
    // var UserDetails = localStorage.getItem("UserDetails") ? JSON.parse(localStorage.getItem("UserDetails")) : [];
    var UserDetails = localStorage.getItem("UserDetails") ? JSON.parse(localStorage.getItem("UserDetails") as any) : [];
    UserDetails.push(this.signupForm.value);
    if(localStorage){
      localStorage.setItem("UserDetails",JSON.stringify(UserDetails))
    }
   
    this.router.navigate(['login']);
  }
  get userFirstName()
  {
    return this.signupForm.get('fname');
  }
  get userLastName()
  {
    return this.signupForm.get('lname');
  }
  get userEmail()
  {
    return this.signupForm.get('email');
  }
  
  get userPhone()
  {
    return this.signupForm.get('phone');
  }
  get userPassword()
  {
    return this.signupForm.get('password');
  }
  ngOnInit(): void {
  }

}
