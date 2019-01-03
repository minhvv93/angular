import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AppComponent} from './app.component'
import {HomeComponent} from './home/home/home.component'
import {HeaderComponent} from './share/layout/header/header.component'

@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    RouterModule.forRoot([
      {
        path : '',
        component : HomeComponent
      },
    ])
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
