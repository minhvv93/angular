import { Injectable } from '@angular/core';
//import {configvalue} from './configvalue';
import * as App from './config.const';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }
  geturl(){ 
   console.log(App.Config.url);
   console.log(App.Config.api);
   
  }
  getapiuser(){
    
  }
}
