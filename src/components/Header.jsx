import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const buttonRef = useRef(null);
  const drawerRef = useRef(null);
  const firstFocusableRef = useRef(null);
  const lastFocusableRef = useRef(null);

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;

    const handleTabKey = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableRef.current) {
            e.preventDefault();
            lastFocusableRef.current?.focus();
          }
        } else {
          if (document.activeElement === lastFocusableRef.current) {
            e.preventDefault();
            firstFocusableRef.current?.focus();
          }
        }
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeDrawer();
      }
    };

    document.addEventListener('keydown', handleTabKey);
    document.addEventListener('keydown', handleEscape);
    
    // Focus first element
    firstFocusableRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleTabKey);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const openDrawer = () => {
    setIsOpen(true);
    setIsAnimating(true);
  };

  const closeDrawer = () => {
    setIsAnimating(true);
    setIsOpen(false);
    // Restore focus to trigger button
    buttonRef.current?.focus();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeDrawer();
    }
  };

  const handleTransitionEnd = () => {
    setIsAnimating(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/5 bg-gray-900/80 backdrop-blur">
        <div className="container-xl flex h-20 md:h-24 lg:h-28 items-center justify-between">
          <a href="/" className="flex items-center gap-3 md:gap-4">
            <img
              src="/voltex-logo.png"
              alt="Voltex"
              className="block h-auto w-auto max-h-12 md:max-h-16 lg:max-h-20 object-contain"
              width="128"
              height="32"
            />
            <div className="text-base md:text-lg font-bold tracking-wide">
              VOLTEX <span className="text-green-500">LLC</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm">
            <a href="#services" className="hover:text-green-500">{t.services}</a>
            <a href="#why" className="hover:text-green-500">{t.whyVoltex}</a>
            <a href="#contact" className="hover:text-green-500">{t.contact}</a>
            <a href="mailto:info@voltex.am" className="btn-primary">{t.getQuote}</a>
            <LanguageSwitcher />
          </nav>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              ref={buttonRef}
              className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/5 transition-colors"
              onClick={openDrawer}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={handleOverlayClick}
        />
        
        {/* Drawer Panel */}
        <div
          ref={drawerRef}
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-gray-900/95 backdrop-blur border-l border-white/5 transform transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onTransitionEnd={handleTransitionEnd}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/5">
            <h2 className="text-lg font-semibold">{t.menu}</h2>
            <button
              className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-white/5 transition-colors"
              onClick={closeDrawer}
              aria-label="Close mobile menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-6 space-y-4">
            <a
              ref={firstFocusableRef}
              href="#services"
              className="block py-3 px-4 rounded-lg hover:bg-white/5 hover:text-green-500 transition-colors"
              onClick={closeDrawer}
            >
              {t.services}
            </a>
            <a
              href="#why"
              className="block py-3 px-4 rounded-lg hover:bg-white/5 hover:text-green-500 transition-colors"
              onClick={closeDrawer}
            >
              {t.whyVoltex}
            </a>
            <a
              href="#contact"
              className="block py-3 px-4 rounded-lg hover:bg-white/5 hover:text-green-500 transition-colors"
              onClick={closeDrawer}
            >
              {t.contact}
            </a>
            <a
              ref={lastFocusableRef}
              href="mailto:info@voltex.am"
              className="btn-primary w-full justify-center"
              onClick={closeDrawer}
            >
              {t.getQuote}
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
