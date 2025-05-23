import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GluestackChat from '../components/GluestackChat';
import GluestackWelcome from '../components/GluestackWelcome';

const WELCOME_SEEN_KEY = 'welcome_seen';

const GluestackChatScreen = () => {
    const [showWelcome, setShowWelcome] = useState(true);
    
    useEffect(() => {
        // Check if the user has seen the welcome screen before
        const checkWelcomeSeen = async () => {
            try {
                const hasSeenWelcome = await AsyncStorage.getItem(WELCOME_SEEN_KEY);
                if (hasSeenWelcome === 'true') {
                    setShowWelcome(false);
                }
            } catch (error) {
                console.error('Error checking welcome status:', error);
            }
        };
        
        checkWelcomeSeen();
    }, []);
    
    const handleWelcomeClose = async () => {
        try {
            await AsyncStorage.setItem(WELCOME_SEEN_KEY, 'true');
            setShowWelcome(false);
        } catch (error) {
            console.error('Error saving welcome status:', error);
            // Still hide welcome screen even if storage fails
            setShowWelcome(false);
        }
    };

    return (
        <View style={styles.container}>
            <GluestackChat />
            {showWelcome && <GluestackWelcome onClose={handleWelcomeClose} />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        width: '100%',
    }
});

export default GluestackChatScreen;
