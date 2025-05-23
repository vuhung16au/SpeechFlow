import React from 'react';
import { ScrollView, Linking } from 'react-native';
import { Box, Heading, Text, Pressable, VStack } from '@gluestack-ui/themed';

const GluestackHelpScreen = () => {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView>
      <Box p="$5" bg="$backgroundLight100">
        <Heading size="xl" mb="$6">Help Center</Heading>
        
        <VStack space="md" mb="$6">
          <Heading size="md">Getting Started</Heading>
          <Text fontSize="$md" lineHeight="$lg" color="$textLight800">
            Welcome to SpeechFlow! This app allows you to interact with a chatbot using your voice or text. 
            To get started, simply tap the microphone button and start speaking.
          </Text>
        </VStack>
        
        <VStack space="md" mb="$6">
          <Heading size="md">Voice Commands</Heading>
          <Text fontSize="$md" lineHeight="$lg" color="$textLight800">
            • Tap the microphone and speak clearly{'\n'}
            • Wait for the speech recognition to process{'\n'}
            • The app will respond both visually and audibly
          </Text>
        </VStack>
        
        <VStack space="md" mb="$6">
          <Heading size="md">Text Input</Heading>
          <Text fontSize="$md" lineHeight="$lg" color="$textLight800">
            If you prefer, you can also type your messages using the text input field at the bottom of the chat screen.
          </Text>
        </VStack>
        
        <VStack space="md" mb="$6">
          <Heading size="md">Settings</Heading>
          <Text fontSize="$md" lineHeight="$lg" color="$textLight800">
            Customize your experience in the Settings section. You can enable or disable voice responses 
            and adjust other preferences.
          </Text>
        </VStack>
        
        <VStack space="md" mb="$6">
          <Heading size="md">Troubleshooting</Heading>
          <Text fontSize="$md" lineHeight="$lg" color="$textLight800">
            If the app is not recognizing your voice properly:{'\n'}
            • Ensure you're in a quiet environment{'\n'}
            • Check that your microphone permissions are enabled{'\n'}
            • Speak clearly and at a moderate pace
          </Text>
        </VStack>
        
        <Pressable 
          onPress={() => openLink('https://example.com/support')}
          bg="$primary600"
          p="$4"
          borderRadius="$lg"
          alignItems="center"
          mt="$5"
        >
          <Text color="$white" fontSize="$md" fontWeight="$medium">Contact Support</Text>
        </Pressable>
      </Box>
    </ScrollView>
  );
};

export default GluestackHelpScreen;
