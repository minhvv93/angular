import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HomeComponent} from './home/home/home.component'

@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    RouterModule.forRoot([
      {
        path : '',
        component : HomeComponent
      }
    ])
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }