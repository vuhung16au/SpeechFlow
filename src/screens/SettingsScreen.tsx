import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const SettingsScreen = () => {
    const [isVoiceEnabled, setIsVoiceEnabled] = React.useState(true);

    const toggleVoice = () => {
        setIsVoiceEnabled(previousState => !previousState);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <View style={styles.setting}>
                <Text style={styles.label}>Enable Voice Responses</Text>
                <Switch
                    value={isVoiceEnabled}
                    onValueChange={toggleVoice}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    setting: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    label: {
        fontSize: 18,
        marginRight: 10,
    },
});

export default SettingsScreen;