import React, { createContext, useContext, useState, useCallback } from 'react';
import { Language, LanguageContextType } from '../types/language';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('de');

  const setLanguage = useCallback((newLanguage: Language) => {
    setLanguageState(newLanguage);
    // Force a re-render of all components that depend on translations
    window.dispatchEvent(new Event('languagechange'));
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};