import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
    private auth: AuthService,
    private router: Router, 
  ) { }
  public message:boolean=false;
  public noAccount:boolean=false;
  LoginUser()
  {
    // if (this.LoginForm.valid) {
    //   this.auth.login(this.LoginForm.value).subscribe(
    //     (result) => {
    //       console.log(result);
    //       this.router.navigate(['/admin']);
    //     },
    //     (err: Error) => {
    //       alert(err.message);
    //     }
    //   );
    // }
    var user = this.LoginForm.value;
    var localuserdata = JSON.parse(localStorage.getItem("UserDetails"));
    var UserDetails = localuserdata.find((c) => c.email=== user.email);
    if( JSON.parse(localStorage.getItem("UserDetails")) == null)
    {
      this.noAccount = true;
    }
    if(UserDetails.email == user.email && UserDetails.password == user.password)
    {
      debugger
      localStorage.setItem("IsLoggedIn",JSON.stringify(true));
      localStorage.setItem("CurrentUser",JSON.stringify(UserDetails));
      this.router.navigate(['/admin']);
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

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/admin']);
    }
  }

}
