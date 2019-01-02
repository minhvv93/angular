import { Injectable, Output, EventEmitter } from '@angular/core';
import { ConfigService } from '../config/config.service'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const httpOptionsau = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  @Output() dataService = new EventEmitter();


  constructor(private config: ConfigService, private http: HttpClient) { }


  public POST(path: string, params: object) {
    let URL = this.config.getURL() + path;
    return this.http.post(URL, params, httpOptions).toPromise();
  }
  public GET(path: string) {
    let URL = this.config.getURL() + path;
    return this.http.get(URL, httpOptions).toPromise();
  }
  public PUT(path: string, params: object) {
    let URL = this.config.getURL() + path;
    return this.http.put(URL, params, httpOptionsau).toPromise();
  }
  public DELETE(path: string) {
    let URL = this.config.getURL() + path;
    return this.http.delete(URL, httpOptions).toPromise();

  }

  //   DELETE() {
  //     let sr = this.config.getURL()
  //     var params = {
  //       "user": {
  //         "email": this.email,
  //         "password": this.password
  //       }
  //     }

  //     return this.http.delete(sr,httpOptions)

  //  }

  // GET(){
  //   this.http.get('http://68.183.183.83/api/user', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: 'Bearer ' + localStorage.getItem('token')
  //     }
  //   }).subscribe(data => {this.info = data ;
  //     console.log(this.info);

  //   });
  // }
  //   PUT() {
  //     let sr = this.config.getURL();
  //     var params = {
  //       "user":{
  //         "email": "jake@jake.jake",
  //         "bio": "I like to skateboard 123458",
  //         "image": "https://i.stack.imgur.com/xHWG8.jpg"
  //       }
  //     }

  //     return this.http.put('http://68.183.183.83/api/user', params, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: 'Bearer ' + localStorage.getItem('token')
  //       }
  //     }).subscribe(data => {this.info = data;
  //       console.log(this.info);

  //     })

  //   }
  //   Getprofile(){
  //     return this.http.get('http://68.183.183.83/api/profiles/'+ localStorage.getItem('user')).subscribe(data => {this.info = data;
  //       console.log(this.info);

  //     })
  //   }
}
