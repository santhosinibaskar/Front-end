import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  
  user:User=new User();

  constructor(private loginservice:LoginService) { }

  ngOnInit(): void {
    
  }

  userLogin(){
    console.log(this.user);
    
    this.loginservice.loginUser(this.user).subscribe(data=>
      {
      alert("Successfully Logged-In");
      
      },error=>alert("Oops!!! Login failed"));
  }
  

}
