import { types } from "../actions";

const initialState = {
  _id: '',
  posts: [],
  updated_at: '',
  created_at: ''
};

function handleGetBlog(state, action) {
  return {
    _id: action.blog._id,
    posts: action.blog.posts,
    updated_at: new Date(action.blog.updated_at).toLocaleDateString(),
    created_at: new Date(action.blog.created_at).toLocaleDateString()
  };
}

export default (state = { ...initialState }, action) => {
  switch (action.type) {
    case types.GET_BLOG_SUCCESS:
      return handleGetBlog(state, action);
    case types.UPDATE_BLOG_SUCCESS:
      return handleGetBlog(state, action);
    default:
      return state;
  }
};