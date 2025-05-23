import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Platform, Share } from 'react-native';

const ShareScreen = () => {
  const appUrl = Platform.OS === 'ios' 
    ? 'https://apps.apple.com/app/speechflow/id1234567890' 
    : 'https://play.google.com/store/apps/details?id=com.speechflow.app';
    
  const appName = 'SpeechFlow App';
  const shareMessage = `Check out ${appName}, an amazing voice-enabled chatbot! ${appUrl}`;

  const handleShare = async () => {
    try {
      await Share.share({
        message: shareMessage,
        title: appName,
        url: appUrl, // iOS only
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const openAppStore = () => {
    Linking.openURL(appUrl);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Share the App</Text>
      <Text style={styles.subtitle}>
        Enjoying SpeechFlow? Share the app with your friends and family!
      </Text>

      <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
        <Text style={styles.buttonText}>Share with Friends</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <Text style={styles.rateTitle}>Rate Us</Text>
      <Text style={styles.rateDescription}>
        Your feedback helps us improve! Rate us on the App Store or Google Play.
      </Text>

      <TouchableOpacity style={styles.rateButton} onPress={openAppStore}>
        <Text style={styles.buttonText}>Rate the App</Text>
      </TouchableOpacity>

      <View style={styles.socialSection}>
        <Text style={styles.socialTitle}>Follow Us</Text>
        <View style={styles.socialButtons}>
          <TouchableOpacity 
            style={[styles.socialButton, styles.twitterButton]} 
            onPress={() => Linking.openURL('https://twitter.com/speechflow')}
          >
            <Text style={styles.socialButtonText}>Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.socialButton, styles.facebookButton]} 
            onPress={() => Linking.openURL('https://facebook.com/speechflow')}
          >
            <Text style={styles.socialButtonText}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    lineHeight: 22,
  },
  shareButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#e1e1e1',
    marginVertical: 30,
  },
  rateTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  rateDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    lineHeight: 22,
  },
  rateButton: {
    backgroundColor: '#FF9500',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  socialSection: {
    marginTop: 30,
  },
  socialTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialButton: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  twitterButton: {
    backgroundColor: '#1DA1F2',
  },
  facebookButton: {
    backgroundColor: '#4267B2',
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default ShareScreen;
