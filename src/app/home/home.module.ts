import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  exports : [HomeComponent],
  providers : []
})
export class HomeModule { }
