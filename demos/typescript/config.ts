import { Config } from '@/src/config';
import { Export } from '@/src/config/types';
import { Language } from '@/src/language/types';

export const typescriptConfig = new Config(
  'Typescript',
  [
    new Config(
      'interface&type',
      async (): Promise<Export> => {
        return await import('./interface-type.md') as unknown as Export;
      },
      (language: Language): string => {
        return language.menu.typescript.interfaceAndType;
      }
    ),
  ]
);