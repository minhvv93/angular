import { Component, OnInit } from '@angular/core';
//import { ArticleService } from '../../share/services/article.service';
import { ArticleService } from 'src/app/share/services/article.service';
import { ActivatedRoute } from '@angular/router';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  lists: any;
  favorite: any;
  public check : boolean = true;
  user = localStorage.getItem('user');
  //author = localStorage.getItem('author');
  // params:any = {};
  author: string;

  constructor(private article: ArticleService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.abc();
  }

  public abc(){
    this.route.params.subscribe((params) => {
      this.author = params['id'];
       console.log(this.author);
    });
    if(this.author == null){
        this.profile(this.user);
        this.favoritelist(this.user)
    }else{
      this.myarticlelist();
      this.favoritelist(this.author)
    }
  }

  public async myarticlelist() {
    if(this.user == this.author){
      this.check = true;
    }else{
      this.check = false
    }
    this.lists = await this.article.getmyarticlelist(this.author);
    return this.lists;
  }
  public async profile(user){
    this.lists = await this.article.getmyarticlelist(this.user);
    return this.lists;
  }
  public async favoritelist(user){
    this.favorite = await this.article.favoritelist(user);
    return this.favorite;
  }
}
