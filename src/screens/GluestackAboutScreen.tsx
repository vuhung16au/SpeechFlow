import React from 'react';
import { ScrollView } from 'react-native';
import { Box, Heading, Text, VStack } from '@gluestack-ui/themed';

const GluestackAboutScreen = () => {
  return (
    <ScrollView>
      <Box p="$5" bg="$backgroundLight100">
        <VStack space="sm" mb="$6">
          <Heading size="xl">About SpeechFlow</Heading>
          <Text fontSize="$md" color="$textLight500">Version 1.0.0</Text>
        </VStack>
        
        <VStack space="md" mb="$6">
          <Heading size="md">Description</Heading>
          <Text fontSize="$md" lineHeight="$lg" color="$textLight800">
            SpeechFlow is a modern application that combines the power of speech recognition and 
            text-to-speech technologies to provide an intuitive conversational interface.
          </Text>
        </VStack>
        
        <VStack space="md" mb="$6">
          <Heading size="md">Technologies</Heading>
          <Text fontSize="$md" lineHeight="$lg" color="$textLight800">
            • React Native & Expo{'\n'}
            • Speech Recognition{'\n'}
            • Text-to-Speech{'\n'}
            • Gluestack UI{'\n'}
            • React Navigation
          </Text>
        </VStack>

        <VStack space="md" mb="$6">
          <Heading size="md">Privacy</Heading>
          <Text fontSize="$md" lineHeight="$lg" color="$textLight800">
            This application respects your privacy. Voice data is only processed for the purpose of 
            providing the chatbot functionality and is not stored or shared with third parties.
          </Text>
        </VStack>
        
        <Text textAlign="center" mt="$10" color="$textLight500">
          © 2025 SpeechFlow
        </Text>
      </Box>
    </ScrollView>
  );
};

export default GluestackAboutScreen;
