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
  //email = "jake@jake.jake";
  //password = "jakejake"
  private url = 'http://68.183.183.83/api/users/login'

  constructor(private service: ConfigService , private http : HttpClient) { }
   async postuser(){
    var body = {
      "user":{
        "email": "jake@jake.jake",
        "password": "jakejake"
      }
    }
    let api = this.service.geturl()
    console.log(api);
    let a = await this.http.post<any>(`http://68.183.183.83/api/users/login`,body);
    console.log(a);
  }
  // addMovie(newMovie: Movie): Observable<Movie> {        
  //   return this.http.post<Movie>(this.moviesURL, newMovie, httpOptions).pipe(
  //     tap((movie: Movie) => console.log(`inserted movie = ${JSON.stringify(movie)}`)),
  //     catchError(error => of(new Movie()))
  //   );
  // }
  login(): Observable<any> {
    var body = {
      "user":{
        "email": "jake@jake.jake",
        "password": "jakejake"
      }
    } 
    var json = JSON.stringify(body);
    var params = 'json=' + json       
    var b ;
    //return this.http.post<any>(this.url, params).map((response : Response) => response.json())
    let a =  this.http.post<any>(this.url, params).pipe(tap((response : Response) => response.json()))
    console.log(a);
    return a;
    
    
  }
}
