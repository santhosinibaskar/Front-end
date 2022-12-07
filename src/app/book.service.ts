import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,Observer } from 'rxjs';
import { Book } from './book';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class BookService {
   baseUrl="http://localhost:8080/book"

   formData:Book = new Book();
  
  constructor(private httpClient:HttpClient) { }


  bookUser(user:Book):Observable<object>{
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}`,user);

  }
  
}
