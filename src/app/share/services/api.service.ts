import { Injectable } from '@angular/core';
import {ConfigService} from '../config/config.service'
import { HttpClient , HttpHeaders ,HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'http://68.183.183.83/api/users/login'

  constructor(private service: ConfigService , private http : HttpClient) { }
  
  checkLogIn(){

    var params={
      "user":{
        "email": "jake@jake.jake",
        "password": "jakejake"
      }
    }

    const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json'
          })
        };

    var v= this.http.post(this.url,params,httpOptions)
    .subscribe(data => 
    {alert('ok');},
     error => 
     {alert("Error");}
    );

}
}
