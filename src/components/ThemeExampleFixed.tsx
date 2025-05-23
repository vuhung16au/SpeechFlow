import React, { useState } from 'react';
import { View, StyleSheet, Text, Switch, TextInput, TouchableOpacity } from 'react-native';

interface ThemeExampleFixedProps {
  onPress?: () => void;
}

const ThemeExampleFixed: React.FC<ThemeExampleFixedProps> = ({ onPress }) => {
  const [switchValue, setSwitchValue] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>
          UI Example
        </Text>
        
        <Text style={styles.subtitle}>
          This component demonstrates the theme styling.
        </Text>
        
        <View style={styles.divider} />
        
        <View style={styles.contentContainer}>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={[styles.button, styles.primaryButton]} onPress={onPress}>
              <Text style={styles.buttonText}>Primary Button</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={onPress}>
              <Text style={styles.secondaryButtonText}>Secondary Button</Text>
            </TouchableOpacity>
          </View>
          
          <TextInput
            style={styles.input}
            placeholder="Type something..."
            value={inputValue}
            onChangeText={setInputValue}
          />
          
          <View style={styles.switchRow}>
            <Text>Enable notifications</Text>
            <Switch value={switchValue} onValueChange={setSwitchValue} />
          </View>
          
          <View style={styles.badge}>
            <Text style={styles.badgeText}>New</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginBottom: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#e4e4e7',
    marginVertical: 12,
  },
  contentContainer: {
    gap: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#1284ff',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#7c3aed',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  secondaryButtonText: {
    color: '#7c3aed',
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e4e4e7',
    borderRadius: 8,
    padding: 12,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  badge: {
    backgroundColor: '#e6f7ff',
    padding: 8,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  badgeText: {
    color: '#0070e0',
  },
});

export default ThemeExampleFixed;
