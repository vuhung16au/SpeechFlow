import React, { createContext, useState, useContext } from 'react';
import { Alert } from 'react-native';

interface ErrorContextType {
  showError: (message: string, title?: string) => void;
  clearError: () => void;
  lastError: string | null;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const ErrorProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [lastError, setLastError] = useState<string | null>(null);

  const showError = (message: string, title: string = 'Error') => {
    setLastError(message);
    
    // Show an alert to the user
    Alert.alert(
      title,
      message,
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
    );
  };

  const clearError = () => {
    setLastError(null);
  };

  return (
    <ErrorContext.Provider value={{ showError, clearError, lastError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useError = (): ErrorContextType => {
  const context = useContext(ErrorContext);
  if (context === undefined) {
    throw new Error('useError must be used within an ErrorProvider');
  }
  return context;
};
