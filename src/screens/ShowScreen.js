import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import {Icon} from 'native-base';

const ShowScreen = ({navigation}) => {
  const {state} = useContext(Context);
  const blogPostId = navigation.getParam('id');
  const blogPost = state.find(blogPost => blogPost.id === blogPostId);

  return (
    <View>
      <Text> {blogPost.title} </Text>
      <Text> {blogPost.content} </Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({navigation}) => {
  const blogPostId = navigation.getParam('id');

  return {
    headerRight: (
      <TouchableOpacity
        onPress={() => navigation.navigate('Edit', {id: blogPostId})}>
        <Icon type="MaterialIcons" name="edit" fontSize="30" />
      </TouchableOpacity>
    ),
  };
};

export default ShowScreen;
