import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dieukien = true;

  constructor(private router : Router) { }

  ngOnInit() {
  }
  singin(){

    this.router.navigate(['/singin']);
  
  
    }
    singup(){
    this.router.navigate(["/singup"])
  
    }
    home(){
    this.router.navigateByUrl('')
    }
    newarticle(){
      this.router.navigate(["/newarticle"]);
    }
    setting(){
      alert("seting")
    }
    profile(){
      alert("profile")
    }

}
