import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(true);

  // Language detection based on IP
  useEffect(() => {
    const detectLanguage = async () => {
      try {
        // Try to get user's country from IP
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        // If user is from Armenia, set language to Armenian
        if (data.country_code === 'AM') {
          setLanguage('am');
        } else {
          setLanguage('en');
        }
      } catch (error) {
        console.log('Could not detect location, defaulting to English');
        setLanguage('en');
      } finally {
        setIsLoading(false);
      }
    };

    detectLanguage();
  }, []);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    // Store preference in localStorage
    localStorage.setItem('preferred-language', newLanguage);
  };

  // Load saved language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'am')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const value = {
    language,
    changeLanguage,
    isLoading
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
