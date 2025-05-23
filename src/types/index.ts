export interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

export interface ChatbotResponse {
    message: string;
    confidence: number;
}

export interface VoiceInputSettings {
    language: string;
    accent?: string;
    pitch?: number;
    rate?: number;
}