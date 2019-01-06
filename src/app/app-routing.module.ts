import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AppComponent} from './app.component'
import {ListComponent} from './article/list/list.component';
import {HeaderComponent} from './share/layout/header/header.component'
import {NewarticleComponent} from './article/newarticle/newarticle.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ListComponent
      },
      {
        path : 'newarticle',
        component : NewarticleComponent
      }
    ])
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
