import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../../share/config/config.service'
import {ApiService} from '../../share/services/api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: ConfigService , private apisr : ApiService) { }
  //email = "jake@jake.jake";
  //password = "jakejake";

  ngOnInit() {
    //this.service.geturl();
    //this.apisr.postuser();
    //this.apisr.login();
    //this.apisr.checkLogIn();
    //this.apisr.GET();
    //this.apisr.PUT();
    //this.apisr.Getprofile();
    //console.log(localStorage.getItem('token'));
    
    
  }

}
