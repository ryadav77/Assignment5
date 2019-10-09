import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { DataService } from '../data.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  books: Book[] = [];
  id: number;
  constructor(private svc: DataService) { }
  onClick(event) {
    this.svc.revid = event.target.id;
    console.log(this.svc.revid);
  }
  ngOnInit() {
    this.books = this.svc.books;
  }

}
