import { useState, useEffect } from 'react';
import * as Speech from 'expo-speech';
import { Platform } from 'react-native';
import { useError } from '../context/ErrorContext';

const useTextToSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState<Speech.Voice[]>([]);
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const { showError } = useError();

  // Check TTS availability and load voices on initialization
  useEffect(() => {
    const checkAvailability = async () => {
      try {
        const available = await Speech.isSpeakingAsync();
        setIsAvailable(true);
        
        // Try to load available voices
        try {
          const availableVoices = await Speech.getAvailableVoicesAsync();
          setVoices(availableVoices);
        } catch (voiceError) {
          console.log('Could not load voices, but TTS should still work:', voiceError);
        }
      } catch (error) {
        console.error('Error checking TTS availability:', error);
        setIsAvailable(false);
      }
    };
    
    checkAvailability();
    
    return () => {
      // Clean up any ongoing speech when component unmounts
      if (isSpeaking) {
        try {
          Speech.stop();
        } catch (e) {
          // Ignore cleanup errors
        }
      }
    };
  }, []);

  const speak = async (text: string, retryCount = 0) => {
    if (!text || text.trim() === '') return;
    
    try {
      // If already speaking, stop current speech before starting new
      if (isSpeaking) {
        await Speech.stop();
      }

      setIsSpeaking(true);
      
      // Select best voice if available
      let options: Speech.SpeechOptions = {
        language: 'en-US',
        pitch: 1.0,
        rate: 0.9,
        onDone: () => setIsSpeaking(false),
        onStopped: () => setIsSpeaking(false),
        onError: (error) => {
          console.error('Error in text-to-speech:', error);
          setIsSpeaking(false);
          
          // Only show errors to user if it's not a cancellation
          if (error !== 'Canceled') {
            showError('Sorry, there was a problem with the text-to-speech service.', 'Speech Error');
          }
        }
      };
      
      // Try to use the best quality voice if available
      if (voices && voices.length > 0) {
        // Find a high quality voice
        const preferredVoice = voices.find(voice => 
          voice.quality === Speech.VoiceQuality.Enhanced || 
          voice.name?.includes('premium') ||
          voice.name?.includes('neural')
        );
        
        if (preferredVoice) {
          options.voice = preferredVoice.identifier;
        }
      }
      
      await Speech.speak(text, options);
    } catch (error) {
      console.error('Error in text-to-speech:', error);
      setIsSpeaking(false);
      
      // Try to recover with a retry
      if (retryCount < 2) {
        console.log('Retrying text-to-speech...');
        setTimeout(() => {
          speak(text, retryCount + 1);
        }, 1000); // Wait 1 second before retry
      } else {
        showError('Unable to use text-to-speech at this time. Please check your audio settings.', 'Speech Error');
      }
    }
  };

  const stop = async () => {
    if (!isSpeaking) return;
    
    try {
      await Speech.stop();
      setIsSpeaking(false);
    } catch (error) {
      console.error('Error stopping speech:', error);
      setIsSpeaking(false);
    }
  };

  return { speak, stop, isSpeaking, isAvailable, voices };
};

export default useTextToSpeech;