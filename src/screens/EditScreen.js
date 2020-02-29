import React, {useContext} from 'react';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

export default ({navigation}) => {
  const {state, updateBlogPosts} = useContext(Context);

  const blogPostId = navigation.getParam('id');
  const blogPost = state.find(blogPost => blogPost.id === blogPostId);

  return (
    <BlogPostForm
      btnTitle="UPDATE BLOG POST"
      initialValues={{title: blogPost.title, content: blogPost.content}}
      onSubmit={(title, content) => {
        updateBlogPosts(blogPostId, title, content);
        navigation.pop();
      }}
    />
  );
};
