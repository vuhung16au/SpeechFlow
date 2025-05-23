import React from 'react';
import { Box, Heading, HStack, Text, Switch, VStack } from '@gluestack-ui/themed';

const GluestackSettingsScreen = () => {
    const [isVoiceEnabled, setIsVoiceEnabled] = React.useState(true);

    const toggleVoice = () => {
        setIsVoiceEnabled(previousState => !previousState);
    };

    return (
        <Box flex={1} p="$4" bg="$backgroundLight100">
            <Heading size="xl" mb="$8" textAlign="center">Settings</Heading>
            
            <VStack space="lg">
                <HStack justifyContent="space-between" alignItems="center" p="$4" borderBottomWidth={1} borderBottomColor="$borderLight200">
                    <Text size="lg" fontWeight="$medium">Enable Voice Responses</Text>
                    <Switch
                        value={isVoiceEnabled}
                        onValueChange={toggleVoice}
                        size="md"
                        trackColor={{ false: "$gray400", true: "$primary600" }}
                    />
                </HStack>
                
                <HStack justifyContent="space-between" alignItems="center" p="$4" borderBottomWidth={1} borderBottomColor="$borderLight200">
                    <Text size="lg" fontWeight="$medium">Dark Mode</Text>
                    <Switch
                        size="md"
                        trackColor={{ false: "$gray400", true: "$primary600" }}
                    />
                </HStack>
                
                <HStack justifyContent="space-between" alignItems="center" p="$4" borderBottomWidth={1} borderBottomColor="$borderLight200">
                    <Text size="lg" fontWeight="$medium">Notifications</Text>
                    <Switch
                        size="md"
                        trackColor={{ false: "$gray400", true: "$primary600" }}
                    />
                </HStack>
            </VStack>
        </Box>
    );
};

export default GluestackSettingsScreen;
