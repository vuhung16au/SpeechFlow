import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, Linking } from 'react-native';
import { StarIcon } from '@gluestack-ui/themed';

const RateUsScreen = () => {
  const [rating, setRating] = useState(0);
  
  const handleRating = (selectedRating) => {
    setRating(selectedRating);
    
    if (selectedRating >= 4) {
      // If rating is high, prompt to rate on app store
      setTimeout(() => {
        Alert.alert(
          'Rate on App Store',
          'Thank you for your positive rating! Would you like to rate us on the App Store?',
          [
            {
              text: 'No Thanks',
              style: 'cancel'
            },
            { 
              text: 'Rate Now', 
              onPress: () => {
                // Deep link to app store page
                const storeUrl = Platform.OS === 'ios' 
                  ? 'https://apps.apple.com/app/speechflow/id1234567890'
                  : 'https://play.google.com/store/apps/details?id=com.speechflow.app';
                Linking.openURL(storeUrl);
              }
            }
          ]
        );
      }, 500);
    } else {
      // If rating is low, ask for feedback
      setTimeout(() => {
        Alert.alert(
          'We Value Your Feedback',
          'Sorry to hear you had a less than perfect experience. Would you like to send us detailed feedback?',
          [
            {
              text: 'No Thanks',
              style: 'cancel'
            },
            { 
              text: 'Send Feedback', 
              onPress: () => {
                // Navigate to feedback screen
                // Navigation would be handled via the parent component's navigation prop
              }
            }
          ]
        );
      }, 500);
    }
  };
  
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity 
          key={i} 
          onPress={() => handleRating(i)}
          style={styles.starContainer}
        >
          <StarIcon 
            size="xl" 
            color={i <= rating ? '#FFD700' : '#D3D3D3'} 
            fill={i <= rating ? '#FFD700' : 'none'} 
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate Your Experience</Text>
      <Text style={styles.subtitle}>
        How would you rate your experience with SpeechFlow?
      </Text>
      
      <View style={styles.starsContainer}>
        {renderStars()}
      </View>
      
      <Text style={styles.ratingText}>
        {rating === 0 ? 'Tap a star to rate' : 
         rating === 1 ? 'Poor' :
         rating === 2 ? 'Fair' :
         rating === 3 ? 'Good' :
         rating === 4 ? 'Very Good' : 'Excellent'}
      </Text>
      
      <Text style={styles.feedbackText}>
        Your feedback helps us improve the app for everyone.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
    lineHeight: 22,
  },
  starsContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'center',
  },
  starContainer: {
    padding: 10,
  },
  ratingText: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
    color: '#333',
  },
  feedbackText: {
    fontSize: 14,
    color: '#666',
    marginTop: 30,
    textAlign: 'center',
    lineHeight: 20,
  }
});

export default RateUsScreen;
