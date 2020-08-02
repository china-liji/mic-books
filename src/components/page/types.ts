import { Language, LanguageType } from '@/src/language/types';

export interface PageContext {
  language?: Language;

  languageType: LanguageType;

  setLanguageType(languageType: LanguageType): void;
}