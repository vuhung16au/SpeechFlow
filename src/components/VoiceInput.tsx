import React, { useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { Mic } from 'lucide-react-native';
import useSpeechRecognition from '../hooks/useSpeechRecognition';
import useTextToSpeech from '../hooks/useTextToSpeech';

interface VoiceInputProps {
    setMessages: (callback: (prevMessages: any[]) => any[]) => void;
    style?: any;
}

const VoiceInput: React.FC<VoiceInputProps> = ({ setMessages, style: propStyle }) => {
    const { transcript, isListening, startListening, stopListening } = useSpeechRecognition();
    const { speak, isSpeaking } = useTextToSpeech();

    useEffect(() => {
        if (transcript && transcript.trim() !== '') {
            // Add user's voice input as a message
            const newMessage = {
                id: Date.now().toString(),
                text: transcript,
                sender: 'user',
            };
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            
            // For demo purposes, echo back the message
            setTimeout(() => {
                const botResponse = {
                    id: (Date.now() + 1).toString(),
                    text: `You said: ${transcript}`,
                    sender: 'bot',
                };
                setMessages((prevMessages) => [...prevMessages, botResponse]);
                speak(botResponse.text);
            }, 1000);
        }
    }, [transcript]);

    return (
        <TouchableOpacity
            style={[styles.micButton, propStyle]}
            onPressIn={startListening}
            onPressOut={stopListening}
            activeOpacity={0.7}
        >
            {isListening ? (
                <ActivityIndicator color="#fff" size="small" />
            ) : (
                <Mic size={22} color="#fff" />
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    micButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#1284ff',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
});

export default VoiceInput;