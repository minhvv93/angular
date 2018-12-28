import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private router: Router, private apiservice: ApiService) { }

  dieukien = true;
  user = localStorage.getItem('user');

  ngOnInit() {
    this.checklogin();
    localStorage.removeItem('user')

  }
  async checklogin() {
    this.apiservice.dataService.subscribe(username => {
      this.user = username;
      //console.log(this.user);
      if (this.user == null) {
        this.dieukien = true;
      } else {
        this.dieukien = false;
      }

    })
  }

  singin() {
    this.router.navigate(['/singin']);
  }
  singup() {
    this.router.navigate(["/singup"])

  }
  home() {
    this.router.navigateByUrl('')
  }
  newarticle() {
    this.router.navigate(["/newarticle"]);
  }
  setting() {
    alert("seting")
  }
  profile() {
    alert("profile")
  }

}
