import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { Router } from '@angular/router'
import { UserService } from '../../services/user.service'
import { JwtService } from '../../services/jwt.service'
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  data;

  constructor(private router: Router, private jwt: JwtService, private http: HttpClient , private api : ApiService) {

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
    localStorage.removeItem('slug')
    this.router.navigate(["/newarticle"]);
    window.location.reload();
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
    this.router.navigateByUrl('')
    window.location.reload();
  }
 // httpOptions: object;
 header;
  public gethttpoptions() {
    if (localStorage.getItem('token') == null) {
      return this.header = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }
    } else {
      return this.header = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token')
        })
      }
    }
  }
  public async GETParam() {
      this.api.getparams();
  }

}
