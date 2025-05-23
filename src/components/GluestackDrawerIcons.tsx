import React from 'react';
import { Icon } from '@gluestack-ui/themed';
import { 
  Home,
  MessageSquare,
  History,
  Settings,
  HelpCircle,
  Info,
  MessageSquareDots,
  Share2,
  Star
} from 'lucide-react-native';

interface IconProps {
  color: string;
  size: number;
}

export const HomeIcon: React.FC<IconProps> = ({ color, size }) => {
  return <Icon as={Home} color={color} size={size} />;
};

export const NewChatIcon: React.FC<IconProps> = ({ color, size }) => {
  return <Icon as={MessageSquare} color={color} size={size} />;
};

export const HistoryIcon: React.FC<IconProps> = ({ color, size }) => {
  return <Icon as={History} color={color} size={size} />;
};

export const SettingsIcon: React.FC<IconProps> = ({ color, size }) => {
  return <Icon as={Settings} color={color} size={size} />;
};

export const HelpIcon: React.FC<IconProps> = ({ color, size }) => {
  return <Icon as={HelpCircle} color={color} size={size} />;
};

export const AboutIcon: React.FC<IconProps> = ({ color, size }) => {
  return <Icon as={Info} color={color} size={size} />;
};

export const FeedbackIcon: React.FC<IconProps> = ({ color, size }) => {
  return <Icon as={MessageSquareDots} color={color} size={size} />;
};

export const ShareIcon: React.FC<IconProps> = ({ color, size }) => {
  return <Icon as={Share2} color={color} size={size} />;
};

export const RateIcon: React.FC<IconProps> = ({ color, size }) => {
  return <Icon as={Star} color={color} size={size} />;
};
