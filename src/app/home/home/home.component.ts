import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../../share/config/config.service';
import {ApiService} from '../../share/services/api.service';
import {LoadingService} from '../../share/services/loading.service';
import {JwtService} from '../../share/services/jwt.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: ConfigService , private apisr : ApiService , private loadig:LoadingService , private jwt : JwtService) { }
  //email = "jake@jake.jake";
  //password = "jakejake";
  check = false;
  data :object;

  ngOnInit() {
    this.checklogin();
    this.listarticle();
    
    
    
  }
  listarticle(){
    this.apisr.GET("/api/articles").subscribe((list)=>{
      this.data = list;
      //console.log(this.data.titile);
      
    })
  }
  checklogin(){
    if(this.jwt.gettoken() == null){
      this.check = false;
    }else{
      this.check = true;
    }
  }
  // dieukien = false;
  public async Loading(){
    
    this.loadig.showLoadingAllScreen();
    //await this.timeout(3000);
    //this.loadig.hideLoadingAllScreen();
  }
  Stop(){
    this.loadig.hideLoadingAllScreen();
  }
   timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
