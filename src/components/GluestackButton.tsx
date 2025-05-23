import React from 'react';
import { Button, ButtonText, ButtonIcon } from '@gluestack-ui/themed';

interface GluestackButtonProps {
  onPress: () => void;
  title: string;
  icon?: React.ReactNode;
  variant?: 'solid' | 'outline' | 'link';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  isDisabled?: boolean;
  colorScheme?: string;
}

const GluestackButton = ({
  onPress,
  title,
  icon,
  variant = 'solid',
  size = 'md',
  isDisabled = false,
  colorScheme = 'primary'
}: GluestackButtonProps) => {
  return (
    <Button
      onPress={onPress}
      variant={variant}
      size={size}
      isDisabled={isDisabled}
      action={colorScheme}
    >
      {icon && <ButtonIcon>{icon}</ButtonIcon>}
      <ButtonText>{title}</ButtonText>
    </Button>
  );
};

export default GluestackButton;
