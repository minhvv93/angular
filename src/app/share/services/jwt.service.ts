import { Injectable, Output,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  @Output() dataService = new EventEmitter();

  constructor() { }
  public setuser(user){
    localStorage.setItem('user',user);
  }
  public settoken(token){
    localStorage.setItem('token',token);
  }
  username;
    changeData(dataChild){
    this.username = dataChild
    //console.log(this.username);
    this.dataService.emit(this.username);
  }
}
