import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service'
import { JwtService } from '../../share/services/jwt.service'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  info;
  profile;
  constructor(private api: ApiService, private jwt: JwtService, private router: Router) { }
  public async login(params) {
    return await this.api.POST("/api/users/login", params).then((responce) => {
      this.info = responce;
      //console.log(this.info.user.username);
      this.jwt.settoken(this.info.user.token);
      this.jwt.setuser(this.info.user.username);
      this.jwt.changeData(this.info.user.username)
      this.router.navigateByUrl("")
    })
  }
  public async register(params) {
    return await this.api.POST("/api/users", params).then(() => {
      this.router.navigateByUrl("/singin")
    })
  }
  public getuser() {
    return this.api.GET("/api/user")
    // .subscribe(response=>{
    //   this.profile = response;
    //   //console.log(this.profile);

    // });
  }
  // username ;
  // changeData(dataChild){
  //   this.username = dataChild
  //   //console.log(this.username);
  //   this.dataService.emit(this.username);
  // }

}
