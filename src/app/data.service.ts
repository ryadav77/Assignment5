import { Injectable } from '@angular/core';
import { Book } from './book';
import { Review } from './review';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  books: Book[] = [];
  id: number = 1;
  revid: number=100;
  z:Review;
  reviews: Review[]=[];
  singlereview: string;
  constructor() { }
  create(b: Book) {
    b.id = this.id;
    ++this.id;
    this.books.push(b);
  }
  creater(z) {
    console.log(this.revid);
    z.id = this.revid;
    z.review = this.singlereview;
    console.log(this.reviews);
    this.reviews.push(z);
  }
}