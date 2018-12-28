import { Injectable ,Output,EventEmitter} from '@angular/core';
import { ConfigService } from '../config/config.service'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  @Output() dataService = new EventEmitter();
  info;

  constructor(private service: ConfigService, private http: HttpClient) { }
  private email;
  private password;
  private username;
  changeData(dataChild){
    this.username = dataChild;
    //console.log(this.email);
  
    this.dataService.emit(this.username);
  }
  
  setuser(email, password) {
    this.email = email;
    this.password = password;
  }
  setuser1(abc) {
    this.username = abc;
    console.log(this.username);

  }
  getuser() {
    let ur = this.username
    //console.log(this.username);
    //console.log(ur);
    return ur
  }

  auPOST() {
    let sr = this.service.urlpostau()
    var params = {
      "user": {
        "email": this.email,
        "password": this.password
      }
    }

    return this.http.post(sr, params, httpOptions)
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
  DELETE() {
    let sr = this.service.urlpostau()
    var params = {
      "user": {
        "email": this.email,
        "password": this.password
      }
    }

    return this.http.delete(sr,httpOptions)

 }

GET(){
  this.http.get('http://68.183.183.83/api/user', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  }).subscribe(data => {this.info = data ;
    console.log(this.info);
    
  });
}
  PUT() {
    let sr = this.service.urlpostau()
    var params = {
      "user":{
        "email": "jake@jake.jake",
        "bio": "I like to skateboard 123458",
        "image": "https://i.stack.imgur.com/xHWG8.jpg"
      }
    }

    return this.http.put('http://68.183.183.83/api/user', params, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }).subscribe(data => {this.info = data;
      console.log(this.info);
      
    })

  }
  Getprofile(){
    return this.http.get('http://68.183.183.83/api/profiles/'+ localStorage.getItem('user')).subscribe(data => {this.info = data;
      console.log(this.info);
      
    })
  }
}
