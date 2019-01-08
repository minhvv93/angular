import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingComponent } from '../profile/setting/setting.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot([
    ])
  ],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
