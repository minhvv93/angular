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
  data;

  constructor(private router: Router, private jwt: JwtService, private User: UserService) {

  }

  user = this.jwt.getuser();

  ngOnInit() {
    this.jwt.dataService.subscribe(username=>this.user = username)
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
    this.router.navigateByUrl('seting')
  }
 public async profile() {
   this.router.navigateByUrl('profile')
    //this.data = await this.User.getuser()
    //console.log(this.data);
    
  }
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token')
    window.location.reload();
  }

}
