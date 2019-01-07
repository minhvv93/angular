import { Component, OnInit } from '@angular/core';
import { UserService } from '../../share/services/user.service';
import {ArticleService} from '../../share/services/article.service'
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
lists : any ;
  author = localStorage.getItem('user');
  //params:any = {};

  constructor(private article : ArticleService) { }

  ngOnInit() {
    this.myarticlelist();
  }
  public async myarticlelist(){
    this.lists = await this.article.getmyarticlelist(this.author)
    return this.lists;
 }


}
