import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Mock data for chat history
const mockChatHistory = [
  { id: '1', title: 'General Conversation', date: '2025-05-22', preview: 'Hi there! How can I help you today?' },
  { id: '2', title: 'Weather Inquiry', date: '2025-05-21', preview: 'What\'s the weather like in Paris?' },
  { id: '3', title: 'Technical Support', date: '2025-05-20', preview: 'I\'m having trouble with my microphone.' },
  { id: '4', title: 'Recipe Request', date: '2025-05-19', preview: 'How do I make pasta carbonara?' },
  { id: '5', title: 'Travel Planning', date: '2025-05-18', preview: 'I need recommendations for a weekend trip.' },
];

const ChatHistoryScreen = () => {
  const navigation = useNavigation();
  
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.chatItem} 
      onPress={() => {
        // This would normally load the specific chat
        navigation.navigate('Chat', { chatId: item.id });
      }}
    >
      <View style={styles.chatHeader}>
        <Text style={styles.chatTitle}>{item.title}</Text>
        <Text style={styles.chatDate}>{item.date}</Text>
      </View>
      <Text style={styles.chatPreview} numberOfLines={1}>
        {item.preview}
      </Text>
    </TouchableOpacity>
  );

  const EmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyTitle}>No Chat History</Text>
      <Text style={styles.emptySubtitle}>
        Your conversation history will appear here once you start chatting.
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mockChatHistory}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={EmptyList}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    padding: 16,
    flexGrow: 1,
  },
  chatItem: {
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#007BFF',
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  chatTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  chatDate: {
    fontSize: 14,
    color: '#666',
  },
  chatPreview: {
    fontSize: 14,
    color: '#555',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 100,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default ChatHistoryScreen;
