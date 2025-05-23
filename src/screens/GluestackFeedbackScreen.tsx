import React, { useState } from 'react';
import { ScrollView, Alert } from 'react-native';
import { 
  Box, 
  Heading, 
  Text, 
  VStack, 
  Input, 
  InputField, 
  TextArea, 
  TextAreaInput, 
  Button, 
  ButtonText 
} from '@gluestack-ui/themed';

const GluestackFeedbackScreen = () => {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (feedback.trim() === '') {
      Alert.alert('Error', 'Please enter your feedback');
      return;
    }
    
    // Here you would normally send the feedback to your server
    Alert.alert(
      'Thank You!',
      'Your feedback has been submitted successfully.',
      [{ text: 'OK', onPress: () => {
        // Clear form after submission
        setFeedback('');
        setEmail('');
      }}]
    );
  };

  return (
    <ScrollView>
      <Box p="$5" bg="$backgroundLight100">
        <VStack space="sm" mb="$6">
          <Heading size="xl">Send Feedback</Heading>
          <Text fontSize="$md" color="$textLight500" lineHeight="$lg">
            We value your thoughts! Please share your feedback, suggestions, or report any issues you've encountered.
          </Text>
        </VStack>
        
        <VStack space="md" mb="$6">
          <Text fontSize="$md" fontWeight="$medium">Your Feedback</Text>
          <TextArea size="md">
            <TextAreaInput
              placeholder="What's on your mind?"
              value={feedback}
              onChangeText={setFeedback}
              numberOfLines={6}
            />
          </TextArea>
        </VStack>
        
        <VStack space="md" mb="$6">
          <Text fontSize="$md" fontWeight="$medium">Email (optional)</Text>
          <Input size="md" variant="outline">
            <InputField
              placeholder="your@email.com"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </Input>
        </VStack>
        
        <Button onPress={handleSubmit} size="lg" variant="solid" bg="$primary600" mt="$3">
          <ButtonText>Submit Feedback</ButtonText>
        </Button>
      </Box>
    </ScrollView>
  );
};

export default GluestackFeedbackScreen;
