import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

import { NgForm } from '@angular/forms';
import { BookService } from '../book.service';
import { User } from '../user';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book:Book=new Book();

  constructor(public bookservice:BookService) { }

  ngOnInit(): void {
  }

  resetform(form: NgForm) {
    form.form.reset();
    this.bookservice.formData = new Book();
  } 
  userBook(){
    console.log(this.book);
    this.bookservice.bookUser(this.book).subscribe(data=>
      {
      alert("Successfully Book is Stored")
      },error=>alert("Oops!Book not Stored"));
  }

}
