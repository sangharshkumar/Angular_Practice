import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'',
    component:LoginpageComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'signup',
    component:SignUpPageComponent
  },
  {
    path:'login',
    component:LoginpageComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
