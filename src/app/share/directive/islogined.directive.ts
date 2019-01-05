import { Directive,ElementRef,Renderer,} from '@angular/core';
import {JwtService} from '../services/jwt.service';

@Directive({
  selector: '[appIslogined]'
})
export class IsloginedDirective {

  constructor(
    private jwt : JwtService,
    private el: ElementRef,
    private renderer : Renderer
    ) { 
  }
  user 
  ngOnInit() {
    this.checklogin();
  }
  getUser(){
    
  }
  checklogin(){
    if(this.jwt.gettoken() !== null){
      this.renderer.setElementStyle(this.el.nativeElement, 'display', 'block');
      console.log('user da login');
      
    }else{
      this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
      console.log('chua login');
      
    }
    this.jwt.dataService.subscribe(
      username => {
        this.user = username;
        console.log(this.user);
        this.renderer.setElementStyle(this.el.nativeElement, 'display', 'block');
          console.log('da log in is log');
          //window.location.reload();
          console.log('abc');
      } 
    )
  }


}
