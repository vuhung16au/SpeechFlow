export const formatMessage = (message: string): string => {
    return message.trim();
};

export const isValidMessage = (message: string): boolean => {
    return message.length > 0;
};

export const delay = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
};