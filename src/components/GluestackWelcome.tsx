import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { AlertCircle, ShieldAlert } from 'lucide-react-native';

interface GluestackWelcomeProps {
  onClose: () => void;
}

const GluestackWelcome: React.FC<GluestackWelcomeProps> = ({ onClose }) => {
  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to SpeechFlow</Text>
        
        <Text style={styles.subtitle}>
          This app is free, syncs your history across devices, and provides a seamless voice interaction experience.
        </Text>
        
        <View style={styles.infoSection}>
          <View style={styles.infoRow}>
            <View style={styles.iconContainer}>
              <AlertCircle color="#22C55E" size={24} />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>SpeechFlow can be inaccurate</Text>
              <Text style={styles.infoDescription}>
                SpeechFlow may provide inaccurate information about people, places, or facts.
              </Text>
            </View>
          </View>
          
          <View style={styles.infoRow}>
            <View style={styles.iconContainer}>
              <ShieldAlert color="#8B5CF6" size={24} />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>Don't share sensitive info</Text>
              <Text style={styles.infoDescription}>
                Anonymized chats may be reviewed by our AI trainers to improve our systems.
              </Text>
            </View>
          </View>
        </View>
        
        <Pressable 
          onPress={onClose} 
          style={styles.button}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 24,
    width: '85%',
    maxWidth: 400,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12
  },
  subtitle: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 20,
    lineHeight: 20
  },
  infoSection: {
    marginBottom: 20
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12
  },
  iconContainer: {
    paddingTop: 4
  },
  infoContent: {
    marginLeft: 12
  },
  infoTitle: {
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 4
  },
  infoDescription: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 16
  },
  button: {
    backgroundColor: '#4e68fd',
    borderRadius: 24,
    marginTop: 16,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600'
  }
});

export default GluestackWelcome;
