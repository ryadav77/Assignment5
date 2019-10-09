import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AddComponent} from './add/add.component';
import {ListComponent} from './list/list.component';
import { ReviewComponent } from './review/review.component';
import { ViewreviewComponent } from './viewreview/viewreview.component';
const routes: Routes = [
  {path:'',pathMatch:'full',component:HomeComponent},
  {path:'add',pathMatch:'full',component:AddComponent},
  {path:'list',pathMatch:'full',component:ListComponent},
  {path:'review',pathMatch:'full',component:ReviewComponent},
  {path: 'viewreview',pathMatch:'full',component:ViewreviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
