import React from 'react';
import { View, StyleSheet } from 'react-native';
import Chat from '../components/Chat';

const NewChatScreen = () => {
  return (
    <View style={styles.container}>
      <Chat />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default NewChatScreen;
