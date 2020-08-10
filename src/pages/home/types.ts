import { Demo } from '@/src/components/code-previewer/demo';
import { InspectorProps } from 'mic-inspector';
import { Config } from './menu-config';

export type Export = {
  [name: string]: Demo | InspectorProps;
} & {
  default: string;
};

export type DocLoader = Promise<Export>;

export interface Importer {
  (): DocLoader;
}

export interface RouteParams {
  [name: number]: string;
}

export interface Context {
  config: Config | null;

  setConfig(config: Config | null): void;
}