import React from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer';
import { 
  Box, 
  VStack, 
  HStack, 
  Heading, 
  Text, 
  Image, 
  Divider
} from '@gluestack-ui/themed';

const GluestackCustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <DrawerContentScrollView 
      {...props}
    >
      <Box px="$4" py="$6">
        <HStack space="md" alignItems="center" mb="$4">
          <Image
            source={{ uri: 'https://placekitten.com/200/200' }} // Placeholder image
            alt="User Avatar"
            size="md"
            borderRadius="$full"
          />
          <VStack>
            <Heading size="md">SpeechFlow</Heading>
            <Text size="sm" color="$textLight500">Your AI Assistant</Text>
          </VStack>
        </HStack>
      </Box>
      
      <Divider />
      
      {/* Standard drawer items from navigation */}
      <DrawerItemList {...props} />
      
      <Divider my="$2" />
      
      {/* Custom footer items could be added here */}
      
    </DrawerContentScrollView>
  );
};

export default GluestackCustomDrawerContent;
