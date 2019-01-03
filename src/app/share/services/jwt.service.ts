import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }
  public setuser(user){
    localStorage.setItem('user',user);
  }
  public settoken(token){
    localStorage.setItem('token',token);
  }
  public getuser(){
    localStorage.getItem('user');
  }
  public gettoken(){
    localStorage.getItem('token');
  }
}
