import React, { useState, useRef } from 'react';
import { View, TextInput, FlatList, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { Send } from 'lucide-react-native';
import Message from './Message';
import VoiceInput from './VoiceInput';

interface ChatProps {
    welcomeClosed: boolean;
}

const Chat: React.FC<ChatProps> = ({ welcomeClosed }) => {
    const [messages, setMessages] = useState<any[]>([]);
    const [inputText, setInputText] = useState('');
    const flatListRef = useRef<FlatList>(null);

    const handleSend = () => {
        if (inputText.trim()) {
            const newMessage = {
                id: Date.now().toString(),
                text: inputText,
                sender: 'user',
            };
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setInputText('');
            
            // For demo purposes, echo back the message
            setTimeout(() => {
                const botResponse = {
                    id: (Date.now() + 1).toString(),
                    text: `You asked: "${inputText}"\nI'm your AI assistant. How can I help you with that?`,
                    sender: 'bot',
                };
                setMessages((prevMessages) => [...prevMessages, botResponse]);
                
                // Scroll to the bottom
                if (flatListRef.current) {
                    flatListRef.current.scrollToOffset({ offset: 0, animated: true });
                }
            }, 1000);
        }
    };

    return (
        <KeyboardAvoidingView 
            style={styles.container} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={100}
        >
            <FlatList
                ref={flatListRef}
                style={styles.messageList}
                data={[...messages].reverse()}
                renderItem={({ item }) => <Message message={item} />}
                keyExtractor={(item) => item.id}
                inverted
                contentContainerStyle={styles.messageListContent}
            />
            
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={inputText}
                    onChangeText={setInputText}
                    placeholder="Type a message..."
                    multiline
                    maxLength={500}
                    placeholderTextColor="#888"
                    onSubmitEditing={handleSend}
                />
                
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={styles.sendButton}
                        onPress={handleSend}
                        disabled={inputText.trim() === ''}
                    >
                        <Send 
                            size={20} 
                            color={inputText.trim() ? "#fff" : "rgba(255,255,255,0.6)"} 
                        />
                    </TouchableOpacity>
                    
                    <VoiceInput setMessages={setMessages} style={styles.voiceButton} />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f7fb',
    },
    messageList: {
        flex: 1,
    },
    messageListContent: {
        paddingHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 16
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        backgroundColor: '#fff',
    },
    input: {
        flex: 1,
        minHeight: 40,
        maxHeight: 100,
        borderColor: '#e0e0e0',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginRight: 10,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sendButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#1284ff',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    voiceButton: {
        backgroundColor: '#15c39a',
    }
});

export default Chat;