import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { Router } from '@angular/router'
import { UserService } from '../../services/user.service'
import { JwtService } from '../../services/jwt.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //@Output() dataService = new EventEmitter();
  data;

  constructor(private router: Router, private jwt: JwtService, private User: UserService) {

  }

  dieukien = true;
  user = localStorage.getItem('user');
  //user;

  ngOnInit() {
    this.checklogin();
  }
  public checklogin() {
    //console.log(this.user);
    if (this.user !== null) {
      this.dieukien = false;
    }
    this.jwt.dataService.subscribe(username => {
      this.user = username;
      //this.user = localStorage.getItem('user');
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
    this.User.getuser()
      .subscribe(respone => {
        this.data = respone;
        console.log(this.data);

      });
  }
  logout() {
    localStorage.removeItem('user');
    window.location.reload();
  }

}
