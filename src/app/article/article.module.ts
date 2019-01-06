import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleRoutingModule } from './article-routing.module';
import { ListComponent } from './list/list.component';
//import { DetailComponent } from './detail/detail.component';
import { NewarticleComponent } from './newarticle/newarticle.component';
import { MatTabsModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ListComponent, NewarticleComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule
  ]
})
export class ArticleModule { }
