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
  }
  public async publish(){
    try {
      let params : object = {
        "article": {
          "title": "How to train your dragon new 2",
          "description": "Ever wonder how? new 2",
          "body": "You have to believe new 2",
        }
      };
      await this.article.newarticle(params);
      this.router.navigateByUrl('')

    } catch (error) {
      console.log('error');
      
    }

    
  }


}
