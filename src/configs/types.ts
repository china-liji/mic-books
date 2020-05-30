import { Demo } from '../common/code-previewer/demo';

export type Export = {
  [name: string]: Demo;
} & {
  default: string;
};

export type Importer = () => Promise<Export>;