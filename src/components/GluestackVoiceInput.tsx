import React, { useEffect } from 'react';
import { Button, ButtonIcon, Box } from '@gluestack-ui/themed';
import { Mic } from 'lucide-react-native';
import useSpeechRecognition from '../hooks/useSpeechRecognition';
import useTextToSpeech from '../hooks/useTextToSpeech';

interface GluestackVoiceInputProps {
  onTextReceived: (text: string) => void;
}

const GluestackVoiceInput: React.FC<GluestackVoiceInputProps> = ({ onTextReceived }) => {
  const { transcript, isListening, startListening, stopListening } = useSpeechRecognition();
  const { speak, isSpeaking } = useTextToSpeech();

  useEffect(() => {
    if (transcript && transcript.trim() !== '') {
      onTextReceived(transcript);
    }
  }, [transcript, onTextReceived]);

  const handlePress = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  return (
    <Button
      size="md"
      variant={isListening ? 'solid' : 'outline'}
      action={isListening ? 'negative' : 'secondary'}
      onPress={handlePress}
      px="$3"
    >
      <ButtonIcon as={Mic} color={isListening ? '$white' : '$secondary500'} />
    </Button>
  );
};

export default GluestackVoiceInput;
