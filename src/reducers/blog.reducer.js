import { types } from "../actions";

const initialState = {
  _id: '',
  posts: [],
  updated_at: '',
  created_at: ''
};

function handleGetBlog(state, action) {
  let blog = action.payload.data.data;
  return {
    _id: blog._id,
    posts: blog.posts,
    updated_at: new Date(blog.updated_at).toLocaleDateString(),
    created_at: new Date(blog.created_at).toLocaleDateString()
  };
}

export default (state = { ...initialState }, action) => {
  switch (action.type) {
    case types.BLOG_GET + '_SUCCESS':
      return handleGetBlog(state, action);
    case types.BLOG_UPDATE + '_SUCCESS':
      return handleGetBlog(state, action);
    default:
      return state;
  }
};