import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView 
      {...props}
      contentContainerStyle={styles.container}
    >
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{ uri: 'https://placekitten.com/200/200' }} // Placeholder image
          />
          <View style={styles.userInfo}>
            <Text style={styles.title}>SpeechFlow</Text>
            <Text style={styles.subtitle}>Your AI Assistant</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.dividerLine} />
      
      {/* Standard drawer items from navigation */}
      <DrawerItemList {...props} />
      
      <View style={styles.dividerLine} />
      
      {/* Adding custom footer items */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>SpeechFlow • v1.0.0</Text>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#f5f5f5',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  userInfo: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  dividerLine: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#999',
  }
});

export default CustomDrawerContent;
