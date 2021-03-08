import { createAction, props } from "@ngrx/store";

export const addBlog = createAction(
  "[Blog] Add Blog", props<{ blog }>()
)

export const removeBlog = createAction(
  "[Blog] Remove Blog", props<{ blogId: number }>()
)

export const retrieveBlogs = createAction(
  "[Blog] Retrieve Blogs", props<{ blogs }>()
)
