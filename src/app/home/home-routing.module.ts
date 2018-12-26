import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
    ])
  ],
  exports : [RouterModule]
})
export class HomeRoutingModule { }
