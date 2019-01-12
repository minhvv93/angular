import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { JwtService } from '../../share/services/jwt.service';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  info;
  profile;
  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();
  constructor(private api: ApiService, private jwt: JwtService, private router: Router) { }
  public async login(params) {
    this.info = await this.api.POST('/api/users/login', params);
    this.jwt.settoken(this.info.user.token);
    this.jwt.setuser(this.info.user.username);
    this.jwt.changeData(this.info.user.username);
    this.router.navigateByUrl('');

  }
  public async register(params) {
<<<<<<< HEAD
    this.info = await this.api.POST('/api/users', params);
    await this.jwt.settoken(this.info.user.token);
    await  this.jwt.setuser(this.info.user.username);
    await this.jwt.changeData(this.info.user.username);
    this.router.navigateByUrl('');
=======
   this.info =  await this.api.POST('/api/users', params);
   console.log(this.info);
   
    await this.jwt.settoken(this.info.user.token);
    await this.jwt.setuser(this.info.user.username);
    await this.jwt.changeData(this.info.user.username);
    this.router.navigateByUrl('');
    //this.router.navigateByUrl('/singin');
>>>>>>> b67738dc3390685899d548b09b349d8d3e29e8e0
  }
  public getuser() {
    return this.api.GET('/api/user');
  }
  public async updateuser(params) {
    return this.api.PUT('/api/user', params);
  }
}
