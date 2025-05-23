import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AlertCircle, ShieldAlert } from 'lucide-react-native';

interface WelcomeProps {
  onClose: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onClose }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome to SpeechFlow</Text>
        
        <Text style={styles.description}>
          This app is free, syncs your history across devices, and provides a seamless voice interaction experience.
        </Text>
        
        <View style={styles.warningContainer}>
          <AlertCircle size={24} color="#15c39a" style={styles.warningIcon} />
          <View style={styles.warningTextContainer}>
            <Text style={styles.warningTitle}>SpeechFlow can be inaccurate</Text>
            <Text style={styles.warningText}>
              SpeechFlow may provide inaccurate information about people, places, or facts.
            </Text>
          </View>
        </View>
        
        <View style={styles.warningContainer}>
          <ShieldAlert size={24} color="#7c3aed" style={styles.warningIcon} />
          <View style={styles.warningTextContainer}>
            <Text style={styles.warningTitle}>Don't share sensitive info</Text>
            <Text style={styles.warningText}>
              Anonymized chats may be reviewed by our AI trainers to improve our systems.
            </Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.button} onPress={onClose}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    width: '85%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#000',
  },
  description: {
    fontSize: 14,
    marginBottom: 20,
    lineHeight: 20,
    color: '#888',
  },
  warningContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  warningIcon: {
    marginRight: 12,
    marginTop: 2,
  },
  warningTextContainer: {
    flex: 1,
  },
  warningTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
    color: '#333',
  },
  warningText: {
    fontSize: 14,
    color: '#888',
    lineHeight: 19,
  },
  button: {
    backgroundColor: '#4e68fd',
    borderRadius: 25,
    padding: 14,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Welcome;
