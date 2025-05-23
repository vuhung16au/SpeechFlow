import { useEffect, useState, useRef } from 'react';
import { Platform } from 'react-native';
import { useError } from '../context/ErrorContext';

// Use Web Speech API for web/Expo Go compatibility
const useSpeechRecognition = () => {
    const [transcript, setTranscript] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const recognitionRef = useRef<any>(null);
    const { showError } = useError();
    const [isSupported, setIsSupported] = useState<boolean | null>(null);

    // Check if speech recognition is supported
    useEffect(() => {
        const checkSupport = () => {
            // Web support check
            if (typeof window !== 'undefined') {
                const SpeechRecognition = (window as any).SpeechRecognition || 
                                         (window as any).webkitSpeechRecognition;
                
                if (SpeechRecognition) {
                    recognitionRef.current = new SpeechRecognition();
                    recognitionRef.current.continuous = false;
                    recognitionRef.current.interimResults = false;
                    recognitionRef.current.lang = 'en-US';
                    setIsSupported(true);
                    return;
                }
            }
            
            // For native platforms, show different message
            // In a real app, you would implement a native speech recognition solution here
            if (Platform.OS === 'ios' || Platform.OS === 'android') {
                setIsSupported(false);
            } else {
                setIsSupported(false);
            }
        };
        
        checkSupport();
        
        return () => {
            if (recognitionRef.current) {
                try {
                    recognitionRef.current.stop();
                } catch (e) {
                    console.log('Error stopping recognition on unmount:', e);
                }
            }
        };
    }, []);

    const startListening = async () => {
        if (!isSupported) {
            const errorMsg = 'Speech recognition is not supported on this platform or browser.';
            setError(errorMsg);
            showError(errorMsg, 'Feature Not Supported');
            return;
        }
        
        try {
            setTranscript('');
            setError(null);
            setIsListening(true);
            
            recognitionRef.current.onresult = (event: any) => {
                if (event.results && event.results[0] && event.results[0][0]) {
                    setTranscript(event.results[0][0].transcript);
                }
                setIsListening(false);
            };
            
            recognitionRef.current.onerror = (event: any) => {
                const errorMsg = event.error || 'Unknown speech recognition error';
                setError(errorMsg);
                
                // Show user-friendly error messages
                let userMessage = 'Sorry, there was a problem with voice recognition.';
                if (event.error === 'not-allowed') {
                    userMessage = 'Microphone access was denied. Please allow microphone access to use voice features.';
                } else if (event.error === 'no-speech') {
                    userMessage = 'No speech was detected. Please try again.';
                }
                
                showError(userMessage, 'Voice Recognition Error');
                setIsListening(false);
            };
            
            recognitionRef.current.onend = () => setIsListening(false);
            
            // Safety timeout in case recognition gets stuck
            const timeout = setTimeout(() => {
                if (isListening) {
                    stopListening();
                    setError('Voice recognition timed out. Please try again.');
                }
            }, 10000); // 10 second timeout
            
            recognitionRef.current.start();
            
            return () => clearTimeout(timeout);
        } catch (e) {
            console.error('Error starting speech recognition:', e);
            setError('Failed to start speech recognition');
            setIsListening(false);
            showError('There was a problem starting voice recognition. Please try again.', 'Error');
        }
    };

    const stopListening = async () => {
        if (recognitionRef.current && isListening) {
            try {
                recognitionRef.current.stop();
            } catch (e) {
                console.error('Error stopping recognition:', e);
            }
            setIsListening(false);
        }
    };

    return { 
        transcript, 
        isListening, 
        error, 
        isSupported,
        startListening, 
        stopListening 
    };
};

export default useSpeechRecognition;