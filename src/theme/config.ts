import { createConfig } from '@gluestack-ui/themed';

// Create a custom configuration with the default theme
export const config = createConfig({
  tokens: {
    colors: {
      primary500: '#007BFF',
      background: '#FFFFFF',
      text: '#333333',
    },
  },
});
