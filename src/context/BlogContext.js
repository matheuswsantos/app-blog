import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999).toString(),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
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

const removeBlogPost = dispatch => {
  return id => {
    dispatch({type: 'remove', payload: id});
  };
};

const addBlogPosts = dispatch => {
  return (title, content) => {
    dispatch({type: 'add', payload: {title, content}});
  };
};

const updateBlogPosts = dispatch => {
  return (id, title, content) => {
    dispatch({type: 'update', payload: {id, title, content}});
  };
};

export const {Context, Provider} = createDataContext(
  blogReducer,
  {
    addBlogPosts,
    removeBlogPost,
    updateBlogPosts,
  },
  [],
);
