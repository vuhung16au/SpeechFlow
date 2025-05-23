import React, { useState } from 'react';
import { Alert, Linking, Platform } from 'react-native';
import { 
  Box, 
  Heading, 
  Text, 
  VStack, 
  HStack, 
  Pressable, 
  StarIcon
} from '@gluestack-ui/themed';

const GluestackRateUsScreen = () => {
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
        <Pressable
          key={i} 
          onPress={() => handleRating(i)}
          p="$2.5"
        >
          <StarIcon 
            size="xl" 
            color={i <= rating ? "$amber500" : "$gray300"} 
            fill={i <= rating ? "$amber500" : "none"} 
          />
        </Pressable>
      );
    }
    return stars;
  };
  
  return (
    <Box flex={1} bg="$backgroundLight100" p="$5" alignItems="center">
      <VStack space="md" alignItems="center" w="100%">
        <Heading size="xl" textAlign="center">Rate Your Experience</Heading>
        <Text fontSize="$md" color="$textLight500" textAlign="center" lineHeight="$lg" mb="$6">
          How would you rate your experience with SpeechFlow?
        </Text>
        
        <HStack my="$5" justifyContent="center">
          {renderStars()}
        </HStack>
        
        <Text fontSize="$lg" fontWeight="$medium" color="$textLight900" mt="$2.5">
          {rating === 0 ? 'Tap a star to rate' : 
           rating === 1 ? 'Poor' :
           rating === 2 ? 'Fair' :
           rating === 3 ? 'Good' :
           rating === 4 ? 'Very Good' : 'Excellent'}
        </Text>
        
        <Text fontSize="$sm" color="$textLight500" textAlign="center" mt="$7">
          Your feedback helps us improve the app for everyone.
        </Text>
      </VStack>
    </Box>
  );
};

export default GluestackRateUsScreen;
