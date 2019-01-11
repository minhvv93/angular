import { Component, OnInit } from '@angular/core';
import { UserService } from '../../share/services/user.service';
import { ArticleService } from '../../share/services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  lists: any;
  public check : boolean = true;
  user = localStorage.getItem('user');
  //author = localStorage.getItem('author');
  // params:any = {};
  author: string;

  constructor(private article: ArticleService, private route: ActivatedRoute) { }

  ngOnInit() {
    //this.myarticlelist();
    //this.profile();
    //localStorage.removeItem('author')
    this.abc();
    //localStorage.removeItem('author');
  }

  public abc(){
    this.route.params.subscribe((params) => {
      this.author = params['id'];
       console.log(this.author);
    });
    if(this.author == null){
        this.profile();
    }else{
      this.myarticlelist();
    }
  }

  public async myarticlelist() {
    //console.log(localStorage.getItem('author'));
    if(this.user == this.author){
      this.check = true;
    }else{
      this.check = false
    }
    this.lists = await this.article.getmyarticlelist(this.author);
    return this.lists;
  }
  public async profile(){
    this.lists = await this.article.getmyarticlelist(this.user);
    return this.lists;
  }
}
