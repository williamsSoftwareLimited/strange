import { Component, OnInit } from '@angular/core';
import { ArticleService } from './services/article.service';
import { tap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { setArticle } from '../actions/article.actions';
import { selectArticle } from '../selectors/article.selector';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  providers: [ ArticleService ]
})
export class ArticlesComponent implements OnInit {
  menuItems: any[];
  article = this.store.pipe(select(selectArticle));
  currentArticle: string;
  constructor(private articleService: ArticleService,
              private store: Store) { }

  ngOnInit(): void {
    this.articleService.getMenu()
      //.pipe(tap(data => console.log(data)))
      .subscribe(data => this.menuItems=data);
  }

  menuClicked(menuItem){
    this.currentArticle=menuItem.name;
    this.articleService.getArticle(menuItem.id)
      //.pipe(tap(data => console.log(data)))
      .subscribe(article => {
        this.store.dispatch(setArticle({ article }))
        //this.store.pipe(select(selectArticle)).subscribe(p=>console.log("tAP",p))
      });


  }

}
