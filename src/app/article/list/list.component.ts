import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../../share/config/config.service';
import {ApiService} from '../../share/services/api.service';
import {JwtService} from '../../share/services/jwt.service';
import {ArticleService} from '../../share/services/article.service';
import {Article} from '../article'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 check;
 lists :any;
 

  constructor(private service: ConfigService , private apisr : ApiService ,private article : ArticleService,
     private jwt : JwtService){
      }

  ngOnInit() {
    this.checklogin();
   this.articlelist(); 
  }
  public async articlelist(){
     this.lists = await this.article.getarticlelist();
     return this.lists;
  }

  checklogin(){
    if(this.jwt.gettoken() == null){
      this.check = false;
    }else{
      this.check = true;
    }
  }
   timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
