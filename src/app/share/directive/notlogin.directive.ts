import { Directive, HostListener, Renderer, ElementRef } from '@angular/core';
import { Router } from '@angular/router'
import { JwtService } from '../services/jwt.service';

@Directive({
  selector: '[appNotlogin]'
})
export class NotloginDirective {
  user = null;
  constructor(private router: Router, private jwt: JwtService, private renderer: Renderer, private el: ElementRef) {
    //this.checklogin();
  }
  ngOnInit() {
    this.checklogin();
  }
  checklogin() {
    if (this.jwt.gettoken() !== null) {
      this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
      console.log('user da login');
    } else {
      console.log('chua login');
      this.renderer.setElementStyle(this.el.nativeElement, 'display', 'block');

    }
    this.jwt.dataService.subscribe(
      username => {
        this.user = username;
        this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
        console.log('da log in roi is not');
      }
    )
  }


}
