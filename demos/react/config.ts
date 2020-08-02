import { Config } from '@/src/config';
import { hooksConfig } from './hooks/config';

export const reactConfig = new Config(
  'React',
  [
    hooksConfig,
  ]
);