import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {ArticleService} from '../../share/services/article.service';

@Component({
  selector: 'app-newarticle',
  templateUrl: './newarticle.component.html',
  styleUrls: ['./newarticle.component.css']
})
export class NewarticleComponent implements OnInit {

  constructor(private router : Router , private article : ArticleService) { }

  ngOnInit() {
    this.checkslug();
  }
  checkslug(){
    if(localStorage.getItem('slug') !== null){
      this.getarticle();
    }
  }
  title : string;
  description : string;
  body : string;
  obj : any;
  public async getarticle(){
    this.obj = await this.article.getarticle(localStorage.getItem('slug'))
    //localStorage.removeItem('slug');
    //console.log(this.obj);
    this.title = this.obj.article.title;
    this.description = this.obj.article.description;
    this.body = this.obj.article.body;
    
  }
  public async update(){
    try {
      let slug = localStorage.getItem('slug')
      let params : object = {
        "article": {
          "title": this.title,
          "description": this.description,
          "body": this.body,
        }
      };
      await this.article.updatearticle(slug, params)
      localStorage.removeItem('slug')
      this.router.navigateByUrl('')
     // alert("ok")
      
    } catch (error) {
      alert ('ban khong co quyen')
    }
  }
  public async publish(){
    try {
      
      let params : object = {
        "article": {
          "title": this.title,
          "description": this.description,
          "body": this.body,
        }
      };

      
      await this.article.newarticle(params);
      this.router.navigateByUrl('')

    } catch (error) {
      console.log('error');
      
    }

    
  }


}
