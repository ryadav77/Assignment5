import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Review } from '../review';

@Component({
  selector: 'app-viewreview',
  templateUrl: './viewreview.component.html',
  styleUrls: ['./viewreview.component.css']
})
export class ViewreviewComponent implements OnInit {

  reviews:Review[]=[];
  idnum:number=0;

  constructor(private svc :DataService) { }

  ngOnInit() {
    this.reviews=this.svc.reviews;
    this.idnum=this.svc.revid;
  }

}
