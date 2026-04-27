import React from 'react'
import { createContext, useContext, useState } from "react";
import { translations } from "./translations/translations";


type Lang = "es" | "en";

type ContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: typeof translations.es;
};

const LanguageContext = createContext<ContextType | null>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>("es");

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside provider");
  return context;
};