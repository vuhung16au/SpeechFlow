import { createConfig } from '@gluestack-ui/themed';

// Define your custom theme with the config structure expected by gluestack-ui v1
export const customTheme = createConfig({
  tokens: {
    colors: {
      // Primary Colors
      primary0: '#e6f7ff',
      primary100: '#bae3ff',
      primary200: '#8dcfff',
      primary300: '#5bb7ff',
      primary400: '#369eff',
      primary500: '#1284ff', // Primary color
      primary600: '#0070e0',
      primary700: '#005cb8',
      primary800: '#004990',
      primary900: '#003768',
      
      // Secondary Colors
      secondary0: '#f9f0ff',
      secondary100: '#e9d2ff',
      secondary200: '#d8b4ff',
      secondary300: '#c795ff',
      secondary400: '#b577ff',
      secondary500: '#a45dff', // Secondary color
      secondary600: '#9048e8',
      secondary700: '#7a34c4',
      secondary800: '#6421a0',
      secondary900: '#4e147c',
      
      // Base colors
      background: '#FFFFFF',
      text: '#333333',
    },
    space: {
      '4xs': 2,
      '3xs': 4,
      '2xs': 8,
      'xs': 12,
      'sm': 16,
      'md': 20,
      'lg': 24,
      'xl': 32,
      '2xl': 40,
      '3xl': 48,
      '4xl': 64,
    },
    radii: {
      'xs': 4,
      'sm': 6,
      'md': 8,
      'lg': 12,
      'xl': 16,
      '2xl': 24,
      'full': 9999,
    },
  },
  aliases: {
    // Map tokens to component properties
    bg: 'backgroundColor',
    bgColor: 'backgroundColor',
    h: 'height',
    w: 'width',
    p: 'padding',
    px: 'paddingHorizontal',
    py: 'paddingVertical',
    pt: 'paddingTop',
    pb: 'paddingBottom',
    pl: 'paddingLeft',
    pr: 'paddingRight',
    m: 'margin',
    mx: 'marginHorizontal',
    my: 'marginVertical',
    mt: 'marginTop',
    mb: 'marginBottom',
    ml: 'marginLeft',
    mr: 'marginRight',
    rounded: 'borderRadius',
  }
});
