import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import {DataService} from '../data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  id: number;
  author: string;
  title: string;
  price: number;
  newbook:Book;
  constructor(private svc:DataService){}
  ngOnInit(){}
  createBook(){
    this.newbook=new Book(this.id,this.author,this.title,this.price);
    this.svc.create(this.newbook);
  }
  
}
