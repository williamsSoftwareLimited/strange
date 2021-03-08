import { createAction, props } from "@ngrx/store";

export const setArticle = createAction('[Article Component] getArticle', props<{ article }>());
