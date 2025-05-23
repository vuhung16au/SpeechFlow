import React, { useState } from 'react';
import { StyleSheet, View, Text, Switch, TextInput, TouchableOpacity } from 'react-native';

interface ThemeExampleProps {
  onPress?: () => void;
}

const ThemeExample: React.FC<ThemeExampleProps> = ({ onPress }) => {
  const [switchValue, setSwitchValue] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          UI Example
        </Text>
        
        <Text style={styles.description}>
          This component demonstrates the theme styling.
        </Text>
        
        <View style={styles.divider} />
        
        <View style={styles.content}>
          <View style={styles.buttonRow}>
            <TouchableOpacity 
              style={[styles.button, styles.primaryButton]} 
              onPress={onPress}
            >
              <Text style={styles.buttonText}>Primary Button</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.button, styles.secondaryButton]} 
              onPress={onPress}
            >
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
            <Switch 
              value={switchValue} 
              onValueChange={setSwitchValue}
              trackColor={{ true: '#1284ff', false: '#e4e4e7' }}
            />
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
    backgroundColor: '#f0f9ff',
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#e4e4e7',
    marginVertical: 12,
  },
  content: {
    gap: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: '#f0f9ff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  badgeText: {
    color: '#1284ff',
  },
});
};

export default ThemeExample;
