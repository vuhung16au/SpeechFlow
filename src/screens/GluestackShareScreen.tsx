import React from 'react';
import { Linking, Platform, Share } from 'react-native';
import { 
  Box, 
  Heading, 
  Text, 
  VStack, 
  Button, 
  ButtonText, 
  Divider,
  HStack
} from '@gluestack-ui/themed';

const GluestackShareScreen = () => {
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
    <Box flex={1} p="$5" bg="$backgroundLight100">
      <VStack space="md">
        <Heading size="xl">Share the App</Heading>
        <Text fontSize="$md" color="$textLight500" lineHeight="$lg" mb="$6">
          Enjoying SpeechFlow? Share the app with your friends and family!
        </Text>

        <Button 
          onPress={handleShare} 
          size="lg" 
          variant="solid" 
          bg="$primary600" 
          mb="$6"
        >
          <ButtonText>Share with Friends</ButtonText>
        </Button>

        <Divider my="$6" />

        <Heading size="lg" mt="$2">Rate Us</Heading>
        <Text fontSize="$md" color="$textLight500" lineHeight="$lg" mb="$5">
          Your feedback helps us improve! Rate us on the App Store or Google Play.
        </Text>

        <Button 
          onPress={openAppStore} 
          size="lg" 
          variant="solid" 
          bg="$amber600"
          mb="$6"
        >
          <ButtonText>Rate the App</ButtonText>
        </Button>

        <Heading size="lg" mt="$4">Follow Us</Heading>
        <HStack space="md" mt="$4">
          <Button 
            flex={1} 
            onPress={() => Linking.openURL('https://twitter.com/speechflow')}
            size="md"
            variant="solid"
            bg="#1DA1F2"
          >
            <ButtonText>Twitter</ButtonText>
          </Button>
          <Button 
            flex={1}
            onPress={() => Linking.openURL('https://facebook.com/speechflow')}
            size="md"
            variant="solid"
            bg="#4267B2"
          >
            <ButtonText>Facebook</ButtonText>
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default GluestackShareScreen;
