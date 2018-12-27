import { Injectable } from '@angular/core';
import {ConfigService} from '../config/config.service'
import { HttpClient , HttpHeaders ,HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { setDefaultService } from 'selenium-webdriver/chrome';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private service: ConfigService , private http : HttpClient) { }
  private email ;
  private password ;
  private username;
  setuser(email,password){
    this.email = email;
    this.password = password;
  }
  setuser1(abc){
    this.username = abc;
    console.log(this.username);
    
  }
  getuser(){
    let ur = this.username
    //console.log(this.username);
    //console.log(ur);
    return ur
  }
  
   auPOST(){
    let sr = this.service.urlpostau()
    var params={
      "user":{
        "email": this.email,
        "password": this.password
      }
    }

    return this.http.post(sr,params,httpOptions)
    // .subscribe(data => {this.info = data; 
    //   this.username = this.info.user.username;
    //   //console.log(this.username);
    
    // });
    // .subscribe(data => {this.info = data;
    //   this.username = this.info.user.username;
    //   console.log(this.username);
    //   return this.username
    // })
}
}
