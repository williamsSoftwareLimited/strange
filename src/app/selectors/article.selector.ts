import { createSelector } from "@ngrx/store"

export const selectArticle = createSelector(
  (state:any) => state.articles,
  article => article
)
