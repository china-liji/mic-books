import { Config } from '@/src/config';

export interface MenuProps {
  config: Config;

  onChange(config: Config): void;
}