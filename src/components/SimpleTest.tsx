import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SimpleTest = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Simple Test</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Simple Button</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    margin: 16
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16
  },
  button: {
    backgroundColor: '#1284ff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default SimpleTest;
