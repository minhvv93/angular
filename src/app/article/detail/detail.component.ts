import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../share/services/article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private article : ArticleService , private route : ActivatedRoute) { }
  ngOnInit() {
   this.detailarticle();
  }
  slug : string;
  title : string = '';
  author : string = '';
  description : string = '';
  obj : any;
  public async detailarticle(){
    this.route.params.subscribe((params)=>{
      this.slug = params['id'];
      
    })
    this.obj = await this.article.getarticle(this.slug);
    this.title = this.obj.article.title;
    this.description = this.obj.article.description;
    this.author = this.obj.article.author.username;
  }


}
