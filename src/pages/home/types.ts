import { Demo } from '@/src/components/code-previewer/demo';
import { InspectorProps } from 'mic-inspector';

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
  docLoader: DocLoader | null;

  setDocLoader(docLoader: DocLoader | null): void;

  setTitle(title: string): void;

  title: string;
}