import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const HelpScreen = () => {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Help Center</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Getting Started</Text>
          <Text style={styles.paragraph}>
            Welcome to SpeechFlow! This app allows you to interact with a chatbot using your voice or text. 
            To get started, simply tap the microphone button and start speaking.
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Voice Commands</Text>
          <Text style={styles.paragraph}>
            • Tap the microphone and speak clearly{'\n'}
            • Wait for the speech recognition to process{'\n'}
            • The app will respond both visually and audibly
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Text Input</Text>
          <Text style={styles.paragraph}>
            If you prefer, you can also type your messages using the text input field at the bottom of the chat screen.
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>
          <Text style={styles.paragraph}>
            Customize your experience in the Settings section. You can enable or disable voice responses 
            and adjust other preferences.
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Troubleshooting</Text>
          <Text style={styles.paragraph}>
            If the app is not recognizing your voice properly:{'\n'}
            • Ensure you're in a quiet environment{'\n'}
            • Check that your microphone permissions are enabled{'\n'}
            • Speak clearly and at a moderate pace
          </Text>
        </View>
        
        <TouchableOpacity 
          style={styles.supportButton} 
          onPress={() => openLink('https://example.com/support')}
        >
          <Text style={styles.supportButtonText}>Contact Support</Text>
        </TouchableOpacity>
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
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  supportButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  supportButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default HelpScreen;
