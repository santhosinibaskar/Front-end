import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { RegisterUserComponent } from './register-user/register-user.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { DonateComponent } from './donate/donate.component';
import { EndComponent } from './end/end.component';


const routes: Routes = [
  {path:'register-user',component:RegisterUserComponent},
  
  
  {path:'login',component:LoginComponent},

  {path:'book',component:BookComponent},
  {path:'',component:HomeComponent},
  {path:'category',component:CategoryComponent},
  {path:'donate',component:DonateComponent},
  {path:'end',component:EndComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
