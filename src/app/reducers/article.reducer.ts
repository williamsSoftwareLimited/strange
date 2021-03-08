import { createReducer, on } from '@ngrx/store';
import { setArticle } from '../actions/article.actions';

export const initialState=[]

export const articleReducer = createReducer(
  initialState,
  on(setArticle, (state, { article }) => article)
);

