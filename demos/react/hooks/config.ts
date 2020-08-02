import { Config } from '@/src/config';
import { Export } from '@/src/config/types';

export const hooksConfig = new Config('Hooks', [
  new Config(
    'useState',
    async (): Promise<Export> => {
      return await import('./use-state') as unknown as Export;
    },
  ),
  new Config(
    'useRef',
    async (): Promise<Export> => {
      return await import('./use-ref') as unknown as Export;
    },
  ),
  new Config(
    'useCallback',
    async (): Promise<Export> => {
      return await import('./use-callback') as unknown as Export;
    },
  ),
]);