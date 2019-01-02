import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

//import {ConfigService} from '../share/config/config.service'

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatProgressSpinnerModule
  ],
  exports : [HomeComponent],
  providers : []
})
export class HomeModule { }
