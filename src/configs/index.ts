import { Config } from './config';
import { Export } from './types';

export const configs = [
  new Config(
    'Preface',
    async (): Promise<Export> => {
      return await import('@/demos/preface') as unknown as Export;
    },
    '前言',
  ),
  new Config(
    'React',
    [
      new Config('Hooks', [
        new Config(
          'useState',
          async (): Promise<Export> => {
            return await import('@/demos/react/hooks/use-state') as unknown as Export;
          },
        ),
        new Config(
          'useRef',
          async (): Promise<Export> => {
            return await import('@/demos/react/hooks/use-ref') as unknown as Export;
          },
        ),
        new Config(
          'useCallback',
          async (): Promise<Export> => {
            return await import('@/demos/react/hooks/use-callback') as unknown as Export;
          },
        ),
      ]),
    ]
  ),
];