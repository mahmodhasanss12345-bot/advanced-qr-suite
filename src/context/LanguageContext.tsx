import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS } from '../constants/languages';
import type { SupportedLanguages, TranslationSchema } from '../constants/languages';

interface LanguageContextType {
  language: SupportedLanguages;
  setLanguage: (lang: SupportedLanguages) => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<SupportedLanguages>('en');

  useEffect(() => {
    const currentLangConfig = language === 'ur' || language === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.dir = currentLangConfig;
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: TRANSLATIONS[language]
  };

  return (
    <LanguageContext.Provider value={value}>
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

