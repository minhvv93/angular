import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AppComponent} from './app.component'
import {HomeComponent} from './home/home/home.component'

@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    RouterModule.forRoot([
      // {
      //   path : '',
      //   redirectTo : 'HomeComponent' , pathMatch : 'full'
      // },
      {
        path : '',
        component : HomeComponent
      },
      // {
      //   path : 'root',
      //   component : AppComponent
      // }
    ])
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
