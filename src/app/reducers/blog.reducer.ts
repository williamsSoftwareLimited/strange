import { createReducer, on } from "@ngrx/store";
import { addBlog, removeBlog } from "../actions/blog.actions";


export const blogReducer = createReducer(
  [],
  on(removeBlog, (state, { blogId }) => state.filter(id => id!==blogId)),
  on(addBlog, (state, { blog }) => [ blog,  ...state ])
)
