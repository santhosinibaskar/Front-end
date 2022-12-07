import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,Observer } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  baseUrl="http://localhost:8080/book"

  formData:Book = new Book();
 list: Book[] | undefined;
 constructor(public httpClient:HttpClient) { }

 refreshlist(){
   return this.httpClient.get(this.baseUrl).toPromise().then(res=> this.list = res as [])
 }

}