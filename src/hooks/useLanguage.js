import { useEffect, useState } from 'react';

export function useLanguage() {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') {
      return 'fr';
    }

    return window.localStorage.getItem('locksmith-site-language') || 'fr';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('locksmith-site-language', language);
      document.documentElement.lang = language;
    }
  }, [language]);

  return [language, setLanguage];
}
