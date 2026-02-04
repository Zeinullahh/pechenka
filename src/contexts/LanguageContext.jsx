"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { AVAILABLE_LANGUAGES } from "@/constants/languages";

const STORAGE_KEY = "silenceai-language";
const LOCALE_COOKIE = "NEXT_LOCALE";

const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
  t: (key, fallback, values) => fallback ?? key,
});

export const LanguageProvider = ({ children, initialLanguage }) => {
  const router = useRouter();
  const pathname = usePathname();
  // We use the root translations namespace to access all keys
  const t_next = useTranslations();

  // State initialized from URL (prop), acts as source of truth
  const [language, setLanguageState] = useState(initialLanguage);

  // Sync state if initialLanguage changes (e.g. navigation)
  useEffect(() => {
    setLanguageState(initialLanguage);
  }, [initialLanguage]);

  // Persist preference, but do NOT override current URL locale
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, language);
      document.cookie = `${LOCALE_COOKIE}=${language}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
      document.documentElement.lang = language;
    }
  }, [language]);

  const setLanguage = (newLanguage) => {
    if (newLanguage === language) return;

    // Navigate to the localized URL using next-intl router
    // This ensures /en/about becomes /ru/about
    router.replace(pathname, { locale: newLanguage });

    // Optimistic update
    setLanguageState(newLanguage);
  };

  const translate = (key, fallback, values) => {
    try {
      // Use next-intl translation
      const result = t_next(key, values);
      
      // Heuristic: if result is same as key (and key has dots), it might be missing
      // Logic: if key "home.title" returns "home.title", and fallback exists, use fallback.
      if (result === key && key.includes('.') && fallback) {
        return fallback;
      }
      return result;
    } catch (error) {
       return fallback || key;
    }
  };

  const value = useMemo(() => ({
    language,
    setLanguage,
    t: translate,
  }), [language, pathname]); // Re-create when language changes (t captures closure if needed, though useTranslations is safer)

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export { AVAILABLE_LANGUAGES };
