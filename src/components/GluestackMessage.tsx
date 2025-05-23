import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MessageProps {
  message: {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp?: string;
  };
}

const GluestackMessage: React.FC<MessageProps> = ({ message }) => {
  const { text, sender, timestamp } = message;
  
  const isUser = sender === 'user';
  const isChatBot = sender === 'bot';
  
  return (
    <View style={[styles.messageContainer, isUser ? styles.userMessageContainer : styles.botMessageContainer]}>
      {isChatBot && (
        <View style={styles.botHeader}>
          <View style={styles.botDot} />
          <Text style={styles.botLabel}>SpeechFlow</Text>
        </View>
      )}
      
      <Text style={[styles.messageText, isUser ? styles.userText : styles.botText]}>
        {text}
      </Text>
      
      {timestamp && (
        <Text style={[styles.timestamp, isUser ? styles.userTimestamp : styles.botTimestamp]}>
          {timestamp}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 18,
    marginVertical: 6,
    maxWidth: '80%',
  },
  userMessageContainer: {
    backgroundColor: '#4e68fd',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
    marginLeft: '20%',
  },
  botMessageContainer: {
    backgroundColor: '#f7f7f8',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 4,
    marginRight: '20%',
  },
  messageText: {
    fontSize: 15,
    lineHeight: 22,
  },
  userText: {
    color: '#ffffff',
  },
  botText: {
    color: '#000000',
  },
  timestamp: {
    fontSize: 12,
    marginTop: 4,
    alignSelf: 'flex-end',
  },
  userTimestamp: {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  botTimestamp: {
    color: '#666',
  },
  botHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  botDot: {
    width: 8,
    height: 8,
    backgroundColor: '#4e68fd',
    borderRadius: 4,
    marginRight: 8,
  },
  botLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000',
  }
});

export default GluestackMessage;
