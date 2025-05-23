import { config } from '@gluestack-ui/themed';

// Create a clean, simplified theme that extends the default config
const theme = {
  ...config,
  tokens: {
    ...config.tokens,
    colors: {
      ...config.tokens.colors,
      // Primary colors
      primary50: '#e6f7ff',
      primary100: '#bae3ff',
      primary200: '#8dcfff',
      primary300: '#5bb7ff',
      primary400: '#369eff',
      primary500: '#1284ff',
      primary600: '#0070e0',
      primary700: '#005cb8',
      primary800: '#004990',
      primary900: '#003768',
      
      // Secondary colors
      secondary50: '#f9f0ff',
      secondary100: '#e9d2ff',
      secondary200: '#d8b4ff',
      secondary300: '#c795ff',
      secondary400: '#b577ff',
      secondary500: '#a45dff',
      secondary600: '#9048e8',
      secondary700: '#7a34c4',
      secondary800: '#6421a0',
      secondary900: '#4e147c',
    }
  }
};

export default theme;
