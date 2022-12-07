import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterUserComponent } from './register-user/register-user.component';


import { LoginComponent } from './login/login.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { DonateComponent } from './donate/donate.component';
import { EndComponent } from './end/end.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterUserComponent,
    LoginComponent,
    BookComponent,
    HomeComponent,
    CategoryComponent,
    DonateComponent,
    EndComponent,
   
  ],
  imports: [
    BrowserModule,
    
    FormsModule,
    HttpClientModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
