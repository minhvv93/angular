import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingupComponent } from './singup/singup.component';
import { SinginComponent } from './singin/singin.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { LogRoutingModule } from './log-routing.module';

@NgModule({
  declarations: [SingupComponent, SinginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LogRoutingModule
  ],
  exports : [
    SinginComponent,
    SingupComponent]
})
export class LoginModule { }
