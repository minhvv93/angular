import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../../share/config/config.service';
import {ApiService} from '../../share/services/api.service';
import {JwtService} from '../../share/services/jwt.service';
import {ArticleService} from '../../share/services/article.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 check;
 lists :any;
 count : number;
 favorited : boolean ;
 data ;

  constructor(private service: ConfigService , private apisr : ApiService ,private article : ArticleService,
     private jwt : JwtService , private route : ActivatedRoute){
      }

  ngOnInit() {
    this.checklogin();
   this.articlelist(); 
  }
  public async articlelist(){
     this.lists = await this.article.getarticlelist();
      
     console.log(this.lists);
     
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

  async favoritearticle(item){
    if(!item.favorited){
      console.log(item.slug);
      console.log(item.favorited);
      this.data =  await this.article.favorite(item.slug);
      console.log(this.data);
      console.log(this.data.article.favoritesCount);
      
      item.favoritesCount = this.data.article.favoritesCount;
      item.favorited = this.data.article.favorited;
      console.log(item.favoritesCount);
      
    }else{
      console.log(item.slug);
      this.data = await this.article.unfavorite(item.slug);
      item.favoritesCount = this.data.article.favoritesCount;
      item.favorited = this.data.article.favorited;
    }
    
  }

}
