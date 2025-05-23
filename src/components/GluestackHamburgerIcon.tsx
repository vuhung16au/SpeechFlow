import React from 'react';
import { Pressable, Icon } from '@gluestack-ui/themed';
import { Menu } from 'lucide-react-native';

interface GluestackHamburgerIconProps {
  onPress: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
}

const GluestackHamburgerIcon = ({ onPress, size = 'md', color = '#1284ff' }: GluestackHamburgerIconProps) => {
  return (
    <Pressable onPress={onPress} p="$2">
      <Icon as={Menu} size={size} color={color} />
    </Pressable>
  );
};

export default GluestackHamburgerIcon;
