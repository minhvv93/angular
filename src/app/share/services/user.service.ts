import { Injectable, Output,EventEmitter } from '@angular/core';
import { ApiService } from '../services/api.service'
import {JwtService} from '../../share/services/jwt.service'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  @Output() dataService = new EventEmitter();
  info

  constructor(private api : ApiService , private jwt : JwtService, private router : Router) { }
  public async login(params){
    return  this.api.POST("/api/users/login", params).then((responce)=>{
      this.info = responce;
      //console.log(this.info.user.username);
      this.jwt.settoken(this.info.user.token);
      this.jwt.setuser(this.info.user.username);
      this.changeData(this.info.user.username)
      this.router.navigateByUrl("")
    })
  }
  public async register(params){
      return await this.api.POST("/api/users",params)
  }
  username ;
  changeData(dataChild){
    this.username = dataChild
    //console.log(this.username);
    this.dataService.emit(this.username);
  }

}
