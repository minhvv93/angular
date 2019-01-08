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
      //this.count = this.lists[1].favoritesCount;
      //console.log(this.count);
      
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
    //await this.article.favorite(item.slug);
    if(!item.favorited){
      console.log(item.slug);
      console.log(item.favorited);
      this.data =  await this.article.favorite(item.slug);
      console.log(this.data);
      

      //window.location.reload();
    }else{
      console.log(item.slug);
      await this.article.unfavorite(item.slug);
      //window.location.reload();
    }
      //window.location.reload();
      
      //this.favorited = !this.favorited;
      //this.favoriteCount = this.favoriteCount + 1;
      //console.log(this.favorite);
      //return this.favoriteCount;
    //console.log(item);
    
  }

}
