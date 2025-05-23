import { useEffect } from 'react';
import { SpeechRecognition } from 'web-speech-api'; // or any other speech recognition library
import { TextToSpeech } from 'some-tts-library'; // replace with actual TTS library

const speechService = {
    recognizeSpeech: (onResult) => {
        const recognition = new SpeechRecognition();
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            onResult(transcript);
        };
        recognition.start();
    },

    speak: (text) => {
        const tts = new TextToSpeech();
        tts.speak(text);
    }
};

export default speechService;