import { Config } from '../../config';
import { config } from '@/demos/config';

export const getDefaultConfig = (cfg = config): Config | null => {
  for (const c of cfg) {

    if (c.isLeaf) {
      return c;
    }

    const defaultConfig = getDefaultConfig(c.configs);

    if (defaultConfig) {
      return defaultConfig;
    }
  }

  return null;
};

export const getConfigByPath = (path: string, cfg = config): Config | null => {
  for (const c of cfg) {
    if (c.key === path) {
      return c;
    }

    const defaultConfig = getConfigByPath(path, c.configs);

    if (defaultConfig) {
      return defaultConfig;
    }
  }

  return null;
};