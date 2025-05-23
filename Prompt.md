# Improve error/exception handling

Investigate this project: 
Pls check the app for any potential errors or exceptions that may occur during runtime.
Make sure the app handles errors gracefully and provides meaningful feedback to users.
Make sure to test the app thoroughly to identify any potential issues.

# Microphone Button

When users tap and hold the microphone icon, the app will start recording their voice message.
When they release the button, the app will stop recording and send the voice message to the chatbot.

Help me decide which library to use for the microphone button.

# Our Story 

# Complete migration to GlueStack UI 

Next Steps
Complete the migration of remaining screens:

Use the migration guide to convert the remaining screens to Gluestack UI
Follow the same pattern we used for GluestackChatScreen and GluestackSettingsScreen
Test the application thoroughly:

Make sure all functionality works as expected
Check for any styling issues
Remove the old components:

Once all screens are using Gluestack components, remove the old React Native components
Update any remaining dependencies:

Make sure all dependencies are updated and consistent

# Remove `index.js`

# Use custom fonts

# TTS + STT Expo 

Recommendations for Your App

Stick with Current Setup for Simplicity: If your app’s current TTS (expo-speech) and STT (Web Speech API) meet your needs, keep them for web compatibility and simplicity.
Add Hugging Face for Advanced Features: If you need multilingual support, better accuracy, or custom voices, set up a backend with Whisper for STT and SpeechT5 or Bark for TTS.
Hybrid Approach: Use expo-speech and Web Speech API for real-time web interactions, with an option to switch to Hugging Face models (via API) for high-quality offline processing or specific use cases.
Explore Vite: As mentioned in your previous question, Vite could speed up development if you pivot to a pure React app. However, for React Native with Expo, stick with Expo’s build system unless you’re rewriting the app.



# Create a Humburger Menu

- New chat
- Chat history
- Settings
- Help
- About
- Feedback
- Share
- Rate us

# Chat screen UI

This is the main feature of the app, where users can interact with the chatbot.

The chat screen is designed to be user-friendly and visually appealing, with a clean layout and easy navigation.

Before using that chat, users see a 'Welcome' screen. 

After closing the 'Welcome' screen, users are taken to the chat screen. 

The chat screen is the main interface where users can interact with the chatbot. 
It includes a text input field for users to type their messages and a send button to submit them. 
The chat screen also displays the conversation history, showing both user messages and chatbot responses.

Users can tap and hold the microphone icon to record their voice messages.

Please use icons (not text) for the send button and microphone button.

# Chat screen logic 

The chat screen is the main interface where users can interact with the chatbot.

The msg will be sent to the chatbot and the chatbot will respond with a message.

The chat screen also displays the conversation history, showing both user messages and chatbot responses.

The app will use text-to-speech to read the chatbot's response aloud.

All happens in real-time, so users can have a natural conversation with the chatbot.

# Technology Stack

- Expo 53 (fixed version)
- TypeScript
- Redux
- GlueStack UI