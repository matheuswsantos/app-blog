import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get':
      return action.payload;
    case 'update':
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case 'remove':
      return state.filter(blogPost => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const getBlogPost = dispatch => {
  return async () => {
    const {data} = await jsonServer.get('/blogpost');

    dispatch({type: 'get', payload: data});
  };
};

const removeBlogPost = dispatch => {
  return async id => {
    await jsonServer.delete(`/blogpost/${id}`);

    dispatch({type: 'remove', payload: id});
  };
};

const addBlogPosts = dispatch => {
  return async (title, content) => {
    await jsonServer.post('/blogpost', {title, content});
  };
};

const updateBlogPosts = dispatch => {
  return async (id, title, content) => {
    await jsonServer.put(`/blogpost/${id}`, {title, content});

    dispatch({type: 'update', payload: {id, title, content}});
  };
};

export const {Context, Provider} = createDataContext(
  blogReducer,
  {
    getBlogPost,
    addBlogPosts,
    removeBlogPost,
    updateBlogPosts,
  },
  [],
);
