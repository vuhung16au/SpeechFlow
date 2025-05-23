import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Box, Text, Pressable, VStack, HStack, Heading } from '@gluestack-ui/themed';

// Mock data for chat history
const mockChatHistory = [
  { id: '1', title: 'General Conversation', date: '2025-05-22', preview: 'Hi there! How can I help you today?' },
  { id: '2', title: 'Weather Inquiry', date: '2025-05-21', preview: 'What\'s the weather like in Paris?' },
  { id: '3', title: 'Technical Support', date: '2025-05-20', preview: 'I\'m having trouble with my microphone.' },
  { id: '4', title: 'Recipe Request', date: '2025-05-19', preview: 'How do I make pasta carbonara?' },
  { id: '5', title: 'Travel Planning', date: '2025-05-18', preview: 'I need recommendations for a weekend trip.' },
];

const GluestackChatHistoryScreen = () => {
  const navigation = useNavigation();
  
  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => {
        // This would normally load the specific chat
        navigation.navigate('Chat', { chatId: item.id });
      }}
    >
      <Box
        bg="$backgroundLight50"
        borderRadius="$lg"
        p="$4"
        mb="$3"
        borderLeftWidth={4}
        borderLeftColor="$primary600"
      >
        <HStack justifyContent="space-between" mb="$2">
          <Text fontSize="$md" fontWeight="$bold" color="$textLight900">
            {item.title}
          </Text>
          <Text fontSize="$sm" color="$textLight500">
            {item.date}
          </Text>
        </HStack>
        <Text fontSize="$sm" color="$textLight700" numberOfLines={1}>
          {item.preview}
        </Text>
      </Box>
    </Pressable>
  );

  const EmptyList = () => (
    <VStack flex={1} justifyContent="center" alignItems="center" px="$5" py="$12">
      <Heading size="md" mb="$2.5">
        No Chat History
      </Heading>
      <Text textAlign="center" color="$textLight500" lineHeight="$md">
        Your conversation history will appear here once you start chatting.
      </Text>
    </VStack>
  );

  return (
    <Box flex={1} bg="$backgroundLight100" p="$4">
      <FlatList
        data={mockChatHistory}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={EmptyList}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </Box>
  );
};

export default GluestackChatHistoryScreen;
