import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from './src/theme/gluestack-config';
import GluestackHamburgerIcon from './src/components/GluestackHamburgerIcon';
import { 
  HomeIcon, 
  NewChatIcon, 
  HistoryIcon, 
  SettingsIcon, 
  HelpIcon, 
  AboutIcon, 
  FeedbackIcon, 
  ShareIcon, 
  RateIcon 
} from './src/components/GluestackDrawerIcons';

// Screens
import GluestackChatScreen from './src/screens/GluestackChatScreen';
import GluestackNewChatScreen from './src/screens/GluestackNewChatScreen';
import GluestackChatHistoryScreen from './src/screens/GluestackChatHistoryScreen';
import GluestackSettingsScreen from './src/screens/GluestackSettingsScreen';
import GluestackHelpScreen from './src/screens/GluestackHelpScreen';
import GluestackAboutScreen from './src/screens/GluestackAboutScreen';
import GluestackFeedbackScreen from './src/screens/GluestackFeedbackScreen';
import GluestackShareScreen from './src/screens/GluestackShareScreen';
import GluestackRateUsScreen from './src/screens/GluestackRateUsScreen';

// Components
import GluestackCustomDrawerContent from './src/components/GluestackCustomDrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Main stack navigator
const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ChatScreen" 
        component={GluestackChatScreen}
        options={({ navigation }) => ({
          title: 'Chat',
          headerLeft: () => (
            <GluestackHamburgerIcon
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
              size="md"
              color="#1284ff"
            />
          )
        })}
      />
    </Stack.Navigator>
  );
};

// Drawer navigator with custom drawer content
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <GluestackCustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#007BFF',
        drawerInactiveTintColor: '#333333',
        drawerLabelStyle: {
          marginLeft: -20,
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={MainStack}
        options={{
          title: 'Home',
          drawerIcon: ({ color, size }) => <HomeIcon color={color} size={size} />
        }}
      />
      <Drawer.Screen 
        name="NewChat" 
        component={GluestackNewChatScreen}
        options={{
          title: 'New Chat',
          drawerIcon: ({ color, size }) => <NewChatIcon color={color} size={size} />
        }}
      />
      <Drawer.Screen 
        name="ChatHistory" 
        component={GluestackChatHistoryScreen}
        options={{
          title: 'Chat History',
          drawerIcon: ({ color, size }) => <HistoryIcon color={color} size={size} />
        }}
      />
      <Drawer.Screen 
        name="Settings" 
        component={GluestackSettingsScreen}
        options={{
          title: 'Settings',
          drawerIcon: ({ color, size }) => <SettingsIcon color={color} size={size} />
        }}
      />
      <Drawer.Screen 
        name="Help" 
        component={GluestackHelpScreen}
        options={{
          title: 'Help',
          drawerIcon: ({ color, size }) => <HelpIcon color={color} size={size} />
        }}
      />
      <Drawer.Screen 
        name="About" 
        component={GluestackAboutScreen}
        options={{
          title: 'About',
          drawerIcon: ({ color, size }) => <AboutIcon color={color} size={size} />
        }}
      />
      <Drawer.Screen 
        name="Feedback" 
        component={GluestackFeedbackScreen}
        options={{
          title: 'Feedback',
          drawerIcon: ({ color, size }) => <FeedbackIcon color={color} size={size} />
        }}
      />
      <Drawer.Screen 
        name="Share" 
        component={GluestackShareScreen}
        options={{
          title: 'Share',
          drawerIcon: ({ color, size }) => <ShareIcon color={color} size={size} />
        }}
      />
      <Drawer.Screen 
        name="RateUs" 
        component={GluestackRateUsScreen}
        options={{
          title: 'Rate Us',
          drawerIcon: ({ color, size }) => <RateIcon color={color} size={size} />
        }}
      />
    </Drawer.Navigator>
  );
};

export default function Main() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
