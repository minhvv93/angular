import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service'
import { JwtService } from '../../share/services/jwt.service'
import { Router } from '@angular/router';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();
  info;
  profile;
  constructor(private api: ApiService, private jwt: JwtService, private router: Router) { }
  public async login(params) {
    this.info = await this.api.POST("/api/users/login", params);
      this.jwt.settoken(this.info.user.token);
      this.jwt.setuser(this.info.user.username);
      this.jwt.changeData(this.info.user.username)
      this.router.navigateByUrl("")
    
  }
  public async register(params) {
     await this.api.POST("/api/users", params);
      this.router.navigateByUrl("/singin")
  }
  public getuser() {
  return this.api.GET("/api/user")
  }
  public async updateuser(params){
    return this.api.PUT("/api/user",params)
  }
}
