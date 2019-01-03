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

}
