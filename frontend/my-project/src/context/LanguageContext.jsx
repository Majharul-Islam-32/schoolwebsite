import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('bn'); // Default to Bangla as per user request context

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'bn' ? 'en' : 'bn'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
