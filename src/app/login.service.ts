import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,Observer } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  baseUrl="http://localhost:8080/login"
  constructor(private httpClient:HttpClient) { }

  loginUser(user:User):Observable<object>{
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}`,user);

  }
}
