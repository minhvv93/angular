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
      
    }else{
      this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
      
    }
    this.jwt.dataService.subscribe(
      username => {
        this.user = username;
        this.renderer.setElementStyle(this.el.nativeElement, 'display', 'block');
      } 
    )
  }


}
