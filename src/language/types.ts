import { language } from './content/zh-cn';

export enum LanguageType {
  CN = 'zh-CN',

  EN = 'en-US'
}

export type Language = typeof language;

export interface LanguageExport {
  language: Language;
}