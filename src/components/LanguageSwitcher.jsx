import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  const handleLanguageChange = () => {
    const newLanguage = language === 'en' ? 'am' : 'en';
    changeLanguage(newLanguage);
  };

  return (
    <button
      onClick={handleLanguageChange}
      className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/5 transition-colors"
      aria-label={`Switch to ${language === 'en' ? 'Armenian' : 'English'}`}
      title={`Switch to ${language === 'en' ? 'Armenian' : 'English'}`}
    >
      {language === 'en' ? (
        // Armenian flag icon (simplified)
        <div className="w-6 h-4 bg-gradient-to-b from-red-500 via-blue-500 to-orange-500 rounded-sm flex items-center justify-center">
          <span className="text-white text-xs font-bold">AM</span>
        </div>
      ) : (
        // English flag icon (simplified)
        <div className="w-6 h-4 bg-gradient-to-b from-blue-600 via-white to-red-600 rounded-sm flex items-center justify-center">
          <span className="text-blue-600 text-xs font-bold">EN</span>
        </div>
      )}
    </button>
  );
}
