import React from 'react';
import { Box, Heading, Button, ButtonText } from '@gluestack-ui/themed';

const GluestackSimpleTest = () => {
  return (
    <Box p="$5" bg="$backgroundLight100" borderRadius="$lg" m="$4">
      <Heading size="md" mb="$4">Simple Test</Heading>
      <Button
        variant="solid"
        action="primary"
        size="md"
      >
        <ButtonText>Simple Button</ButtonText>
      </Button>
    </Box>
  );
};

export default GluestackSimpleTest;
