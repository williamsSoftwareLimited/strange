import { Injectable } from '@angular/core';
import { of, from } from 'rxjs';
import { articles, menuItems } from './articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  menuItems = menuItems
  articles = articles;

  getMenu(){
    return of(this.menuItems);
  }

  getArticle(articleId){
    var article = this.articles.find(p => p.id===articleId);
    return of(article);
  }
}
