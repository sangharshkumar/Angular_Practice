import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { UserComponent } from './component/user/user.component';
import { AboutComponent } from './component/about/about.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'admin',component:HomeComponent},
  // {path:'admin/home',component:HomeComponent},
  // {path:'admin/about',component:AboutComponent},
  // {path:'admin/user',component:UserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
