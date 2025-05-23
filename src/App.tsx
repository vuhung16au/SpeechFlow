import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { View, Text, Button } from 'react-native';
import { config } from './theme/gluestack-config';
import { ErrorProvider } from './context/ErrorContext';
import ErrorBoundary from './components/ErrorBoundary';
import GluestackHamburgerIcon from './components/GluestackHamburgerIcon';
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
} from './components/GluestackDrawerIcons';

// Screens
import ChatScreen from './screens/ChatScreen';
import GluestackChatScreen from './screens/GluestackChatScreen';
import GluestackNewChatScreen from './screens/GluestackNewChatScreen';
import GluestackChatHistoryScreen from './screens/GluestackChatHistoryScreen';
import GluestackSettingsScreen from './screens/GluestackSettingsScreen';
import GluestackHelpScreen from './screens/GluestackHelpScreen';
import GluestackAboutScreen from './screens/GluestackAboutScreen';
import GluestackFeedbackScreen from './screens/GluestackFeedbackScreen';
import GluestackShareScreen from './screens/GluestackShareScreen';
import GluestackRateUsScreen from './screens/GluestackRateUsScreen';

// Components
import GluestackCustomDrawerContent from './components/GluestackCustomDrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Main stack navigator for screens that should be accessible from the drawer
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

// Drawer navigator that contains all screens accessible from the hamburger menu
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

const App = () => {
  return (
    <ErrorBoundary>
      <ErrorProvider>
        <GluestackUIProvider config={config}>
          <NavigationContainer>
            <DrawerNavigator />
          </NavigationContainer>
        </GluestackUIProvider>
      </ErrorProvider>
    </ErrorBoundary>
  );
};

export default App;