import React from 'react';
import { Box } from '@gluestack-ui/themed';
import GluestackChat from '../components/GluestackChat';

const GluestackNewChatScreen = () => {
  return (
    <Box flex={1} bg="$backgroundLight100">
      <GluestackChat />
    </Box>
  );
};

export default GluestackNewChatScreen;
