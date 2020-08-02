import { Language, LanguageType, LanguageExport } from '@/src/language/types';
import { useLocation } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import { createContext } from 'react';
import { PageContext } from './types';

export const pageContext = createContext({} as PageContext);

export const useLanguageType = (): [LanguageType, (languageType: LanguageType) => void] => {
  const currentLanguageType = (
    new URLSearchParams(
      useLocation().search
    ).get('lang') as LanguageType
  );

  const [languageType, setLanguageType] = useState(
    useMemo((): LanguageType => {
      if (currentLanguageType) {
        const type = (currentLanguageType as string).toLowerCase();
    
        for (const name in LanguageType) {
          if ((LanguageType[name] as string).toLowerCase() === type) {
            return LanguageType[name] as LanguageType;
          }
        }
      }
    
      return localStorage.getItem('language') as LanguageType || LanguageType.CN;
    }, [])
  );

  return [
    languageType,
    (langType: LanguageType): void => {
      setLanguageType(langType);

      localStorage.setItem('language', langType);
    },
  ];
};

export const useLanguage = (languageType: LanguageType): Language | undefined => {
  const [language, setLanguage] = useState<Language>();

  useEffect((): void => {
    void import(`@/src/language/content/${(languageType as string).toLowerCase()}.ts`).then(({ language }: LanguageExport) => {
      setLanguage(language);
    });
  }, [languageType]);

  return language;
};