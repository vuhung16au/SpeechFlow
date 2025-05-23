import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>About SpeechFlow</Text>
        <Text style={styles.version}>Version 1.0.0</Text>
        
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.paragraph}>
          SpeechFlow is a modern application that combines the power of speech recognition and 
          text-to-speech technologies to provide an intuitive conversational interface.
        </Text>
        
        <Text style={styles.sectionTitle}>Technologies</Text>
        <Text style={styles.paragraph}>
          • React Native & Expo{'\n'}
          • Speech Recognition{'\n'}
          • Text-to-Speech{'\n'}
          • Gluestack UI{'\n'}
          • React Navigation
        </Text>

        <Text style={styles.sectionTitle}>Privacy</Text>
        <Text style={styles.paragraph}>
          This application respects your privacy. Voice data is only processed for the purpose of 
          providing the chatbot functionality and is not stored or shared with third parties.
        </Text>
        
        <Text style={styles.footer}>© 2025 SpeechFlow</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  version: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    color: '#333',
  },
  footer: {
    marginTop: 40,
    textAlign: 'center',
    color: '#666',
  }
});

export default AboutScreen;
