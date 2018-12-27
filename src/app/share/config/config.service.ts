import { Injectable } from '@angular/core';
//import {configvalue} from './configvalue';
import * as App from './config.const';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }
  urlpostau(){ 
   return App.Config.apisr+App.Config.aupost; 
  }
  getapiuser(){
    
  }
}
