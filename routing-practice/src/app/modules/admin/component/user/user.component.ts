import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   userId:any;
   public isLoggedIn:boolean = false;
   public userDetails:any;
   public FName?:string;
   public LName?:string;
   public Email?:string;
   public phone?:string;
  
   constructor(
     private router: Router,
   ) { }
    
   IsLogged()
   {
     this.isLoggedIn = JSON.parse(localStorage.getItem("IsLoggedIn") as any);
     debugger
     if(!this.isLoggedIn)
     {
       this.router.navigate(['login']);
     }
     else
    {
      debugger
      this.userDetails = JSON.parse(localStorage.getItem("CurrentUser") as any);
      this.FName = this.userDetails.fname;
      this.LName = this.userDetails.lname;
      this.Email = this.userDetails.email;
      this.phone = this.userDetails.phone;
    }
   }
  ngOnInit(): void {
  }

}
