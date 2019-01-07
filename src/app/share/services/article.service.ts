import { Injectable } from '@angular/core';
import {ApiService} from '../services/api.service'
import {Article} from '../../article/article'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  obj:any ;

  constructor(private apisr : ApiService) { 
    
  }
  public async getarticlelist(){
    this.obj = await this.apisr.GET("/api/articles")
    let listarticle: any = [];
   
   for(let i =0; i< this.obj.articlesCount;i++){
     
     let article = new Article();
     article.slug = this.obj.articles[i].slug;
     article.body = this.obj.articles[i].body;
     article.createdAt = this.obj.articles[i].createdAt;
     article.description = this.obj.articles[i].description
     article.favorited = this.obj.articles[i].favorited
     article.favoritesCount = this.obj.articles[i].favoritesCount
     article.title = this.obj.articles[i].title
     article.updatedAt = this.obj.articles[i].updatedAt
     article.author = this.obj.articles[i].author.username
     listarticle.push(article)
   }
   return listarticle;
  }
  public async getmyarticlelist(author){
    let url = "/api/articles?author=" + author
    console.log(url);
     this.obj = await this.apisr.GET(url);
     let listarticle: any = [];
   
     for(let i =0; i< this.obj.articlesCount;i++){
       
       let article = new Article();
       article.slug = this.obj.articles[i].slug;
       article.body = this.obj.articles[i].body;
       article.createdAt = this.obj.articles[i].createdAt;
       article.description = this.obj.articles[i].description
       article.favorited = this.obj.articles[i].favorited
       article.favoritesCount = this.obj.articles[i].favoritesCount
       article.title = this.obj.articles[i].title
       article.updatedAt = this.obj.articles[i].updatedAt
       article.author = this.obj.articles[i].author.username
       listarticle.push(article)
     }
     return listarticle;
  }
  public getarticle(slug){
    let url = "/api/articles/" + slug;
   return this.apisr.GET(url)
  }
  public newarticle(params){
    this.apisr.POST("/api/articles",params)
  }
  public deletearticle(slug){
    let url = "/api/articles/" + slug;
    //console.log(url);
    this.apisr.DELETE(url)
  }
  public favorite(slug){
    let url = "/api/articles/" + slug + "/favorite"
    console.log(url);
    this.apisr.POST(url)
  }
  public unfavorite(slug){
    let url = "/api/articles/" + slug + "/favorite"
    console.log(url);
    this.apisr.DELETE(url)
  }
  public updatearticle(slug, params){
    let url = "/api/articles/" + slug
    return this.apisr.PUT(url,params)
  }
}
