import React, { useState, useRef, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable, TextInput } from 'react-native';
import { Mic, Send } from 'lucide-react-native';
import GluestackMessage from './GluestackMessage';
import useSpeechRecognition from '../hooks/useSpeechRecognition';
import useTextToSpeech from '../hooks/useTextToSpeech';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp?: string;
}

const GluestackChat = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState('');
    const { transcript, isListening, startListening, stopListening } = useSpeechRecognition();
    const { speak } = useTextToSpeech();
    const flatListRef = useRef<FlatList>(null);
    const [isMicPressed, setIsMicPressed] = useState(false);
    
    // Handle transcript changes
    useEffect(() => {
        if (transcript && transcript.trim() !== '') {
            sendMessage(transcript);
        }
    }, [transcript]);

    const sendMessage = (text: string) => {
        if (text.trim()) {
            const currentTime = new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
            });
            
            const newMessage: Message = {
                id: Date.now().toString(),
                text: text.trim(),
                sender: 'user',
                timestamp: currentTime,
            };

            setMessages(prevMessages => [newMessage, ...prevMessages]);
            setInputText('');
            
            // Simulate bot response
            setTimeout(() => {
                const botResponse = `This is a response from SpeechFlow to your message: "${text}"`;
                const botMessage: Message = {
                    id: Date.now().toString() + '-response',
                    text: botResponse,
                    sender: 'bot',
                    timestamp: new Date().toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                    }),
                };
                
                setMessages(prevMessages => [botMessage, ...prevMessages]);
                speak(botResponse);
            }, 1000);
        }
    };

    const handleSend = () => {
        sendMessage(inputText);
    };

    const handleMicPress = () => {
        setIsMicPressed(true);
        startListening();
    };

    const handleMicRelease = () => {
        setIsMicPressed(false);
        stopListening();
    };

    return (
        <View style={styles.container}>
            <View style={styles.chatContainer}>
                {messages.length === 0 ? (
                    <View style={styles.emptyStateContainer}>
                        <View style={styles.headerContainer}>
                            <View style={styles.botIconBadge} />
                            <Text style={styles.headerTitle}>SpeechFlow</Text>
                        </View>
                        <Text style={styles.emptyStateText}>
                            Start a conversation with SpeechFlow.
                            Type a message or tap and hold the microphone to speak.
                        </Text>
                    </View>
                ) : (
                    <FlatList
                        ref={flatListRef}
                        data={messages}
                        renderItem={({ item }) => <GluestackMessage message={item} />}
                        keyExtractor={(item) => item.id}
                        inverted
                        contentContainerStyle={styles.messageList}
                        showsVerticalScrollIndicator={false}
                    />
                )}
            </View>
            
            {/* Input area */}
            <View style={styles.inputContainer}>
                {isListening && (
                    <View style={styles.listeningIndicator}>
                        <Text style={styles.listeningText}>Listening...</Text>
                    </View>
                )}
                <View style={styles.inputRow}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Type a message"
                        value={inputText}
                        onChangeText={setInputText}
                        placeholderTextColor="#999"
                        onSubmitEditing={handleSend}
                    />
                    
                    {inputText.trim() ? (
                        <Pressable onPress={handleSend} style={styles.sendButton}>
                            <Send color="#FFFFFF" size={20} />
                        </Pressable>
                    ) : (
                        <Pressable 
                            onPressIn={handleMicPress}
                            onPressOut={handleMicRelease}
                            style={({pressed}) => [
                                styles.micButton,
                                (pressed || isListening) && styles.micButtonActive
                            ]}
                        >
                            <Mic color={isListening || isMicPressed ? "#FFFFFF" : "#4e68fd"} size={20} />
                        </Pressable>
                    )}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    chatContainer: {
        flex: 1,
        padding: 16,
    },
    emptyStateContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 300,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    botIconBadge: {
        width: 40,
        height: 40,
        backgroundColor: '#4e68fd',
        borderRadius: 20,
        marginRight: 8,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333333',
    },
    emptyStateText: {
        marginTop: 16,
        color: '#777777',
        textAlign: 'center',
        paddingHorizontal: 30,
    },
    messageList: {
        paddingVertical: 16,
        paddingBottom: 40,
    },
    inputContainer: {
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
        padding: 12,
        backgroundColor: '#FFFFFF',
    },
    listeningIndicator: {
        backgroundColor: '#f5f5f5',
        padding: 8,
        borderRadius: 8,
        marginBottom: 8,
        alignItems: 'center',
    },
    listeningText: {
        color: '#333333',
    },
    inputRow: {
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        borderRadius: 24,
        paddingHorizontal: 16,
        paddingVertical: 8,
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 8,
    },
    sendButton: {
        backgroundColor: '#4e68fd',
        borderRadius: 50,
        width: 36,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
    },
    micButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    micButtonActive: {
        backgroundColor: '#4e68fd',
    }
});

export default GluestackChat;
