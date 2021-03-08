import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { StoreModule } from '@ngrx/store';
import { articleReducer } from '../reducers/article.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    StoreModule.forFeature("articles", articleReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      //logOnly: environment.production,
    }),
  ]
})
export class ArticlesModule { }
