# SpeechFlow

This project is a web-based chatbot application built using Expo. It integrates text-to-speech and speech-to-text functionalities to provide an interactive user experience.

## Features

- Voice input for user interactions
- Text-to-speech responses
- Simple and intuitive user interface
- Modular components for easy maintenance and scalability

## Project Structure

```
speechflow
├── src
│   ├── assets
│   │   └── sounds
│   ├── components
│   │   ├── Chat.tsx
│   │   ├── Message.tsx
│   │   └── VoiceInput.tsx
│   ├── hooks
│   │   ├── useSpeechRecognition.ts
│   │   └── useTextToSpeech.ts
│   ├── services
│   │   ├── api.ts
│   │   └── speechService.ts
│   ├── screens
│   │   ├── ChatScreen.tsx
│   │   └── SettingsScreen.tsx
│   ├── types
│   │   └── index.ts
│   ├── utils
│   │   └── helpers.ts
│   └── App.tsx
├── app.json
├── babel.config.js
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/speechflow.git
   ```
2. Navigate to the project directory:
   ```
   cd speechflow
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```

This will open the Expo development server, and you can scan the QR code with the Expo Go app on your mobile device to view the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.