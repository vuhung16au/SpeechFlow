import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { User, Bot } from 'lucide-react-native';

interface MessageProps {
  message: {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp?: string;
  };
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const { text, sender, timestamp } = message;
  const formattedTimestamp = timestamp || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  return (
    <View style={styles.wrapper}>
      {sender === 'bot' && (
        <View style={styles.avatarContainer}>
          <Bot size={20} color="#1284ff" />
        </View>
      )}
      
      <View style={[
        styles.messageContainer, 
        sender === 'user' ? styles.userMessage : styles.botMessage
      ]}>
        <Text style={[
          styles.messageText,
          sender === 'user' ? styles.userMessageText : styles.botMessageText
        ]}>{text}</Text>
        
        <Text style={styles.timestamp}>{formattedTimestamp}</Text>
      </View>
      
      {sender === 'user' && (
        <View style={styles.avatarContainer}>
          <User size={20} color="#15c39a" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems: 'flex-end',
  },
  messageContainer: {
    padding: 12,
    borderRadius: 18,
    maxWidth: '75%',
    minWidth: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  userMessage: {
    backgroundColor: '#15c39a',
    borderBottomRightRadius: 4,
    marginLeft: 'auto',
    marginRight: 8,
  },
  botMessage: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 4,
    marginRight: 'auto',
    marginLeft: 8,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  userMessageText: {
    color: '#fff',
  },
  botMessageText: {
    color: '#333',
  },
  timestamp: {
    fontSize: 11,
    color: 'rgba(0,0,0,0.4)',
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  avatarContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Message;