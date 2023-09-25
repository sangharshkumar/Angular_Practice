import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-rounting';
  private router: Router
  IsShowLogOut():boolean
  {
    if(JSON.parse(localStorage.getItem("IsLoggedIn"))==null)
    {
        return true;
    }
  }
  IsShowLogIn():boolean
  {
    if(JSON.parse(localStorage.getItem("IsLoggedIn"))==null)
    {
        return true;
    }
  }
  LogOut()
  {
    localStorage.removeItem("IsLoggedIn");
  }
}

