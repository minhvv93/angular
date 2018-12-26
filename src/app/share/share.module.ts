import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
//import {ConfigService} from './config/config.service'

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports : [HeaderComponent,FooterComponent],
  providers : []
})
export class ShareModule { }
