import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Review } from '../review';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  bing:string;
  r:Review;
  id:number=0;
  review:string="";
  constructor( private svc:DataService) { }
  Adding(){
    this.svc.singlereview=this.bing;
    this.r= new Review(this.id,this.review);
    this.svc.creater(this.r);
    
  }
  ngOnInit() {
  }

}
