import React, {useContext} from 'react';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

export default ({navigation}) => {
  const {addBlogPosts} = useContext(Context);

  return (
    <BlogPostForm
      btnTitle="ADD BLOG POST"
      onSubmit={(title, content) => {
        addBlogPosts(title, content);
        navigation.navigate('Index');
      }}
    />
  );
};
