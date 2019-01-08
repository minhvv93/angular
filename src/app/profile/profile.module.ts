import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { SettingComponent } from './setting/setting.component';
import { MatTabsModule } from '@angular/material';


@NgModule({
  declarations: [MyprofileComponent, SettingComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule
  ]
})
export class ProfileModule { }
