import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { UserComponent } from './component/user/user.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { ContactComponent } from './component/contact/contact.component';
import { ServicesComponent } from './component/services/services.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: '', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
      { path: 'user', component: UserComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'services', component: ServicesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
