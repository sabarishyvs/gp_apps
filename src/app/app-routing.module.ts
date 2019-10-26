import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {UserComponent} from './user/user.component';
import {AdminComponent} from './admin/admin.component';


const routes: Routes = [
  {path:"login", component:LoginComponent},
{path:"user", component:UserComponent},
{path:"admin", component:AdminComponent},
{ path: '**', component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }export const 
RoutingComponent = [LoginComponent,UserComponent,AdminComponent ];
