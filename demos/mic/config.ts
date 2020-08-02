import { Config } from '@/src/config';
import { micInspectorConfig } from './mic-inspector/config';
import { Language } from '@/src/language/types';

export const micConfig = new Config(
  'MIC',
  [
    micInspectorConfig,
  ],
  (language: Language): string => {
    return language.menu.mic.index;
  }
);