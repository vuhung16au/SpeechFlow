import React from 'react';
import { Pressable, Icon } from '@gluestack-ui/themed';

interface HamburgerIconProps {
  onPress: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
}

// Define size mapping
const sizeMap = {
  'sm': 16,
  'md': 24,
  'lg': 32,
  'xl': 40
};

const HamburgerIcon = ({ onPress, size = 'md', color = '#1284ff' }: HamburgerIconProps) => {
  const iconSize = sizeMap[size] || 24;
  
  return (
    <TouchableOpacity onPress={onPress} style={{ padding: 8 }}>
      <Svg 
        width={iconSize} 
        height={iconSize} 
        viewBox="0 0 24 24"
      >
        <Path
          fill={color}
          d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default HamburgerIcon;
