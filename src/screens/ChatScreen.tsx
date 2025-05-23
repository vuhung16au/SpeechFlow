import React, { useLayo            title: 'SpeechFlow Assistant',
            headerTitleStyle: {
                fontSize: 18,
                fontWeight: 'bold',fect, useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Chat from '../components/Chat';
import Welcome from '../components/Welcome';
import HamburgerIcon from '../components/HamburgerIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WELCOME_SEEN_KEY = 'welcome_seen';

const ChatScreen = () => {
    const navigation = useNavigation();
    const [welcomeClosed, setWelcomeClosed] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <HamburgerIcon 
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                    size="md" 
                    color="#1284ff" 
                />
            ),
            title: 'AI Chat Assistant',
            headerTitleStyle: {
                fontSize: 18,
                fontWeight: '600',
                color: '#1284ff',
            }
        });
    }, [navigation]);
    
    useEffect(() => {
        // Check if the user has seen the welcome screen before
        const checkWelcomeSeen = async () => {
            try {
                const hasSeenWelcome = await AsyncStorage.getItem(WELCOME_SEEN_KEY);
                if (hasSeenWelcome === 'true') {
                    setWelcomeClosed(true);
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
            setWelcomeClosed(true);
        } catch (error) {
            console.error('Error saving welcome status:', error);
            // Still allow the user to proceed even if storage fails
            setWelcomeClosed(true);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            
            <Chat welcomeClosed={welcomeClosed} />
            
            {!welcomeClosed && <Welcome onClose={handleWelcomeClose} />}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});

export default ChatScreen;