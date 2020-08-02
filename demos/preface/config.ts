import { Config } from '@/src/config';
import { Export } from '@/src/config/types';
import { Language } from '@/src/language/types';

export const prefaceConfig = new Config(
  'preface',
  async (): Promise<Export> => {
    return await import('./index') as unknown as Export;
  },
  (language: Language): string => {
    return language.menu.preface;
  },
);