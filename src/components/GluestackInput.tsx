import React from 'react';
import { Input, InputField, InputSlot, InputIcon } from '@gluestack-ui/themed';

interface GluestackInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  type?: 'text' | 'password';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'outline' | 'rounded' | 'underlined';
  icon?: React.ReactNode;
}

const GluestackInput = ({
  value,
  onChangeText,
  placeholder = '',
  isDisabled = false,
  isInvalid = false,
  type = 'text',
  size = 'md',
  variant = 'outline',
  icon
}: GluestackInputProps) => {
  return (
    <Input
      size={size}
      variant={variant}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
    >
      {icon && (
        <InputSlot>
          <InputIcon>{icon}</InputIcon>
        </InputSlot>
      )}
      <InputField
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        type={type}
      />
    </Input>
  );
};

export default GluestackInput;
