import { Injectable } from '@angular/core';
//import {configvalue} from './configvalue';
import * as App from './config.const';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }
  geturl(){ 
   return App.Config.api; 
  }
  getapiuser(){
    
  }
}
