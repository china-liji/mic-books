import { Config } from '@/src/config';
import { Export } from '@/src/config/types';
import { Language } from '@/src/language/types';

export const domConfig = new Config(
  'DOM',
  [
    new Config(
      'doc',
      async (): Promise<Export> => {
        return await import('./doc') as unknown as Export;
      },
      (language: Language): string => {
        return language.menu.dom.docStructure;
      }
    ),
    // new Config(
    //   'intro',
    //   async (): Promise<Export> => {
    //     return await import('@/demos/dom') as unknown as Export;
    //   },
    //   '序言'
    // )
  ]
);